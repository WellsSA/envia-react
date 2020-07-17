/*
esquema de dados do servidor:
 {
    "id": 3,
    "name": "7 º A",
    "days": "Segunda e Sexta",
    "hours": "08:00",
    "course": {
      "id": 31,
      "name": "Marketing Pessoal"
    },
    "teacher": {
      "id": 49,
      "name": "Anderson"
    }
  },

esquema de dados das tabelas:
  {
    "id": "3",
    "name": "7 º A",
    "days": "Segunda e Sexta",
    "hours": "08:00",
    "course": "31",
    "teacher": "49"
  },
   */

const turmaBFF = turma => {
  const { id, course, teacher, ...rest } = turma;

  return {
    ...rest,
    id: id.toString(),
    course: course ? course.id.toString() : '',
    teacher: teacher ? teacher.id.toString() : '',
  };
};

const turmaFFB = turma => {
  const { id, course, teacher } = turma;
  return {
    ...turma,
    id: id ? id.toString() : null,
    course: course ? { id: +course } : null,
    teacher: teacher ? { id: +teacher } : null,
  };
};

export { turmaBFF, turmaFFB };
