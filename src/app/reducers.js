import { combineReducers } from 'redux';

import standardFeatureReducer from './standard-feature/reducers';
import reusableFeature1Reducer from './reusable-feature-instance-1/reducers';
import reusableFeature2Reducer from './reusable-feature-instance-2/reducers';


export default combineReducers({
  standardFeature: standardFeatureReducer,
  reusableFeature1: reusableFeature1Reducer,
  reusableFeature2: reusableFeature2Reducer,
});