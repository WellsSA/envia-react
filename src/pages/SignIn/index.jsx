import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaGlobeAmericas } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import { Container } from './styles';
import logo from '../../assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório *'),
  password: Yup.string().required('A senha é obrigatória *'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <img className="logo" src={logo} alt="Envia.io" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <a href="https://envia.io" className="main">
          <FaGlobeAmericas />
        </a>
        <label htmlFor="email">Login</label>
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
      </Form>
      <a href="https://envia.io" className="forgot">
        Esqueceu sua senha?
      </a>
    </Container>
  );
}
