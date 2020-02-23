import { combineReducers } from 'redux';

import message from './message/reducer';
import notify from './notify/reducer';

export default combineReducers({ message, notify });
