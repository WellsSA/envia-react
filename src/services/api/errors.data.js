const ERRORS = {
  // Users
  'unauthorized access. verify your e-mail and password':
    'Acesso não autorizado. Verifique seu login e senha.',
  'e-mail already in use': 'Já existe uma conta com este e-mail.',
  'failed on delete user': 'Falha ao excluir usuário.',
  'unauthorized access. your password does not match':
    'Falha ao atualizar perfil. verifique sua senha.',
  // Alunos
  'student already exists': 'Este aluno já havia sido cadastrado no Envia!',

  //
  'name is a required field': 'Nome é um campo requerido.',
  'invalid token': 'Sua sessão expirou. Faça login novamente.',

  // Forgot password
  'invalid auth':
    'Sua autenticação expirou. Solicite uma nova alteração de senha.',
  'user not found': 'Usuário não encontrado. Verifique seu e-mail.',
};

const DEFAULT_ERROR = 'Houve um erro inesperado. Verifique sua conexão.';

const getErrorMessage = message =>
  ERRORS[message] ? ERRORS[message] : DEFAULT_ERROR;

export { getErrorMessage, DEFAULT_ERROR };
