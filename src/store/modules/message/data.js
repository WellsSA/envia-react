import { MdAccessAlarm } from 'react-icons/md';

const criterion = {
  TODOS: 0,
  ALUNOS: 1,
  TURMAS: 2,
  PROFESSORES: 3,
  CURSOS: 4,
  RESPONSAVEIS: 5,
};

const exhibition = [
  {
    label: 'Todos os Alunos',
    icon: MdAccessAlarm,
    value: criterion.TODOS,
  },
  {
    label: 'Alunos Específicos',
    icon: MdAccessAlarm,
    value: criterion.ALUNOS,
  },
  {
    label: 'Turmas Específicas',
    icon: MdAccessAlarm,
    value: criterion.TURMAS,
  },
  {
    label: 'Professores Específicos',
    icon: MdAccessAlarm,
    value: criterion.PROFESSORES,
  },
  {
    label: 'Cursos Específicos',
    icon: MdAccessAlarm,
    value: criterion.CURSOS,
  },
  {
    label: 'Responsáveis',
    icon: MdAccessAlarm,
    value: criterion.RESPONSAVEIS,
  },
];

export { criterion, exhibition };
