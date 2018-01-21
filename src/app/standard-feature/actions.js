import { createAction } from 'redux-actions';


/**
 * Action types.
 */

export const STANDARD_FEATURE_INCREMENT_CLICK = 'STANDARD_FEATURE_INCREMENT_CLICK';


/**
 * Action creators.
 */

export const incrementClick = createAction(STANDARD_FEATURE_INCREMENT_CLICK);