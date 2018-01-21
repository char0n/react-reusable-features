import { connect } from 'react-redux';

import ReusableFeature from '../components/ReusableFeature';


export default function createContainer(selectors, actions) {
  const mapStateToProps = state => ({
    clickCount: selectors.clickCountSelector(state),
  });

  const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(actions.incrementClick()),
  });

  return connect(mapStateToProps, mapDispatchToProps)(ReusableFeature);
};



