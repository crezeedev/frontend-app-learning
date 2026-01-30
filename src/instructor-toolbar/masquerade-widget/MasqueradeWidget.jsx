import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Dropdown } from '@openedx/paragon';

import { UserMessagesContext } from '../../generic/user-messages';

import MasqueradeUserNameInput from './MasqueradeUserNameInput';
import MasqueradeWidgetOption from './MasqueradeWidgetOption';
import {
  getMasqueradeOptions,
  postMasqueradeOptions,
} from './data/api';
import messages from './messages';


const translationsMap = {
  'Learner': 'Estudiante',
  'Staff': 'Personal / Staff',
  'Personal': 'Personal',
  'Specific Student...': 'Estudiante específico...',
  'View this course as:': 'Ver este curso como:',
};

const translate = (text) => translationsMap[text] || text;

class MasqueradeWidget extends Component {
  constructor(props) {
    super(props);
    this.courseId = props.courseId;
    this.state = {
      autoFocus: false,
      masquerade: 'Personal',
      active: {},
      available: [],
      shouldShowUserNameInput: false,
      masqueradeUsername: null,
    };
  }

  componentDidMount() {
    getMasqueradeOptions(this.courseId).then((data) => {
      if (data.success) {
        this.onSuccess(data);
      } else {
        // This was explicitly denied by the backend;
        // assume it's disabled/unavailable.
        // eslint-disable-next-line no-console
        this.onError('Unable to get masquerade options');
      }
    }).catch((response) => {
      // There's not much we can do to recover;
      // if we can't fetch masquerade options,
      // assume it's disabled/unavailable.
      // eslint-disable-next-line no-console
      console.error('Unable to get masquerade options', response);
    });
  }

  onError(message) {
    this.props.onError(message);
  }

  async onSubmit(payload) {
    this.clearError();
    const options = await postMasqueradeOptions(this.courseId, payload);
    return options;
  }

  onSuccess(data) {
    const { active, available } = this.parseAvailableOptions(data);
    this.setState({
      active,
      available,
    });
  }

// 2. Modificamos getOptions para traducir el nombre en el listado
  getOptions() {
    const options = this.state.available.map((group) => (
      <MasqueradeWidgetOption
        groupId={group.groupId}
        groupName={translate(group.name)} // <--- CAMBIO: Traducción aquí
        key={group.name}
        role={group.role}
        selected={this.state.active}
        userName={group.userName}
        userPartitionId={group.userPartitionId}
        userNameInputToggle={(...args) => this.toggle(...args)}
        onSubmit={(payload) => this.onSubmit(payload)}
      />
    ));
    return options;
  }

  clearError() {
    this.props.onError('');
  }

  toggle(show, groupId, groupName, role, userName, userPartitionId) {
    this.setState(prevState => ({
      autoFocus: true,
      masquerade: groupName,
      shouldShowUserNameInput: show === undefined ? !prevState.shouldShowUserNameInput : show,
      active: {
        ...prevState.active, groupId, role, userName, userPartitionId,
      },
    }));
  }

// 3. Modificamos parseAvailableOptions para traducir el botón principal
  parseAvailableOptions(postData) {
    const data = postData || {};
    const active = data.active || {};
    const available = data.available || [];
    if (active.userName) {
      this.setState({
        autoFocus: false,
        masquerade: translate('Specific Student...'), // <--- CAMBIO
        masqueradeUsername: active.userName,
        shouldShowUserNameInput: true,
      });
    } else if (active.groupName) {
      this.setState({ masquerade: translate(active.groupName) }); // <--- CAMBIO
    } else if (active.role === 'student') {
      this.setState({ masquerade: translate('Learner') }); // <--- CAMBIO
    }
    return { active, available };
  }

  render() {
    const {
      autoFocus,
      masquerade,
      shouldShowUserNameInput,
      masqueradeUsername,
    } = this.state;
    const specificLearnerInputText = this.props.intl.formatMessage(messages.placeholder);
    return (
      <div className="flex-grow-1">
        <div className="row">
          <span className="col-auto col-form-label pl-3">Ver este curso como:</span>
          <Dropdown className="flex-shrink-1 mx-1">
            <Dropdown.Toggle id="masquerade-widget-toggle" variant="inverse-outline-primary">
              {translate(masquerade)}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {this.getOptions()}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {shouldShowUserNameInput && (
          <div className="row mt-2">
            <span className="col-auto col-form-label pl-3" id="masquerade-search-label">{`${specificLearnerInputText}:`}</span>
            <MasqueradeUserNameInput
              id="masquerade-search"
              className="col-4"
              autoFocus={autoFocus}
              defaultValue={masqueradeUsername}
              onError={(errorMessage) => this.onError(errorMessage)}
              onSubmit={(payload) => this.onSubmit(payload)}
            />
          </div>
        )}
      </div>
    );
  }
}
MasqueradeWidget.propTypes = {
  courseId: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
  onError: PropTypes.func.isRequired,
};
MasqueradeWidget.contextType = UserMessagesContext;
export default injectIntl(MasqueradeWidget);
