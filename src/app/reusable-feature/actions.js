import { createAction } from 'redux-actions';


export default function createActions(namespace, selectors) {
  /**
   * Selectors are here as a second argument, because sometimes selectors are needed
   * when creating more complex action creators.
   */

  /**
   * Action types.
   */

  const REUSABLE_FEATURE_INCREMENT_CLICK = `${namespace}_REUSABLE_FEATURE_INCREMENT_CLICK`;


  /**
   * Action creators.
   */

  const incrementClick = createAction(REUSABLE_FEATURE_INCREMENT_CLICK);


  return {
    REUSABLE_FEATURE_INCREMENT_CLICK: REUSABLE_FEATURE_INCREMENT_CLICK,

    incrementClick,
  };
}

