import React from 'react';
import PropTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';
import { SectionMarker, InputWrapper } from '../../../components';
import { Button } from '../../../components/_common';
// import { Container } from './styles';

function ProfileSection({ onAddCredit }) {
  const mailQuantity = 98880909;
  const smsQuantity = 98880909;

  const placeholder = {
    name: 'Nome da escola',
    password: '*******',
  };

  return (
    <section>
      <SectionMarker label="Informações do perfil" icon={FaUserCircle} />
      <InputWrapper
        id="name"
        label="Nome da escola:"
        placeholder={placeholder.name}
      />
      <InputWrapper label="Quantidade de e-mail:" labelOnly styled="none">
        <span>{mailQuantity}</span>
        <Button onClick={() => onAddCredit('e-mail')}>Adquirir mais</Button>
      </InputWrapper>
      <InputWrapper label="Quantidade de SMS:" labelOnly styled="none">
        <span>{smsQuantity}</span>
        <Button onClick={() => onAddCredit('sms')}>Adquirir mais</Button>
      </InputWrapper>
    </section>
  );
}

ProfileSection.propTypes = {
  onAddCredit: PropTypes.func,
};

ProfileSection.defaultProps = {
  onAddCredit: () => {},
};

export default ProfileSection;
