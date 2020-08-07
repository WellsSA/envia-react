import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import EnviarMensagens from '../pages/EnviarMensagens';
import Professores from '../pages/Professores';
import Alunos from '../pages/Alunos';
import Cursos from '../pages/Cursos';
import Turmas from '../pages/Turmas';
import ModelosMensagens from '../pages/ModelosMensagens';
import Configuracoes from '../pages/Configuracoes';
import UltimosEnvios from '../pages/UltimosEnvios';
import ForgotPassword from '../pages/ForgotPassword';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/forgot" component={ForgotPassword} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/enviarMensagens" component={EnviarMensagens} isPrivate />
      <Route path="/professores" component={Professores} isPrivate />
      <Route path="/alunos" component={Alunos} isPrivate />
      <Route path="/cursos" component={Cursos} isPrivate />
      <Route path="/turmas" component={Turmas} isPrivate />
      <Route path="/modelosMensagens" component={ModelosMensagens} isPrivate />
      <Route path="/ultimosEnvios" component={UltimosEnvios} isPrivate />
      <Route path="/settings" component={Configuracoes} isPrivate />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
