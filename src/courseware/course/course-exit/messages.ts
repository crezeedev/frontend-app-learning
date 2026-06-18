import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  applyForCredit: {
    id: 'courseExit.programs.applyForCredit',
    defaultMessage: 'Solicitar créditos académicos',
    description: 'Button for the learner to apply for course credit',
  },
  certificateHeaderDownloadable: {
    id: 'courseCelebration.certificateHeader.downloadable',
    defaultMessage: '¡Tu certificado está disponible!',
    description: 'Text displayed when course certificate is ready to be downloaded',
  },
  certificateHeaderNotAvailable: {
    id: 'courseCelebration.certificateHeader.notAvailable',
    defaultMessage: 'Tu calificación y el estado de tu certificado estarán disponibles pronto.',
    description: 'Header displayed when course certificate is not yet available to be viewed',
  },
  certificateNotAvailableBodyAccessCert: {
    id: 'courseCelebration.certificateBody.notAvailable.accessCertificate',
    defaultMessage: 'Si has obtenido una calificación aprobatoria, tu certificado será emitido automáticamente.',
    description: 'Text displayed when course certificate is not yet available to be viewed',
  },
  certificateNotAvailableEndDateBody: {
    id: 'courseCelebration.certificateBody.notAvailable.endDate',
    defaultMessage: 'Las calificaciones finales y cualquier certificado obtenido estarán disponibles después del {endDate}.',
    description: 'Shown for learners who have finished a course before grades and certificates are available.',
  },
  certificateHeaderUnverified: {
    id: 'courseCelebration.certificateHeader.unverified',
    defaultMessage: 'Debes completar la verificación para recibir tu certificado.',
    description: 'Text displayed when a user has not verified their identity and cannot view their course certificate',
  },
  certificateHeaderRequestable: {
    id: 'courseCelebration.certificateHeader.requestable',
    defaultMessage: '¡Felicidades! Has cumplido los requisitos para obtener un certificado.',
    description: 'Text displayed when a user has completed the course and can request a certificate',
  },
  certificateHeaderUpgradable: {
    id: 'courseCelebration.certificateHeader.upgradable',
    defaultMessage: 'Actualiza tu inscripción para obtener un certificado verificado',
    description: 'Header when learner finished or pass the course but need to upgrade to get a certificate',
  },
  certificateImage: {
    id: 'courseCelebration.certificateImage',
    defaultMessage: 'Certificado de muestra',
    description: 'Alt text used to describe an image of a certificate',
  },
  completedCourseHeader: {
    id: 'courseCelebration.completedCourseHeader',
    defaultMessage: 'Has completado tu curso.',
    description: 'Header text for course exit section',
  },
  congratulationsHeader: {
    id: 'courseCelebration.congratulationsHeader',
    defaultMessage: '¡Felicidades!',
    description: 'Greeting learner for finishing the course',
  },
  congratulationsImage: {
    id: 'courseCelebration.congratulationsImage',
    defaultMessage: 'Cuatro personas levantando las manos en señal de celebración',
    description: 'Alt text used to describe celebratory image',
  },
  courseInProgressDescription: {
    id: 'courseExit.courseInProgressDescription',
    defaultMessage: 'Parece que hay más contenido en este curso que se publicará en el futuro. Mantente atento a las actualizaciones por correo electrónico o vuelve a consultar tu curso para saber cuándo estará disponible este contenido.',
    description: 'Shown to learner when they finish all available assignments, but not the whole course',
  },
  courseInProgressHeader: {
    id: 'courseExit.courseInProgressHeader',
    defaultMessage: '¡Próximamente habrá más contenido!',
    description: 'Header when the status of the course not all of (contents or assignments) available yet',
  },
  dashboardLink: {
    id: 'courseExit.dashboardLink',
    defaultMessage: 'Panel de control',
    description: 'Link to user’s dashboard',
  },
  endOfCourseDescription: {
    id: 'courseExit.endOfCourseDescription',
    defaultMessage: 'Lamentablemente, actualmente no eres elegible para un certificado. Necesitas obtener una calificación aprobatoria para poder recibirlo.',
    description: 'Shown to learner when they did not pass the course',
  },
  endOfCourseHeader: {
    id: 'courseExit.endOfCourseHeader',
    defaultMessage: '¡Has llegado al final del curso!',
  },
  endOfCourseTitle: {
    id: 'courseExit.endOfCourseTitle',
    defaultMessage: 'Fin del curso',
  },
  idVerificationSupportLink: {
    id: 'courseExit.idVerificationSupportLink',
    defaultMessage: 'Más información sobre la verificación de identidad',
    description: 'Link to an article about identity verification',
  },
  linkedinAddToProfileButton: {
    id: 'courseCelebration.linkedinAddToProfileButton',
    defaultMessage: 'Agregar al perfil de LinkedIn',
    description: 'Button to add certificate information to the user’s LinkedIn profile',
  },
  microBachelorsLearnMore: {
    id: 'courseExit.programs.microBachelors.learnMore',
    defaultMessage: 'Obtén más información sobre cómo tu credencial MicroBachelors puede aplicarse para obtener créditos académicos.',
  },
  microMastersLearnMore: {
    id: 'courseExit.programs.microMasters.learnMore',
    defaultMessage: 'Obtén más información sobre el proceso para aplicar certificados MicroMasters a programas de maestría.',
  },
  microMastersMessage: {
    id: 'courseExit.programs.microMasters.mastersMessage',
    defaultMessage: 'Si te interesa utilizar tu certificado MicroMasters para un programa de maestría, ¡puedes comenzar hoy mismo!',
  },
  nextButtonComplete: {
    id: 'learn.sequence.navigation.complete.button',
    defaultMessage: 'Completar el curso',
    description: 'This text is shown on the button which usually links to the next unit or assignment in course sequence, however when it is the last unit. The button will link to course exit page',
  },
  nextButtonEnd: {
    id: 'courseExit.nextButton.endOfCourse',
    defaultMessage: 'Siguiente (fin del curso)',
    description: 'This shown for the button which links to the next unit, when learner did not pass the course',
  },
  profileLink: {
    id: 'courseExit.profileLink',
    defaultMessage: 'Perfil',
    description: 'Link to user’s profile',
  },
  programsLastCourseHeader: {
    id: 'courseExit.programs.lastCourse',
    defaultMessage: '¡Has completado el último curso de {title}!',
    description: 'This shown to learner when the course they completed is the last one of a program, the program might be mircomaster, or microbachelors...etc',
  },
  requestCertificateBodyText: {
    id: 'courseCelebration.requestCertificateBodyText',
    defaultMessage: 'Para acceder a tu certificado, solicítalo a continuación.',
    description: 'Shown when learner need to request the certifcate',
  },
  requestCertificateButton: {
    id: 'courseCelebration.requestCertificateButton',
    defaultMessage: 'Solicitar certificado',
    description: 'Button to request the course certificate',
  },
  searchOurCatalogLink: {
    id: 'courseExit.searchOurCatalogLink',
    defaultMessage: 'Buscar en nuestro catálogo',
    description: 'First part of a sentence that continues afterward',
  },
  shareMessage: {
    id: 'courseCelebration.shareMessage',
    defaultMessage: 'Comparte tu logro en redes sociales o por correo electrónico.',
    description: 'Recommending an action when learner pass the course',
  },
  socialMessage: {
    id: 'courseExit.social.shareCompletionMessage',
    defaultMessage: '¡Acabo de completar {title} en {platform}!',
    description: 'Shown when sharing course progress on a social network',
  },
  upgradeButton: {
    id: 'courseExit.upgradeButton',
    defaultMessage: 'Actualizar ahora',
  },
  upgradeLink: {
    id: 'courseExit.upgradeLink',
    defaultMessage: 'actualizar ahora',
  },
  verificationPending: {
    id: 'courseCelebration.verificationPending',
    defaultMessage: 'La verificación de tu identidad está pendiente y tu certificado estará disponible una vez que sea aprobada.',
    description: 'Shown when the status of verification is pending',
  },
  verifiedCertificateSupportLink: {
    id: 'courseExit.verifiedCertificateSupportLink',
    defaultMessage: 'Más información sobre los certificados verificados',
    description: 'Anchor text for link that redirect to external help page about verified certificates',
  },
  verifyIdentityButton: {
    id: 'courseCelebration.verifyIdentityButton',
    defaultMessage: 'Verificar identidad ahora',
    description: 'Button to verify the identify of the user',
  },
  viewCertificateButton: {
    id: 'courseCelebration.viewCertificateButton',
    defaultMessage: 'Ver mi certificado',
    description: 'Button to view the course certificate',
  },
  viewCourseScheduleButton: {
    id: 'courseExit.viewCourseScheduleButton',
    defaultMessage: 'Ver calendario del curso',
    description: 'Button to view the course schedule',
  },
  viewCoursesButton: {
    id: 'courseExit.viewCoursesButton',
    defaultMessage: 'Ver mis cursos',
    description: 'Button to redirect user to their course dashboard',
  },
  viewGradesButton: {
    id: 'courseExit.viewGradesButton',
    defaultMessage: 'Ver calificaciones',
  },

});

export default messages;
