import { connect } from 'react-redux';

import StandardFeature from '../components/StandardFeature';
import { clickCountSelector } from '../selectors';
import { incrementClick } from '../actions';


const mapStateToProps = state => ({
  clickCount: clickCountSelector(state),
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(incrementClick()),
});


export default connect(mapStateToProps, mapDispatchToProps)(StandardFeature);