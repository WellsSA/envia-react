import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { SectionMarker, InputWrapper } from '../../../components';
// import { Container } from './styles';

function ProfileSection() {
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
  );
}

export default ProfileSection;
