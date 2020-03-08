import * as Yup from 'yup';

const placeholder = {
  title: 'ex.: Modelo de Parabenização',
  greeting: 'ex.: Olá, [NOME]! Feliz aniversário!!',
  content:
    'ex.: Vimos que hoje é seu aniversário e não pudemos deixar de dizer o quanto é especial tê-lo conosco!',
};

const schema = Yup.object().shape({
  title: Yup.string().required('O Título é obrigatório *'),
  greeting: Yup.string().required('A saudação é obrigatória *'),
  content: Yup.string().required('A mensagem é obrigatória *'),
  // course: Yup.string().required('O curso é obrigatório *'),
  // teacher: Yup.string().required('O professor é obrigatório *'),
});

export { schema, placeholder };
