import * as Yup from 'yup';

const placeholder = {
  name: 'ex.: João da Silva',
  email: 'ex.: aluno@envia.io',
  birthDate: 'ex.: 12/12/2012',
  phone: 'ex.: (11) 9555-5533',
  responsible: 'ex.: Antônio Silva',
  responsible_email: 'ex.: responsavel@responsavel.com',
  responsible_phone: 'ex.: (11) 9555-5533',
  // turmas: [1, 2, 3],
};

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório *'),
  email: Yup.string()
    .email('Informe um e-mail válido!')
    .required('O e-mail é obrigatório *'),
  // birthDate: 'ex.: 12/12/2012',
  // phone: 'ex.: (11) 9555-5533',
  responsible: Yup.string(),
  responsible_email: Yup.string().email('Informe um e-mail válido'),
  // responsible_phone: 'ex.: (11) 9555-5533',
});

export { schema, placeholder };
