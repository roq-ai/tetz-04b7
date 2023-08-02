import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  date: yup.date().required(),
  score: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  teamlead_id: yup.string().nullable().required(),
});
