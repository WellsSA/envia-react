import { MdAccessAlarm } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { GoComment, GoMail } from 'react-icons/go';

const CRITERION = {
  todos: {
    label: 'Todos os Alunos',
    icon: MdAccessAlarm,
    value: 'todos',
  },
  alunos: {
    label: 'Alunos Específicos',
    icon: MdAccessAlarm,
    value: 'alunos',
  },
  turmas: {
    label: 'Turmas Específicas',
    icon: MdAccessAlarm,
    value: 'turmas',
  },
  professores: {
    label: 'Professores Específicos',
    icon: MdAccessAlarm,
    value: 'professores',
  },
  cursos: {
    label: 'Cursos Específicos',
    icon: MdAccessAlarm,
    value: 'cursos',
  },
  responsaveis: {
    label: 'Responsáveis',
    icon: MdAccessAlarm,
    value: 'responsaveis',
  },
};

const CRITERION_ARR = [
  CRITERION.todos,
  CRITERION.alunos,
  CRITERION.turmas,
  CRITERION.professores,
  CRITERION.cursos,
  CRITERION.responsaveis,
];

const PLATFORMS = {
  email: {
    label: 'Email',
    icon: GoMail,
    value: 'email',
  },
  sms: {
    label: 'SMS',
    icon: GoComment,
    value: 'sms',
  },
  whatsapp: {
    label: 'Whatsapp',
    icon: FaWhatsapp,
    value: 'whatsapp',
  },
};

const PLATFORMS_ARR = [PLATFORMS.email, PLATFORMS.sms, PLATFORMS.whatsapp];

export { CRITERION, CRITERION_ARR, PLATFORMS, PLATFORMS_ARR };
