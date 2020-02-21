import { combineReducers } from 'redux';

import message from './message/reducer';
import overlay from './overlay/reducer';

export default combineReducers({ message, overlay });
