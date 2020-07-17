import React, { useRef } from 'react';
import { FaQuestion } from 'react-icons/fa';
import { NamedSection } from '~/components';
import { Button } from '~/components/_common';
import { Container, Carousel, QuestionContainer, Question } from './styles';

export default function Dashboard() {
  const scrollRef = useRef();
  const scrollUnit = 200;

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
              prev
            </Button>
          </>
          <QuestionContainer ref={scrollRef}>
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
          </QuestionContainer>
          <>
            <Button kind="contrast" onClick={scrollRight}>
              next
            </Button>
          </>
        </Carousel>
      </NamedSection>
    </Container>
  );
}
