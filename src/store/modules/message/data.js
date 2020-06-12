import { MdAccessAlarm } from 'react-icons/md';

const criteria = {
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
    value: criteria.TODOS,
  },
  {
    label: 'Alunos Específicos',
    icon: MdAccessAlarm,
    value: criteria.ALUNOS,
  },
  {
    label: 'Turmas Específicas',
    icon: MdAccessAlarm,
    value: criteria.TURMAS,
  },
  {
    label: 'Professores Específicos',
    icon: MdAccessAlarm,
    value: criteria.PROFESSORES,
  },
  {
    label: 'Cursos Específicos',
    icon: MdAccessAlarm,
    value: criteria.CURSOS,
  },
  {
    label: 'Responsáveis',
    icon: MdAccessAlarm,
    value: criteria.RESPONSAVEIS,
  },
];

export { criteria, exhibition };
