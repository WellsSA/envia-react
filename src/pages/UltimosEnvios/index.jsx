import React, { useState, useEffect, useCallback } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { FaEnvelopeOpen } from 'react-icons/fa';
import api from '~/services/api';
import { NamedSection } from '~/components';
import { Container, Message, Marker, InformationSection } from './styles';
import { CRITERION } from '~/store/modules/message/data';

export default function Configuracoes() {
  const [envios, setEnvios] = useState([]);

  useEffect(() => {
    async function loadEnvios() {
      const { data, status } = await api.get('ultimosEnvios');

      if (status !== 200) return;

      setEnvios(data);
    }

    loadEnvios();
  }, []);

  const formatDate = useCallback(
    date =>
      format(parseISO(date), "d 'de' MMMM 'de' yyyy 'às' HH:mm:ss", {
        locale: pt,
      }),
    []
  );

  return (
    <NamedSection name="Últimos Envios" icon={FaEnvelopeOpen}>
      <Container>
        {envios.map((envio, index) => (
          <Message key={`messageKey${index + 1}`}>
            <h2>#{envios.length - index}</h2>
            <Marker>
              <InformationSection>
                <div>
                  <strong>Enviado em:</strong>
                  <span>{formatDate(envio.sentAt)}</span>
                </div>
                <div>
                  <strong>Mensagem:</strong>
                  <span>{envio.message}</span>
                </div>
                <div>
                  <strong>Critério:</strong>
                  <span>
                    {CRITERION[envio.criteria]
                      ? CRITERION[envio.criteria].label
                      : 'ENVIA'}
                  </span>
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
                  <span>{envio.to.map(({ name }) => name).join(',')}</span>
                </div>
              </InformationSection>
            </Marker>
          </Message>
        ))}
      </Container>
    </NamedSection>
  );
}
