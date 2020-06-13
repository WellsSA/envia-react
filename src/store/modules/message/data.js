import { MdAccessAlarm } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { GoComment, GoMail } from 'react-icons/go';

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

export { criterion, exhibition, PLATFORMS, PLATFORMS_ARR };
