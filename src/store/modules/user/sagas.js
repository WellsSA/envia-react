import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { notifySuccess, notifyError } from '../../../utils/notifyHelper';
import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);
    toast.success('Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar perfil, confira seus dados!');
    yield put(updateProfileFailure());
  }
}
export function* addCredit({ payload: { kind, quantity } }) {
  try {
    if (!kind || !quantity) {
      throw Error('Você precisa selecionar um valor.');
    }

    if (quantity < 20) {
      throw Error('A quantidade mínima é de 20 unidades.');
    }
    const {
      status,
      data: { redirect_url },
    } = yield call(api.post, `credit/${kind}`, {
      quantity,
    });

    if (!redirect_url) throw Error('Houve uma falha na comunicação');

    if (status === 200)
      notifySuccess(
        'Deu tudo certo! Você será redirecionado ao nosso ambiente seguro.'
      );
    yield new Promise(resolve => setTimeout(resolve, 3000));
    window.location.replace(redirect_url);
  } catch (err) {
    console.tron.error(err);
    notifyError(err.message);
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/ADD_CREDITS_REQUEST', addCredit),
]);
