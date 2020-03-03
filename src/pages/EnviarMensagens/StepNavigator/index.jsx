/* eslint react/button-has-type: 0 */ // --> OFF

import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Container } from './styles';
import { prevStep } from '../../../store/modules/message/actions';

export default function StepNavigator({
  onConfirm,
  onCancel,
  notCancelable,
  submit,
}) {
  const dispatch = useDispatch();
  return (
    <Container>
      {notCancelable ? (
        <div />
      ) : (
        <button
          type={submit ? 'submit' : 'button'}
          className="cancel"
          onClick={() => onCancel(dispatch)}
        >
          <FaArrowLeft />
          Anterior
        </button>
      )}

      <button
        type={submit ? 'submit' : 'button'}
        className="confirm"
        onClick={() => onConfirm(dispatch)}
      >
        Próximo <FaArrowRight />
      </button>
    </Container>
  );
}

StepNavigator.propTypes = {
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  notCancelable: PropTypes.bool,
  submit: PropTypes.bool,
};

StepNavigator.defaultProps = {
  onConfirm: () => {},
  onCancel: dispatch => dispatch(prevStep()),
  notCancelable: false,
  submit: false,
};
