import { connect } from 'react-redux';

import Lineup from '../components/Lineup';

const mapStateToProps = (state) => {
  return {
    events: state.events,
  }
}

const App = connect(mapStateToProps)(Lineup);

export default App;
