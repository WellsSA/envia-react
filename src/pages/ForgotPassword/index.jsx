import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { FaGlobeAmericas } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import logo from '../../assets/logo.png';
import { Button } from '../../components/_common';
import {
  forgotPassword,
  changePassword,
} from '../../store/modules/auth/actions';

const NO_AUTH_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório *'),
});

const AUTH_SCHEMA = Yup.object().shape({
  password: Yup.string().required('A senha é obrigatória'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password')],
    'As senhas precisam coincidir'
  ),
});

export default function ForgotPassword() {
  const [auth, setAuth] = useState();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit(data) {
    if (auth) {
      const { password } = data;
      dispatch(changePassword({ auth, password }));
    } else {
      const { email } = data;
      dispatch(forgotPassword({ email }));
    }
  }

  useEffect(() => {
    const url = window.location.href;
    if (/auth/.test(url)) {
      setAuth(url.split('auth=')[1]);
    }
  }, [auth]);

  return (
    <>
      <img className="logo" src={logo} alt="Envia.io" />
      <Form
        schema={auth ? AUTH_SCHEMA : NO_AUTH_SCHEMA}
        onSubmit={handleSubmit}
      >
        <a href="https://envia.io" className="main">
          <FaGlobeAmericas />
        </a>

        {auth ? (
          <>
            <label htmlFor="email">Tudo certo!</label>
            <p>
              Agora é só
              <strong> criar uma nova senha</strong>.
            </p>
            <Input
              autoFocus
              name="password"
              type="password"
              placeholder="Nova senha"
            />
            <Input
              name="passwordConfirmation"
              type="password"
              placeholder="Confirme a nova senha"
            />

            <Button kind="envia" type="submit">
              {loading ? 'Carregando...' : 'Alterar senha'}
            </Button>
          </>
        ) : (
          <>
            <label htmlFor="email">Esqueceu sua senha?</label>
            <p>
              Não se preocupe! <br />
              <b>Preencha seu e-mail</b> e lhe enviaremos um
              <strong> e-mail de recuperação.</strong>
            </p>
            <Input autoFocus name="email" type="email" placeholder="E-mail" />

            <Button kind="envia" type="submit">
              {loading ? 'Carregando...' : 'Recuperar senha'}
            </Button>
          </>
        )}
      </Form>
      <Link to="/" className="forgot">
        Acabei de me lembrar!
      </Link>
    </>
  );
}
