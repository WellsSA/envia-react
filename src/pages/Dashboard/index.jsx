import React from 'react';
import { FaHome } from 'react-icons/fa';
import aniversariantesImage from '../../assets/dashboard/aniversariantes.png';
import licencaImage from '../../assets/dashboard/licenca.png';
import plataformasImage from '../../assets/dashboard/plataformas.png';

import {
  NamedSection,
  SectionDivisor,
  SectionMarker,
  ListDisplayer,
} from '../../components';
import { Container } from './styles';

export default function Configuracoes() {
  const alunos = [];
  const list = [
    {
      label: 'Tipo:',
      value: 'ENVIA',
    },
    {
      label: 'Expira em:',
      value: '10 dias',
    },
    {
      label: 'Licença:',
      value: 'W31154MB',
    },
    {
      label: 'Vigência:',
      value: 'Vitalícia',
    },
  ];

  return (
    <Container>
      <NamedSection name="Home" icon={FaHome}>
        <SectionDivisor>
          <section>
            <SectionMarker
              icon={() => (
                <img src={aniversariantesImage} alt="Aniversariantes" />
              )}
              label="Aniversariantes de hoje:"
              isMain
            />
            <ListDisplayer
              list={alunos}
              onEmptyLabel="Nenhum aluno faz aniversário hoje."
            />
          </section>
          <section>
            <SectionMarker
              icon={() => <img src={licencaImage} alt="Licença" />}
              label="Dados da licença:"
              isMain
            />
            <ListDisplayer list={list} />
          </section>
          <section>
            <SectionMarker
              icon={() => <img src={plataformasImage} alt="Plataformas" />}
              label="Minhas plataformas:"
              isMain
            />
          </section>
        </SectionDivisor>
      </NamedSection>
    </Container>
  );
}
