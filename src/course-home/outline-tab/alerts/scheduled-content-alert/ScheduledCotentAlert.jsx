import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Alert, Button } from '@openedx/paragon';
import React from 'react';
import PropTypes from 'prop-types';

const ScheduledContentAlert = ({ payload }) => {
  const {
    datesTabLink,
  } = payload;

  return (
    <Alert variant="info">
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
        <div className="col-lg-7">
          <Alert.Heading>
            <FormattedMessage
              id="learning.outline.alert.scheduled-content.heading"
              defaultMessage="¡Próximamente habrá más contenido!"
            />
          </Alert.Heading>
          <FormattedMessage
            id="learning.outline.alert.scheduled-content.body"
            defaultMessage="Este curso tendrá más contenido próximamente. Esté atento a las actualizaciones por correo electrónico o consulte este curso para obtener más información."          />
        </div>
        <div className="flex-grow-0 pt-3 pt-lg-0">
          {datesTabLink && (
            <Button
              href={datesTabLink}
            >
              <FormattedMessage
                id="learning.outline.alert.scheduled-content.button"
                defaultMessage="Ver el horario del curso"
              />
            </Button>
          )}
        </div>
      </div>
    </Alert>
  );
};

ScheduledContentAlert.propTypes = {
  payload: PropTypes.shape({
    datesTabLink: PropTypes.string,
  }).isRequired,
};

export default ScheduledContentAlert;
