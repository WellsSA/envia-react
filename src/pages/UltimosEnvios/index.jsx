import React, { useState, useEffect } from 'react';

import { FaEnvelopeOpen } from 'react-icons/fa';
import api from '../../services/api';
import { NamedSection } from '../../components';
import { Container, Message, Marker, InformationSection } from './styles';

export default function Configuracoes() {
  const [envios, setEnvios] = useState([]);

  useEffect(() => {
    async function loadEnvios() {
      const { data, status } = await api.get('ultimosEnvios');

      if (status !== 200) return;

      setEnvios(data);
    }

    loadEnvios();
  });

  return (
    <NamedSection name="Últimos Envios" icon={FaEnvelopeOpen}>
      <Container>
        {envios.map((envio, index) => (
          <Message key={index}>
            <h2>#{envios.length - index}</h2>
            <Marker>
              <InformationSection>
                <div>
                  <strong>Enviado em:</strong>
                  <span>{envio.sentAt}</span>
                </div>
                <div>
                  <strong>Mensagem:</strong>
                  <span>{envio.message}</span>
                </div>
                <div>
                  <strong>Critério:</strong>
                  <span>{envio.criteria}</span>
                </div>
                <div>
                  <strong>Plataforma:</strong>
                  <span>{envio.platforms}</span>
                </div>
                <div>
                  <strong>Qtd. alunos:</strong>
                  <span>{envio.studentsQuantity}</span>
                </div>
                <div>
                  <strong>Qtd. responsáveis:</strong>
                  <span>{envio.responsibleQuantity}</span>
                </div>
              </InformationSection>

              <InformationSection>
                <div>
                  <strong>alunos:</strong>
                  <span>{envio.students}</span>
                </div>
              </InformationSection>
            </Marker>
          </Message>
        ))}
      </Container>
    </NamedSection>
  );
}
