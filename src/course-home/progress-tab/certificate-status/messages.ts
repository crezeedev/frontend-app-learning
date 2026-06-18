import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  notPassingHeader: {
    id: 'progress.certificateStatus.notPassingHeader',
    defaultMessage: 'Estado del certificado',
    description: 'Header text when learner certifcate status is not passing',
  },
  notPassingBody: {
    id: 'progress.certificateStatus.notPassingBody',
    defaultMessage: 'Para poder obtener un certificado, debes tener una calificación aprobatoria.',
    description: 'Body text when learner certifcate status is not passing',
  },
  inProgressHeader: {
    id: 'progress.certificateStatus.inProgressHeader',
    defaultMessage: '¡Próximamente habrá más contenido!',
    description: 'Header text when learner certifcate is in progress',
  },
  inProgressBody: {
    id: 'progress.certificateStatus.inProgressBody',
    defaultMessage: 'Parece que hay más contenido en este curso que se publicará en el futuro. Mantente atento a las actualizaciones por correo electrónico o vuelve a consultar tu curso para saber cuándo estará disponible este contenido.',
    description: 'Body text when learner certifcate is in progress',
  },
  requestableHeader: {
    id: 'progress.certificateStatus.requestableHeader',
    defaultMessage: 'Estado del certificado',
    description: 'Header text when learner certifcate status is requestable',
  },
  requestableBody: {
    id: 'progress.certificateStatus.requestableBody',
    defaultMessage: '¡Felicidades! Has cumplido los requisitos para obtener un certificado. Para acceder a tu certificado, solicítalo a continuación.',
    description: 'Body text when learner certifcate status is requestable',
  },
  requestableButton: {
    id: 'progress.certificateStatus.requestableButton',
    defaultMessage: 'Solicitar certificado',
    description: 'Button text when learner certifcate status is requestable',
  },
  unverifiedHeader: {
    id: 'progress.certificateStatus.unverifiedHeader',
    defaultMessage: 'Estado del certificado',
    description: 'Header text when learner certifcate status is unverified',
  },
  unverifiedButton: {
    id: 'progress.certificateStatus.unverifiedButton',
    defaultMessage: 'Verificar identidad',
    description: 'Button text when learner certifcate status is unverified',
  },
  unverifiedPendingBody: {
    id: 'progress.certificateStatus.courseCelebration.verificationPending',
    defaultMessage: 'La verificación de tu identidad está pendiente y tu certificado estará disponible una vez que sea aprobada.',
    description: 'Body text when learner certifcate status is unverified pending',
  },
  downloadableHeader: {
    id: 'progress.certificateStatus.downloadableHeader',
    defaultMessage: '¡Tu certificado está disponible!',
    description: 'Header text when the certifcate is available',
  },
  viewableButton: {
    id: 'progress.certificateStatus.viewableButton',
    defaultMessage: 'Ver mi certificado',
    description: 'Button text which view or links to the certifcate',
  },
  notAvailableHeader: {
    id: 'progress.certificateStatus.notAvailableHeader',
    defaultMessage: 'Estado del certificado',
    description: 'Header text when the certifcate is not available',
  },
  notAvailableEndDateBody: {
    id: 'progress.certificateBody.notAvailable.endDate',
    defaultMessage: 'Las calificaciones finales y cualquier certificado obtenido estarán disponibles después del {endDate}.',
    description: 'Shown for learners who have finished a course before grades and certificates are available.',
  },
  upgradeHeader: {
    id: 'progress.certificateStatus.upgradeHeader',
    defaultMessage: 'Obtén un certificado',
    description: 'Header text when the learner needs to upgrade to earn a certifcate ',
  },
  upgradeBody: {
    id: 'progress.certificateStatus.upgradeBody',
    defaultMessage: 'Actualmente estás inscrito en la modalidad de auditoría y no calificas para obtener un certificado. Para trabajar en la obtención de un certificado, actualiza tu inscripción al curso hoy mismo.',
    description: 'Body text when the learner needs to upgrade to earn a certifcate ',
  },
  upgradeButton: {
    id: 'progress.certificateStatus.upgradeButton',
    defaultMessage: 'Actualizar ahora',
    description: 'Button text which leaner needs to upgrade to get the certifcate',
  },
  unverifiedHomeHeader: {
    id: 'progress.certificateStatus.unverifiedHomeHeader.v2',
    defaultMessage: 'Verifica tu identidad para obtener un certificado.',
    description: 'Header text when the learner needs to do verification to earn a certifcate ',
  },
  unverifiedHomeButton: {
    id: 'progress.certificateStatus.unverifiedHomeButton',
    defaultMessage: 'Verificar mi identidad',
    description: 'Button text which leaner needs to do verification to earn a certifcate',
  },
  unverifiedHomeBody: {
    id: 'progress.certificateStatus.unverifiedHomeBody',
    defaultMessage: 'Para generar un certificado de este curso, debes completar el proceso de verificación de identidad.',
    description: 'Body text when the learner needs to do verification to earn a certifcate',
  },
});

export default messages;
