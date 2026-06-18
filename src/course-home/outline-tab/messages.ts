import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  allDates: {
    id: 'learning.outline.dates.all',
    defaultMessage: 'Ver todas las fechas del curso',
    description: 'Text anchor for link that redirects to dates or course timeline tab',
  },
  casualGoalButtonText: {
    id: 'learning.outline.goalButton.casual.text',
    defaultMessage: '1 día a la semana',
    description: 'Text shown for casual goal button',
  },
  casualGoalButtonTitle: {
    id: 'learning.outline.goalButton.screenReader.text',
    defaultMessage: 'Casual',
    description: 'A very short description of the least intense of three learning goals',
  },
  certAlt: {
    id: 'learning.outline.certificateAlt',
    defaultMessage: 'Certificado de ejemplo',
    description: 'Alternate text displayed when the example certificate image cannot be displayed.',
  },
  collapseAll: {
    id: 'learning.outline.collapseAll',
    defaultMessage: 'Contraer todo',
    description: 'Label for button to close all of the collapsible sections',
  },
  completedAssignment: {
    id: 'learning.outline.completedAssignment',
    defaultMessage: 'Completado',
    description: 'Text used to describe the green checkmark icon in front of an assignment title',
  },
  completedSection: {
    id: 'learning.outline.completedSection',
    defaultMessage: 'Sección completada',
    description: 'Text used to describe the green checkmark icon in front of a section title',
  },
  hiddenSection: {
    id: 'learning.outline.hiddenSection',
    defaultMessage: 'Oculto en el contenido del curso, accesible mediante enlace',
    description: 'Label for hidden section in course outline',
  },
  hiddenSequenceLink: {
    id: 'learning.outline.hiddenSequenceLink',
    defaultMessage: 'Las subsecciones no son navegables entre sí; solo pueden accederse mediante su enlace.',
    description: 'Label for hidden sequence in course outline',
  },
  dates: {
    id: 'learning.outline.dates',
    defaultMessage: 'Fechas importantes',
    description: 'Headline for the (summary of dates) section of the outline page',
  },
  editGoal: {
    id: 'learning.outline.editGoal',
    defaultMessage: 'Editar objetivo',
    description: 'Edit course goal button',
  },
  expandAll: {
    id: 'learning.outline.expandAll',
    defaultMessage: 'Expandir todo',
    description: 'Label for button to open all of the collapsible sections',
  },
  goal: {
    id: 'learning.outline.goal',
    defaultMessage: 'Objetivo',
    description: 'Label for the selected course goal',
  },
  goalReminderDetail: {
    id: 'learning.outline.goalReminderDetail',
    defaultMessage: 'Si detectamos que no estás alcanzando tu objetivo, te enviaremos un recordatorio por correo electrónico.',
    description: 'It describe to learner what is goal reminder service',
  },
  goalUnsure: {
    id: 'learning.outline.goalUnsure',
    defaultMessage: 'Aún no estoy seguro',
  },
  handouts: {
    id: 'learning.outline.handouts',
    defaultMessage: 'Materiales del curso',
    description: 'Header for (Course Handouts) section in course outline',
  },
  incompleteAssignment: {
    id: 'learning.outline.incompleteAssignment',
    defaultMessage: 'Incompleto',
    description: 'Text used to describe the gray checkmark icon in front of an assignment title',
  },
  incompleteSection: {
    id: 'learning.outline.incompleteSection',
    defaultMessage: 'Sección incompleta',
    description: 'Text used to describe the gray checkmark icon in front of a section title',
  },
  intenseGoalButtonText: {
    id: 'learning.outline.goalButton.intense.text',
    defaultMessage: '5 días a la semana',
    description: 'Text shown for intense goal button',
  },
  intenseGoalButtonTitle: {
    id: 'learning.outline.goalButton.intense.title',
    defaultMessage: 'Intensivo',
    description: 'A very short description of the most intensive option of three learning goals, Casual, Regular and Intense',
  },
  learnMore: {
    id: 'learning.outline.learnMore',
    defaultMessage: 'Más información',
  },
  openSection: {
    id: 'learning.outline.altText.openSection',
    defaultMessage: 'Abrir',
    description: 'A button to open the given section of the course outline',
  },
  proctoringInfoPanel: {
    id: 'learning.proctoringPanel.header',
    defaultMessage: 'Este curso contiene exámenes supervisados',
    description: 'Used as a label to indicate that course has proctored exams',
  },
  regularGoalButtonText: {
    id: 'learning.outline.goalButton.regular.text',
    defaultMessage: '3 días a la semana',
    description: 'Text shown for regular goal button',
  },
  regularGoalButtonTitle: {
    id: 'learning.outline.goalButton.regular.title',
    defaultMessage: 'Regular',
    description: 'A very short description of the middle option of three learning goals, Casual, Regular and Intense',
  },
  resumeBlurb: {
    id: 'learning.outline.resumeBlurb',
    defaultMessage: 'Continúa donde te quedaste',
    description: 'Text describing to the learner that they can return to the last section they visited within the course.',
  },
  resume: {
    id: 'learning.outline.resume',
    defaultMessage: 'Continuar curso',
    description: 'Anchor text for button that would resume course',
  },
  setGoal: {
    id: 'learning.outline.setGoal',
    defaultMessage: 'Para comenzar, establece un objetivo del curso seleccionando la opción que mejor describa tu plan de aprendizaje.',
    description: 'In indicate to learner how to set or use the goal reminder service',
  },
  setGoalReminder: {
    id: 'learning.outline.setGoalReminder',
    defaultMessage: 'Establecer un recordatorio de objetivo',
    description: 'The text for the radio button which activate or deactivate the goal reminder service',
  },
  setLearningGoalButtonScreenReaderText: {
    id: 'learning.outline.goalButton.casual.title',
    defaultMessage: 'Establecer un estilo de objetivo de aprendizaje.',
    description: 'screen reader text informing learner they can select an intensity of learning goal',
  },
  setWeeklyGoal: {
    id: 'learning.outline.setWeeklyGoal',
    defaultMessage: 'Establecer un objetivo semanal de aprendizaje',
    description: 'The headline for (goal reminder service) section in course outline',
  },
  setWeeklyGoalDetail: {
    id: 'learning.outline.setWeeklyGoalDetail',
    defaultMessage: 'Establecer un objetivo te motiva a finalizar el curso. Siempre puedes cambiarlo más adelante.',
    description: 'It indiacate the gaol or the purpose of the goal reminder service to learners',
  },
  start: {
    id: 'learning.outline.start',
    defaultMessage: 'Iniciar curso',
    description: 'The text for button which starts the course',
  },
  startBlurb: {
    id: 'learning.outline.startBlurb',
    defaultMessage: 'Comienza tu curso hoy',
  },
  tools: {
    id: 'learning.outline.tools',
    defaultMessage: 'Herramientas del curso',
    description: 'Headline for the (course tools) section in course outline. course tool might include links to course bookmarks, financial assistance...etc',
  },
  upgradeButton: {
    id: 'learning.outline.upgradeButton',
    defaultMessage: 'Actualizar ({symbol}{price})',
    description: 'Text for the button which redirects to the upgrading page',
  },
  upgradeTitle: {
    id: 'learning.outline.upgradeTitle',
    defaultMessage: 'Obtener un certificado verificado',
    description: 'Upgrade title',
  },
  welcomeMessage: {
    id: 'learning.outline.welcomeMessage',
    defaultMessage: 'Mensaje de bienvenida',
  },
  welcomeMessageShowMoreButton: {
    id: 'learning.outline.welcomeMessageShowMoreButton',
    defaultMessage: 'Mostrar más',
  },
  welcomeMessageShowLessButton: {
    id: 'learning.outline.welcomeMessageShowLessButton',
    defaultMessage: 'Mostrar menos',
  },
  welcomeTo: {
    id: 'learning.outline.goalWelcome',
    defaultMessage: 'Bienvenido a',
    description: 'This precedes the title of the course',
  },
  notStartedProctoringStatus: {
    id: 'learning.proctoringPanel.status.notStarted',
    defaultMessage: 'No iniciado',
    description: 'It indcate that proctortrack onboarding exam hasn’t started yet',
  },
  startedProctoringStatus: {
    id: 'learning.proctoringPanel.status.started',
    defaultMessage: 'Iniciado',
    description: 'Label to indicate the starting status of the proctortrack onboarding exam',
  },
  submittedProctoringStatus: {
    id: 'learning.proctoringPanel.status.submitted',
    defaultMessage: 'Enviado',
    description: 'Label to indicate the submitted status of proctortrack onboarding exam',
  },
  verifiedProctoringStatus: {
    id: 'learning.proctoringPanel.status.verified',
    defaultMessage: 'Verificado',
    description: 'Label to indicate the verified status of the proctortrack onboarding exam',
  },
  rejectedProctoringStatus: {
    id: 'learning.proctoringPanel.status.rejected',
    defaultMessage: 'Rechazado',
    description: 'Label to indicate the rejection status of the proctortrack onboarding exam',
  },
  errorProctoringStatus: {
    id: 'learning.proctoringPanel.status.error',
    defaultMessage: 'Error',
    description: 'Label to indicate that there is error in proctortrack onboarding exam',
  },
  otherCourseApprovedProctoringStatus: {
    id: 'learning.proctoringPanel.status.otherCourseApproved',
    defaultMessage: 'Aprobado en otro curso',
    description: 'Label to indicate that the proctortrack onboarding exam is verified based on taking onboarding exam on another course',
  },
  expiringSoonProctoringStatus: {
    id: 'learning.proctoringPanel.status.expiringSoon',
    defaultMessage: 'Próximo a vencer',
    description: 'A label to indicate that proctortrack onboarding exam will expire soon',
  },
  expiredProctoringStatus: {
    id: 'learning.proctoringPanel.status.expired',
    defaultMessage: 'Vencido',
    description: 'A label to indicate that proctortrack onboarding exam has expired',
  },
  proctoringCurrentStatus: {
    id: 'learning.proctoringPanel.status',
    defaultMessage: 'Estado actual del proceso de incorporación:',
    description: 'The text that precede the status label of proctortrack onboarding exam',
  },
  notStartedProctoringMessage: {
    id: 'learning.proctoringPanel.message.notStarted',
    defaultMessage: 'No has iniciado tu examen de incorporación.',
    description: 'The text that explain the meaning of (not started) label of the proctortrack onboarding exam',
  },
  startedProctoringMessage: {
    id: 'learning.proctoringPanel.message.started',
    defaultMessage: 'Has iniciado tu examen de incorporación.',
    description: 'The text that explain the meaning of (started) label of the proctortrack onboarding exam',
  },
  submittedProctoringMessage: {
    id: 'learning.proctoringPanel.message.submitted',
    defaultMessage: 'Has enviado tu examen de incorporación.',
    description: 'The text that explain the meaning of (submitted) label of the proctortrack onboarding exam',
  },
  verifiedProctoringMessage: {
    id: 'learning.proctoringPanel.message.verified',
    defaultMessage: 'Tu examen de incorporación ha sido aprobado en este curso.',
    description: 'The text that explain the meaning of (verified) label of the proctortrack onboarding exam',
  },
  rejectedProctoringMessage: {
    id: 'learning.proctoringPanel.message.rejected',
    defaultMessage: 'Tu examen de incorporación ha sido rechazado. Por favor, vuelve a realizar el proceso.',
    description: 'The text that explain the meaning of (rejected) label of the proctortrack onboarding exam',
  },
  errorProctoringMessage: {
    id: 'learning.proctoringPanel.message.error',
    defaultMessage: 'Ha ocurrido un error durante tu examen de incorporación. Por favor, vuelve a intentarlo.',
    description: 'The text that explain the meaning of (error) label of the proctortrack onboarding exam',
  },
  otherCourseApprovedProctoringMessage: {
    id: 'learning.proctoringPanel.message.otherCourseApproved',
    defaultMessage: 'Tu examen de incorporación ha sido aprobado en otro curso.',
    description: 'The text that explain the meaning of (approved in another course) label of the proctortrack onboarding exam',
  },
  otherCourseApprovedProctoringDetail: {
    id: 'learning.proctoringPanel.detail.otherCourseApproved',
    defaultMessage: 'Si tu dispositivo ha cambiado, te recomendamos completar el examen de incorporación de este curso para asegurarte de que tu configuración aún cumple con los requisitos de supervisión.',
    description: 'The text that recommend an action when the status of the proctortrack onboarding exam is (approved in another course)',
  },
  expiringSoonProctoringMessage: {
    id: 'learning.proctoringPanel.message.expiringSoon',
    defaultMessage: 'Tu perfil de incorporación ha sido aprobado. Sin embargo, su vigencia está próxima a vencer. Completa nuevamente el proceso para asegurarte de poder continuar presentando exámenes supervisados.',
    description: 'The text that recommend an action when the status of the proctortrack onboarding exam is (expiring soon)',
  },
  expiredProctoringMessage: {
    id: 'learning.proctoringPanel.message.expired',
    defaultMessage: 'Tu estado de incorporación ha vencido. Completa nuevamente el proceso para continuar presentando exámenes supervisados.',
    description: 'The text that recommend an action when the status of the proctortrack onboarding exam is (expired)',
  },
  proctoringPanelGeneralInfo: {
    id: 'learning.proctoringPanel.generalInfo',
    defaultMessage: 'Debes completar el proceso de incorporación antes de presentar cualquier examen supervisado.',
    description: 'It indicate key and important fact to learner about the importance of taking proctortrack onboarding exam',
  },
  proctoringPanelGeneralInfoSubmitted: {
    id: 'learning.proctoringPanel.generalInfoSubmitted',
    defaultMessage: 'Tu perfil enviado está siendo revisado.',
    description: 'The text that explain the meaning of (in review) label of the proctortrack onboarding exam',
  },
  proctoringPanelGeneralTime: {
    id: 'learning.proctoringPanel.generalTime',
    defaultMessage: 'La revisión del perfil de incorporación puede tardar 2 o más días hábiles.',
    description: 'This text explain for how long the (in review) status of the proctortrack onboarding exam might remain',
  },
  proctoringOnboardingButton: {
    id: 'learning.proctoringPanel.onboardingButton',
    defaultMessage: 'Completar incorporación',
    description: 'Text shown on the button that starts the actual proctortrack onboarding exam when it is released',
  },
  proctoringOnboardingPracticeButton: {
    id: 'learning.proctoringPanel.onboardingPracticeButton',
    defaultMessage: 'Ver examen de incorporación',
    description: 'The text that appears on onboarding exam while its not released, so learners can take or view it as a practice',
  },
  proctoringOnboardingButtonNotOpen: {
    id: 'learning.proctoringPanel.onboardingButtonNotOpen',
    defaultMessage: 'La incorporación abre: {releaseDate}',
    description: 'It indicate when or from when the learner can take the proctortrack onboarding exam',
  },
  proctoringReviewRequirementsButton: {
    id: 'learning.proctoringPanel.reviewRequirementsButton',
    defaultMessage: 'Revisar instrucciones y requisitos del sistema',
    description: 'Anchor text for button which redirect leaner to doc or a detailed page about proctortrack onboarding exam',
  },
  proctoringOnboardingButtonPastDue: {
    id: 'learning.proctoringPanel.onboardingButtonPastDue',
    defaultMessage: 'Periodo de incorporación vencido',
    description: 'Text that show when the deadline of proctortrack onboarding exam has passed, it appears on button that start the onboarding exam however for this case the button is disabled for obvious reason',
  },
});

export default messages;
