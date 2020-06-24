import {
  FaWhatsapp,
  FaGraduationCap,
  FaBook,
  FaUser,
  FaUsers,
  FaUserTie,
  FaBirthdayCake,
} from 'react-icons/fa';
import { GoComment, GoMail } from 'react-icons/go';

const CRITERION = {
  ALL: {
    label: 'Todos os Alunos',
    icon: FaUsers,
    value: 'ALL',
    endpoint: 'todos',
  },
  STUDENTS: {
    label: 'Alunos Específicos',
    icon: FaUser,
    value: 'STUDENTS',
    endpoint: 'alunos',
  },
  CLASSES: {
    label: 'Turmas Específicas',
    icon: FaUsers,
    value: 'CLASSES',
    endpoint: 'turmas',
  },
  TEACHERS: {
    label: 'Professores Específicos',
    icon: FaGraduationCap,
    value: 'TEACHERS',
    endpoint: 'professores',
  },
  COURSES: {
    label: 'Cursos Específicos',
    icon: FaBook,
    value: 'COURSES',
    endpoint: 'cursos',
  },
  RESPONSIBLES: {
    label: 'Responsáveis',
    icon: FaUserTie,
    value: 'RESPONSIBLES',
    endpoint: 'responsaveis',
  },
  BIRTHDAYS: {
    label: 'Aniversáriantes',
    icon: FaBirthdayCake,
    value: 'BIRTHDAYS',
    endpoint: 'aniversariantes',
  },
};

const CRITERION_ARR = [
  CRITERION.ALL,
  CRITERION.STUDENTS,
  CRITERION.CLASSES,
  CRITERION.TEACHERS,
  CRITERION.COURSES,
  CRITERION.RESPONSIBLES,
];

const PLATFORMS = {
  EMAIL: {
    label: 'Email',
    icon: GoMail,
    value: 'EMAIL',
  },
  SMS: {
    label: 'SMS',
    icon: GoComment,
    value: 'SMS',
  },
  WHATSAPP: {
    label: 'Whatsapp',
    icon: FaWhatsapp,
    value: 'WHATSAPP',
  },
};

const PLATFORMS_ARR = [PLATFORMS.EMAIL, PLATFORMS.SMS, PLATFORMS.WHATSAPP];

const STEPS = {
  MESSAGE: 1,
  CRITERIA: 2,
  STUDENTS: 3,
  PLATFORMS: 4,
  CONFIRM: 5,
};

const BIRTH_STEPS = {
  STUDENTS: 1,
  MESSAGE: 2,
  PLATFORMS: 3,
  CONFIRM: 4,
};

export {
  CRITERION,
  CRITERION_ARR,
  PLATFORMS,
  PLATFORMS_ARR,
  STEPS,
  BIRTH_STEPS,
};
