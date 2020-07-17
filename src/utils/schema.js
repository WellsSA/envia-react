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

export const MODELO_SCHEMA = Yup.object().shape({
  title: Yup.string().required('O Título é obrigatório *'),
  greeting: Yup.string().required('A saudação é obrigatória *'),
  content: Yup.string().required('A mensagem é obrigatória *'),
});

export const ALUNO_SHEMA = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório *'),
  email: Yup.string()
    .email('Informe um e-mail válido!')
    .required('O e-mail é obrigatório *'),
  // birthDate: Yup.date().required('A data de nascimento é obrigatória *'),
  // phone: 'ex.: (11) 9555-5533',
  responsible: Yup.string(),
  responsible_email: Yup.string().email('Informe um e-mail válido'),
  // responsible_phone: 'ex.: (11) 9555-5533',
});
