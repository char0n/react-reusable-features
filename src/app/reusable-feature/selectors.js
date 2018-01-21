import { get } from 'lodash/fp';


export default function createSelectors(statePath, injectedSelectors = {}) {
  /**
   * injectedSelectors are here as a second argument, because sometimes you may want to
   * inject selectors from instances of other reusable features.
   */

  /**
   * Input selectors.
   */

  function clickCountSelector(state) {
    return get(`${statePath}.clickCount`, state);
  }


  return {
    clickCountSelector,
  };
}

