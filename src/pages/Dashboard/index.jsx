import React, { useRef } from 'react';
import { FaQuestion } from 'react-icons/fa';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

import licencaImage from '~/assets/dashboard/licenca.png';

import { NamedSection, SectionMarker } from '~/components';
import { Button } from '~/components/_common';
import { Container, Carousel, QuestionContainer, Question } from './styles';

const questions = [
  { label: 'Evasão' },
  { label: 'Cancelamentos' },
  { label: 'Alunos faltosos' },
  { label: 'Inadimplência' },
  { label: 'Comunicação individual com alunos' },
  { label: 'Comunicação individual com responsáveis' },
  { label: 'Comunicação frequente com alunos' },
  { label: 'Comunicação frequente com responsáveis' },
  {
    label: 'Avisos sobre imprevistos',
  },
  {
    label: 'Acompanhamento diário individual durante o curso',
  },
  {
    label: 'Mobilização excessiva de colaboradores',
  },
  {
    label: 'Eventos, ações e datas comemorativas',
  },
  {
    label: 'Contato com ex-alunos',
  },
  {
    label: 'Comunicação com aniversariantes',
  },
];

const Dashboard = () => {
  const scrollRef = useRef();
  const scrollUnit = 500;

  const scrollLeft = () => {
    if (scrollRef) {
      scrollRef.current.scrollLeft -= scrollUnit;
    }
  };

  const scrollRight = () => {
    if (scrollRef) {
      scrollRef.current.scrollLeft += scrollUnit;
    }
  };

  return (
    <Container>
      <NamedSection
        name="Qual é a principal dificuldade da sua escola"
        icon={FaQuestion}
      >
        <Carousel>
          <>
            <Button kind="contrast" onClick={scrollLeft}>
              <MdNavigateBefore />
            </Button>
          </>
          <QuestionContainer ref={scrollRef}>
            {questions.map(({ label }, i) => (
              <Question key={`question${i}`}>
                <SectionMarker
                  icon={() => <img src={licencaImage} alt="Licença" />}
                  label={label}
                  isMain
                />
              </Question>
            ))}
          </QuestionContainer>
          <>
            <Button kind="contrast" onClick={scrollRight}>
              <MdNavigateNext />
            </Button>
          </>
        </Carousel>
      </NamedSection>
    </Container>
  );
};

export default Dashboard;
