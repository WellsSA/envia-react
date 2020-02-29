import React from 'react';
import { FaBook } from 'react-icons/fa';
import { Container } from './styles';
import { NamedSection } from '../../components';

export default function Cursos() {
  return (
    <Container>
      <NamedSection name="Cursos" icon={FaBook}>
        Cursos
      </NamedSection>
    </Container>
  );
}
