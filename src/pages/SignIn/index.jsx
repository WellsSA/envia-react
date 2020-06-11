import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { FaGlobeAmericas } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import logo from '../../assets/logo.png';
import { Button } from '../../components/_common';
import { signInRequest } from '../../store/modules/auth/actions';
import { Container } from './styles';

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

        <Button kind="envia" type="submit">
          {loading ? 'Carregando...' : 'Acessar'}
        </Button>
        <hr />
        <Link to="/register">
          <Button kind="contrast">Criar conta</Button>
        </Link>
      </Form>
      <a href="https://envia.io" className="forgot">
        Esqueceu sua senha?
      </a>
    </Container>
  );
}
