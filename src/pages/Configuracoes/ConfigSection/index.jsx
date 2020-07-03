import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { FaCogs } from 'react-icons/fa';
import { format, formatDistanceToNow, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { SectionMarker, InputWrapper } from '~/components';
import { List } from '~/components/_common';

const placeholder = {
  newPassword: 'Nova senha (opcional)',
  password: 'Senha atual (obrigatório)',
};

function ConfigSection({ licence }) {
  const endDate = useMemo(
    () =>
      format(parseISO(licence.end), "d 'de' MMMM 'de' yyyy", { locale: pt }),
    [licence.end]
  );

  const expiresIn = useMemo(
    () =>
      formatDistanceToNow(parseISO(licence.end), {
        locale: pt,
      }),
    [licence.end]
  );

  return (
    <section>
      <SectionMarker label="Informações da conta" icon={FaCogs} />
      <InputWrapper
        id="newPassword"
        type="password"
        label="Alterar senha:"
        placeholder={placeholder.newPassword}
      />
      <InputWrapper
        id="password"
        type="password"
        label="Senha:"
        placeholder={placeholder.password}
      />
      <InputWrapper label="Atualizar licença:" labelOnly noStyled>
        <List
          kind="nostyled"
          list={[
            {
              label: 'Tipo:',
              value: licence.type,
            },
            {
              label: 'Expira em:',
              value: expiresIn,
            },
            {
              label: 'Licença:',
              value: licence.licence,
            },
            {
              label: 'Vigência:',
              value: endDate,
            },
          ]}
        />
      </InputWrapper>
    </section>
  );
}

ConfigSection.propTypes = {
  licence: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
};

export default ConfigSection;
