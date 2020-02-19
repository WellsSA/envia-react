import { all } from 'redux-saga/effects';

import message from './message/sagas';

export default function* rootSaga() {
  return yield all([message]);
}
