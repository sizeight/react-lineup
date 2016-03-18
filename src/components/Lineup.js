import React, { PropTypes } from 'react';

import Schedule from './Schedule';

const propTypes = {
  events: PropTypes.array.isRequired,
  onFavouriteEvent: PropTypes.func.isRequired,
};

class Lineup extends React.Component {
  render() {
    const { events, onFavouriteEvent } = this.props;

    return (
      <div className="lineup">
        <Schedule
          events={events}
          onFavouriteEvent={onFavouriteEvent}
        />
      </div>
    );
  }
}

Lineup.propTypes = propTypes;

export default Lineup;
