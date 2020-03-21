import React from 'react';
import { Form } from '@rocketseat/unform';
import { FaCog, FaUserCircle, FaCogs } from 'react-icons/fa';
import {
  NamedSection,
  SectionMarker,
  SectionDivisor,
  InputWrapper,
  ListDisplayer,
} from '../../components';
import { Container } from './styles';

export default function Configuracoes() {
  const mailQuantity = 98880909;
  const smsQuantity = 98880909;
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

  const placeholder = {
    name: 'Nome da escola',
    password: '*******',
  };

  return (
    <NamedSection name="Configurações" icon={FaCog}>
      <Container>
        <Form>
          <SectionDivisor>
            <section>
              <SectionMarker
                label="Informações do perfil"
                icon={FaUserCircle}
              />
              <InputWrapper
                id="name"
                label="Nome da escola:"
                placeholder={placeholder.name}
              />
              <InputWrapper
                id="mailQuantity"
                label="Quantidade de e-mail:"
                labelOnly
                noStyled
              >
                <span>{mailQuantity}</span>
                <button type="button">Adquirir mais</button>
              </InputWrapper>
              <InputWrapper
                id="smsQuantity"
                label="Quantidade de SMS:"
                labelOnly
                noStyled
              >
                <span>{smsQuantity}</span>
                <button type="button">Adquirir mais</button>
              </InputWrapper>
            </section>
            <section>
              <SectionMarker label="Informações da conta" icon={FaCogs} />
              <InputWrapper
                id="password"
                type="password"
                label="Alterar senha:"
                placeholder={placeholder.password}
              />
              <InputWrapper
                id="licence"
                label="Atualizar licença:"
                labelOnly
                noStyled
              >
                <ListDisplayer list={list} />
              </InputWrapper>
            </section>
          </SectionDivisor>
          <button type="submit" className="confirm">
            Finalizar edição
          </button>
          <button type="submit" className="cancel">
            Sair do Envia
          </button>
        </Form>
      </Container>
    </NamedSection>
  );
}
