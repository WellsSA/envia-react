import * as Yup from 'yup';
import api from '../../../services/api';

const placeholder = {
  name: 'ex.: 1º Informática Noite',
  days: 'ex.: Segunda, Quarta e Sexta',
  hours: 'ex.: das 7h às 10h',
  course: 'Selecionar curso...',
  teacher: 'Selecionar professor...',
};

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório *'),
  days: Yup.string().required('O dia é obrigatório *'),
  hours: Yup.string().required('O horário é obrigatório *'),
  course: Yup.string().required('O curso é obrigatório *'),
  teacher: Yup.string().required('O professor é obrigatório *'),
});

async function loadCourses(callback) {
  const { status, data } = await api.get('cursos');
  if (status !== 200) return;
  return callback(data);
}

async function loadTeachers(callback) {
  const { status, data } = await api.get('professores');
  if (status !== 200) return;
  return callback(data);
}

export { schema, placeholder, loadCourses, loadTeachers };
