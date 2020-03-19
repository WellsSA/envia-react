import React from 'react';
import { Form } from '@rocketseat/unform';
import { FaCog, FaUserCircle, FaCogs } from 'react-icons/fa';
import {
  NamedSection,
  SectionMarker,
  SectionDivisor,
  InputWrapper,
} from '../../components';
import { Container, ListDisplayer } from './styles';

export default function Configuracoes() {
  const mailQuantity = 98880909;
  const smsQuantity = 98880909;

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
                <ListDisplayer>
                  <li>
                    <strong>Tipo:</strong>
                    <span>ENVIA</span>
                  </li>
                  <li>
                    <strong>Expira em:</strong>
                    <span>10 dias</span>
                  </li>
                  <li>
                    <strong>Licença:</strong>
                    <span>W31154MB</span>
                  </li>
                  <li>
                    <strong>Vigência:</strong>
                    <span>Vitalícia</span>
                  </li>
                </ListDisplayer>
              </InputWrapper>
            </section>
          </SectionDivisor>
          <button type="submit" className="confirm">
            Finalizar edição
          </button>
        </Form>
      </Container>
    </NamedSection>
  );
}
