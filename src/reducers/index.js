import { combineReducers } from 'redux';

import acts from './acts'

const lineupApp = combineReducers({
   acts,
});

export default lineupApp;
