import { handleActions } from 'redux-actions';

import { incrementClick } from './actions';


const initialState = {
  clickCount: 0,
};


export default handleActions({
  [incrementClick]: state => ({ ...state, clickCount: state.clickCount + 1 }),
}, initialState);
