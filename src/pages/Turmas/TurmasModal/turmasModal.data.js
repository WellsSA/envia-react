import api from '~/services/api';
import { TURMA_SCHEMA } from '~/utils/schema';

const placeholder = {
  name: 'ex.: 1º Informática Noite',
  days: 'ex.: Segunda, Quarta e Sexta',
  hours: 'ex.: das 7h às 10h',
  course: 'Selecionar curso...',
  teacher: 'Selecionar professor...',
};

const schema = TURMA_SCHEMA;

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
