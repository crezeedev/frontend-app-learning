import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  assignmentType: {
    id: 'progress.assignmentType',
    defaultMessage: 'Tipo de tarea',
    description: 'Header for column that indicate type of the assignment in grade summary table',
  },
  backToContent: {
    id: 'progress.footnotes.backToContent',
    defaultMessage: 'Volver al contenido',
    description: 'Text for button that redirects to contnet',
  },
  courseGradeBody: {
    id: 'progress.courseGrade.body',
    defaultMessage: 'Esto representa tu calificación ponderada actual en comparación con la calificación necesaria para aprobar este curso.',
    description: 'This text is shown to explain the meaning of the (grade bar) chart',
  },
  courseGradeBarAltText: {
    id: 'progress.courseGrade.gradeBar.altText',
    defaultMessage: 'Tu calificación actual es {currentGrade}%. Se requiere una calificación ponderada de {passingGrade}% para aprobar este curso.',
    description: 'Alt text for the grade chart bar',
  },
  courseGradeFooterGenericPassing: {
    id: 'progress.courseGrade.footer.generic.passing',
    defaultMessage: 'Actualmente estás aprobando este curso.',
    description: 'This shown when learner weighted grade is greater or equal course passing grade',
  },
  courseGradeFooterNonPassing: {
    id: 'progress.courseGrade.footer.nonPassing',
    defaultMessage: 'Se requiere una calificación ponderada de {passingGrade}% para aprobar este curso.',
    description: 'This shown when learner weighted grade is less than course passing grade',
  },
  courseGradeFooterPassingWithGrade: {
    id: 'progress.courseGrade.footer.passing',
    defaultMessage: 'Actualmente estás aprobando este curso con una calificación de {letterGrade} ({minGrade}-{maxGrade}%).',
    description: 'This shown when learner weighted grade is greater or equal course passing grade amd course is using letter grade',
  },
  courseGradePreviewHeaderLocked: {
    id: 'progress.courseGrade.preview.headerLocked',
    defaultMessage: 'función bloqueada',
    description: 'This when (progress page) feature is locked, sometimes learner needs to upgrade to get insight about their progress',
  },
  courseGradePreviewHeaderLimited: {
    id: 'progress.courseGrade.preview.headerLimited',
    defaultMessage: 'función limitada',
    description: 'This when (progress page) feature is partially locked, it means leaners can see their progress but not get to a certificate',
  },
  courseGradePreviewHeaderAriaHidden: {
    id: 'progress.courseGrade.preview.header.ariaHidden',
    defaultMessage: 'Vista previa de una ',
    description: 'This text precedes either (locked feature) or (limited feature)',
  },
  courseGradePreviewUnlockCertificateBody: {
    id: 'progress.courseGrade.preview.body.unlockCertificate',
    defaultMessage: 'Desbloquea esta función para ver tus calificaciones y obtener un certificado.',
    description: 'Recommending an action for learner when they need to upgrade to view progress and get a certificate',
  },
  courseGradePartialPreviewUnlockCertificateBody: {
    id: 'progress.courseGrade.partialpreview.body.unlockCertificate',
    defaultMessage: 'Desbloquea esta función para obtener un certificado.',
    description: 'Recommending an action for learner when they need to upgrade to get a certificate',
  },
  courseGradePreviewUpgradeDeadlinePassedBody: {
    id: 'progress.courseGrade.preview.body.upgradeDeadlinePassed',
    defaultMessage: 'La fecha límite para actualizar este curso ya ha pasado.',
    description: 'Shown when learner no longer can upgrade',
  },
  courseGradePreviewUpgradeButton: {
    id: 'progress.courseGrade.preview.button.upgrade',
    defaultMessage: 'Actualizar ahora',
    description: 'Text for button that redirects to the upgrade page',
  },
  courseGradeRangeTooltip: {
    id: 'progress.courseGrade.gradeRange.tooltip',
    defaultMessage: 'Rangos de calificación para este curso:',
    description: 'This shown when course is using (letter grade) to explain e.g. range for A, B, and C...etc',
  },
  courseOutline: {
    id: 'progress.courseOutline',
    defaultMessage: 'Contenido del curso',
    description: 'Anchor text for link that redirects to (course outline) tab',
  },
  currentGradeLabel: {
    id: 'progress.courseGrade.label.currentGrade',
    defaultMessage: 'Tu calificación actual',
    description: 'Text label current leaner grade on (grade bar) chart',
  },
  detailedGrades: {
    id: 'progress.detailedGrades',
    defaultMessage: 'Calificaciones detalladas',
    description: 'Headline for the (detailed grade) section in the progress tab',
  },
  detailedGradesEmpty: {
    id: 'progress.detailedGrades.emptyTable',
    defaultMessage: 'Actualmente no tienes calificaciones registradas.',
    description: 'It indicate that there are no problem or assignments to be scored',
  },
  footnotesTitle: {
    id: 'progress.footnotes.title',
    defaultMessage: 'Notas al pie del resumen de calificaciones',
    description: 'Title for grade summary footnotes, if exists',
  },
  grade: {
    id: 'progress.gradeSummary.grade',
    defaultMessage: 'Calificación',
    description: 'Headline for (grade column) in grade summary table',
  },
  grades: {
    id: 'progress.courseGrade.grades',
    defaultMessage: 'Calificaciones',
    description: 'Headline for grades section in progress tab',
  },
  gradesAndCredit: {
    id: 'progress.courseGrade.gradesAndCredit',
    defaultMessage: 'Calificaciones y créditos',
    description: 'Headline for (grades and credit) section in progress tab',
  },
  gradeRangeTooltipAlt: {
    id: 'progress.courseGrade.gradeRange.Tooltip',
    defaultMessage: 'Información sobre los rangos de calificación',
    description: 'Alt text for icon which that triggers (tip box) for grade range',
  },
  gradeSummary: {
    id: 'progress.gradeSummary',
    defaultMessage: 'Resumen de calificaciones',
    description: 'Headline for the (grade summary) section in (grades) section in progress tab',
  },
  gradeSummaryLimitedAccessExplanation: {
    id: 'progress.gradeSummary.limitedAccessExplanation',
    defaultMessage: 'Tienes acceso limitado a las tareas calificadas como parte de la modalidad de auditoría de este curso.',
    description: 'Text shown when learner has limited access to grade feature',
  },
  gradeSummaryTooltipAlt: {
    id: 'progress.gradeSummary.tooltip.alt',
    defaultMessage: 'Información sobre el resumen de calificaciones',
    description: 'Alt text for icon which that triggers (tip box) for grade summary',
  },
  gradeSummaryTooltipBody: {
    id: 'progress.gradeSummary.tooltip.body',
    defaultMessage: 'El peso de cada tarea del curso es determinado por el instructor. Al multiplicar tu calificación por el peso correspondiente a ese tipo de tarea, se calcula tu calificación ponderada. Esta calificación ponderada es la que se utiliza para determinar si apruebas el curso.',
    description: 'The content of (tip box) for the grade summary section',
  },
  noAccessToAssignmentType: {
    id: 'progress.noAcessToAssignmentType',
    defaultMessage: 'No tienes acceso a las tareas de tipo {assignmentType}.',
    description: 'Its alt text for locked icon which is shown if assignment type in (grade summary table) is locked',
  },
  noAccessToSubsection: {
    id: 'progress.noAcessToSubsection',
    defaultMessage: 'No tienes acceso a la subsección {displayName}.',
    description: 'Text shown when learner have limited access to grades feature',
  },
  passingGradeLabel: {
    id: 'progress.courseGrade.label.passingGrade',
    defaultMessage: 'Calificación mínima para aprobar',
    description: 'Label for mark on the (grade bar) chart which indicate the poisition of passing grade on the bar',
  },
  problemScoreLabel: {
    id: 'progress.detailedGrades.problemScore.label',
    defaultMessage: 'Puntuaciones de los problemas:',
    description: 'Label text which precedes detailed view of all scores per assignment',
  },
  problemScoreToggleAltText: {
    id: 'progress.detailedGrades.problemScore.toggleButton',
    defaultMessage: 'Mostrar u ocultar las puntuaciones individuales de los problemas para {subsectionTitle}.',
    description: 'Alt text for button which switches detailed view per module',
  },
  sectionGradeOverridden: {
    id: 'progress.detailedGrades.overridden',
    defaultMessage: 'La calificación de esta sección ha sido modificada.',
    description: 'This indicate that the graded score has been changed, it can happen if leaner initial assessment was not fair, might be for other reasons as well',
  },
  score: {
    id: 'progress.score',
    defaultMessage: 'Puntuación',
    description: 'It indicate how many points the learner have socred scored in particular assignment, or exam',
  },
  weight: {
    id: 'progress.weight',
    defaultMessage: 'Peso',
    description: 'It indicate the weight of particular assignment on overall course grade, it is demeterined by course author',
  },
  weightedGrade: {
    id: 'progress.weightedGrade',
    defaultMessage: 'Calificación ponderada',
    description: 'Weighed grade is calculated by (weight %) * (grade score) ',
  },
  weightedGradeSummary: {
    id: 'progress.weightedGradeSummary',
    defaultMessage: 'Resumen de tu calificación ponderada actual',
    description: 'It the text precede the sum of weighted grades of all the assignment',
  },

});

export default messages;
