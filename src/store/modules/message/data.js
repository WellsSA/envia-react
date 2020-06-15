import {
  FaWhatsapp,
  FaGraduationCap,
  FaBook,
  FaUser,
  FaUsers,
  FaUserTie,
} from 'react-icons/fa';
import { GoComment, GoMail } from 'react-icons/go';

const CRITERION = {
  ALL: {
    label: 'Todos os Alunos',
    icon: FaUsers,
    value: 'ALL',
  },
  STUDENTS: {
    label: 'Alunos Específicos',
    icon: FaUser,
    value: 'STUDENTS',
  },
  CLASSES: {
    label: 'Turmas Específicas',
    icon: FaUsers,
    value: 'CLASSES',
  },
  TEACHERS: {
    label: 'Professores Específicos',
    icon: FaGraduationCap,
    value: 'TEACHERS',
  },
  COURSES: {
    label: 'Cursos Específicos',
    icon: FaBook,
    value: 'COURSES',
  },
  RESPONSIBLES: {
    label: 'Responsáveis',
    icon: FaUserTie,
    value: 'RESPONSIBLES',
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

export { CRITERION, CRITERION_ARR, PLATFORMS, PLATFORMS_ARR, STEPS };
