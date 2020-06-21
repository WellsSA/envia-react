import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  Image,
  OptionBar,
  Option,
  Background,
  // FileLabel,
} from './styles';
import { signOut } from '~/store/modules/auth/actions';

export default function ProfileAvatar() {
  const dispatch = useDispatch();
  const [optionBarOpen, setOptionBarOpen] = useState(false);
  // const [file, setFile] = useState();

  const toggleOptionBar = () => {
    setOptionBarOpen(!optionBarOpen);
  };

  // const changeFile = e => {
  //   const data = new FormData();
  //   data.append('file', e.target.files[0]);

  //   setFile(data);
  // };

  return (
    <>
      <Container onClick={toggleOptionBar}>
        <Image src="https://wellsadev.com/images/well.jpg" alt="Envia" />
        <OptionBar open={optionBarOpen}>
          {/* <FileLabel htmlFor="avatar">
            <Option>
              {file ? 'Confirmar' : 'Alterar imagem'}
              <input
                type="file"
                id="avatar"
                accept="image/*"
                onChange={changeFile}
              />
            </Option>
          </FileLabel> */}
          <Option onClick={() => dispatch(signOut())}>Sair</Option>
        </OptionBar>
      </Container>
      <Background visible={optionBarOpen} onClick={toggleOptionBar} />
    </>
  );
}
