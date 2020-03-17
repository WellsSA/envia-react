import { all } from 'redux-saga/effects';

import message from './message/sagas';
import auth from './auth/sagas';
import user from './user/sagas';

export default function* rootSaga() {
  return yield all([message, auth, user]);
}
