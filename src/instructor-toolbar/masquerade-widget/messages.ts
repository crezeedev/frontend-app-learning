import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  genericError: {
    id: 'masquerade-widget.userName.error.generic',
    defaultMessage: 'An error has occurred; please try again.',
    description: 'Message shown after a general error when attempting to masquerade',
  },
  placeholder: {
    id: 'masquerade-widget.userName.input.placeholder',
    defaultMessage: 'Username or email',
    description: 'Placeholder text to prompt for a user to masquerade as',
  },
  userNameLabel: {
    id: 'masquerade-widget.userName.input.label',
    defaultMessage: 'Masquerade as this user',
    description: 'Label for the masquerade user input',
  },
  titleViewAs: {
    id: 'instructor.toolbar.view.as',
    defaultMessage: 'Ver este curso como:',
    description: 'Button to view this course as',
  },
  titleStaff: {
    id: 'instructor.toolbar.staff',
    defaultMessage: 'Personal',
    description: 'Button Staff',
  },
personal: {
    id: 'instructor.masquerade.personal',
    defaultMessage: 'Personal',
  },
  learner: {
    id: 'instructor.masquerade.learner',
    defaultMessage: 'Learner',
  },
  specificStudent: {
    id: 'instructor.masquerade.specific.student',
    defaultMessage: 'Specific Student...',
  },
  viewAs: {
    id: 'instructor.masquerade.view.as',
    defaultMessage: 'Ver este curso como:',
  },
});

export default messages;
