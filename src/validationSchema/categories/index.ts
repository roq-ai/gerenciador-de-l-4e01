import * as yup from 'yup';

export const categoryValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  store_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
