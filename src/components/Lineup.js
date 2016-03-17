import React, { PropTypes } from 'react';

import Schedule from './Schedule';

const propTypes = {
  events: PropTypes.array.isRequired,
};

class Lineup extends React.Component {
  render() {
    const { events } = this.props;

    return (
      <div className="lineup">
        <Schedule
          events={events}
        />
      </div>
    );
  }
}

Lineup.propTypes = propTypes;

export default Lineup;
