const ERRORS = {
  // Users
  'e-mail already in use': 'Já existe uma conta com este e-mail',
  'failed on delete user': 'Falha ao excluir usuário',
  // Alunos
  'student already exists': 'Este aluno já havia sido cadastrado no Envia!',
};

const DEFAULT_ERROR = 'Houve um erro inesperado. Verifique sua conexão';

const getErrorMessage = message =>
  ERRORS[message] ? ERRORS[message] : DEFAULT_ERROR;

export { getErrorMessage, DEFAULT_ERROR };
