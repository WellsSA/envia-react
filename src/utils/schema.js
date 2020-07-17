import * as Yup from 'yup';

export const CURSO_SCHEMA = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório *'),
});

export const PROFESSOR_SCHEMA = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório *'),
});

export const TURMA_SCHEMA = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório *'),
  days: Yup.string().required('O dia é obrigatório *'),
  hours: Yup.string().required('O horário é obrigatório *'),
  course: Yup.string().required('O curso é obrigatório *'),
  teacher: Yup.string().required('O professor é obrigatório *'),
});
