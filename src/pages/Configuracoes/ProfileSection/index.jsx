import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';
import { SectionMarker, InputWrapper } from '~/components';
import { Button } from '~/components/_common';
import api from '~/services/api';

function ProfileSection({ onAddCredit }) {
  const [mailQuantity, setMailQuantity] = useState(0);
  // const smsQuantity = 0;

  const placeholder = {
    name: 'Nome da escola',
    email: 'E-mail da escola',
  };

  useEffect(() => {
    async function getMailQuantity() {
      const { data, status } = await api.get('/credit/e-mail');
      if (status !== 200) return;
      setMailQuantity(data.credits);
    }
    getMailQuantity();
  }, []);
  return (
    <section>
      <SectionMarker label="Informações do perfil" icon={FaUserCircle} />
      <InputWrapper
        id="name"
        label="Nome da escola:"
        placeholder={placeholder.name}
      />
      <InputWrapper
        id="email"
        label="E-mail da escola:"
        placeholder={placeholder.email}
      />
      <InputWrapper label="Quantidade de e-mail:" labelOnly styled="none">
        <span>{mailQuantity}</span>
        <Button onClick={() => onAddCredit('e-mail')}>Adquirir mais</Button>
      </InputWrapper>
      {/* <InputWrapper label="Quantidade de SMS:" labelOnly styled="none">
        <span>{smsQuantity}</span>
        <Button onClick={() => onAddCredit('sms')}>Adquirir mais</Button>
      </InputWrapper> */}
    </section>
  );
}

ProfileSection.propTypes = {
  onAddCredit: PropTypes.func,
};

ProfileSection.defaultProps = {
  onAddCredit: () => {},
};

export default memo(ProfileSection);
