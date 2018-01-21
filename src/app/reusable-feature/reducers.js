import { handleActions } from 'redux-actions';


export default function createReducers(actions) {
  const initialState = {
    clickCount: 0,
  };


  return handleActions({
    [actions.incrementClick]: state => ({ ...state, clickCount: state.clickCount + 1 }),
  }, initialState);
};
