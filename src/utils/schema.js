import * as Yup from 'yup';

export const CURSO_SCHEMA = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório *'),
});

export const PROFESSOR_SCHEMA = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório *'),
});
