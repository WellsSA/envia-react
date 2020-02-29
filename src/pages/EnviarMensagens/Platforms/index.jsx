import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { GoMail, GoComment } from 'react-icons/go';
import { Container, Platform } from './styles';

export default function Platforms() {
  return (
    <Container>
      <Platform className="confirm">
        <GoMail />
        <span>Email</span>
      </Platform>
      <Platform className="confirm">
        <GoComment />
        <span>SMS</span>
      </Platform>
      <Platform className="confirm">
        <FaWhatsapp />
        <span>Whatsapp</span>
      </Platform>
    </Container>
  );
}
