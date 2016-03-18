import { connect } from 'react-redux';

import { favouriteEvent } from '../actions/ActionCreators';

import Lineup from '../components/Lineup';

const mapStateToProps = (state) => {
  return {
    events: state.events,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFavouriteEvent: (eventId) => {
      dispatch(favouriteEvent(eventId));
    },
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Lineup);

export default App;
