import { createAction } from 'redux-actions';


export default function createActions(namespace, selectors) {
  /**
   * Selectors are here as a second argument, because sometimes selectors are needed
   * when creating more complex action creators.
   */

  /**
   * Action types.
   */

  const STANDARD_FEATURE_INCREMENT_CLICK = `${namespace}_STANDARD_FEATURE_INCREMENT_CLICK`;


  /**
   * Action creators.
   */

  const incrementClick = createAction(STANDARD_FEATURE_INCREMENT_CLICK);


  return {
    STANDARD_FEATURE_INCREMENT_CLICK,

    incrementClick,
  };
}

