/*
esquema de dados do servidor:
  [
    {
      "id": 90,
      "name": "Julian Gonçalves de Oliveira Aquino dos Reis Santo",
      "email": "kn01102003@gmail.com",
      "phone": "11950546586",
      "birthDate": "2009-07-23",
      "responsible": {
        "id": 1,
        "name": "não possui",
        "email": "não possui",
        "phone": null
      },
      "turmas": [
        {
          "id": 3,
          "name": "7 º A",
          "turma_alunos": {
            "id_turma": 3,
            "id_aluno": 90
          }
        }
      ]
    }
  ]

esquema de dados das tabelas:
  [
    {
      "id": 1,
      "name": "Zezim",
      "birthDate": "12/12/2012",
      "email": "zezim@zezim",
      "phone": "11977440233",
      "responsible": "zezim father",
      "responsible_email": "pai@pai.com",
      "responsible_phone": "11977440233",
      "turmas": [
        1,
        2,
        3
      ]
    }
  ]
   */

const alunoBFF = alunos => {
  return alunos.map(aluno => {
    const { responsible, turmas, ...rest } = aluno;
    return {
      ...rest,
      responsible: responsible.name,
      responsible_id: responsible.id,
      responsible_email: responsible.email,
      responsible_phone: responsible.phone,
      turmas: turmas.map(turma => turma.id),
    };
  });
};

const alunoFFB = alunos => {
  return alunos.map(aluno => {
    const {
      responsible,
      responsible_id,
      responsible_email,
      responsible_phone,
      turmas,
      ...rest
    } = aluno;
    return {
      ...rest,
      responsible: {
        id: responsible_id,
        name: responsible,
        email: responsible_email,
        phone: responsible_phone,
      },
      turmas,
    };
  });
};

export { alunoBFF, alunoFFB };
