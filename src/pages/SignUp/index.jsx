import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { FaGlobeAmericas } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import logo from '../../assets/logo.png';
import { Button } from '../../components/_common';
import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest({ name, email, password }));
  }

  return (
    <>
      <img className="logo" src={logo} alt="Envia.io" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <a href="https://envia.io" className="main">
          <FaGlobeAmericas />
        </a>
        <label htmlFor="email">Crie sua conta</label>
        <Input autoFocus name="name" type="text" placeholder="Nome" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <Button kind="envia" type="submit">
          {loading ? 'Carregando...' : 'Criar conta'}
        </Button>
        <hr />
        <Link to="/">
          <Button kind="contrast">Já possuo uma conta</Button>
        </Link>
      </Form>
      <a href="https://envia.io" className="forgot">
        Esqueceu sua senha?
      </a>
    </>
  );
}
