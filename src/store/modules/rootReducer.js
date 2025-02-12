import { combineReducers } from 'redux';

import message from './message/reducer';
import notify from './notify/reducer';
import auth from './auth/reducer';
import user from './user/reducer';
import loading from './loading/reducer';

export default combineReducers({ message, notify, auth, user, loading });
