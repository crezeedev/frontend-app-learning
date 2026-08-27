import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  progressHeader: {
    id: 'progress.header',
    defaultMessage: 'Tu progreso',
    description: 'Headline or title for the progress tab',
  },
  progressHeaderForTargetUser: {
    id: 'progress.header.targetUser',
    defaultMessage: 'Progreso del curso de {username}',
    description: 'Header when displaying the progress for a different user',
  },
  studioLink: {
    id: 'progress.link.studio',
    defaultMessage: 'Ver calificaciones en Studio',
    description: 'Text shown for button that redirects to the studio if the user is a staff member',
  },
});

export default messages;
