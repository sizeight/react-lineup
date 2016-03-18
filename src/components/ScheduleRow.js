import React, { PropTypes } from 'react';

import TimeCell from './TimeCell';
import EventCell from './EventCell';

const propTypes = {
  time: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired,
  onFavouriteEvent: PropTypes.func.isRequired,
};

class ScheduleRow extends React.Component {
  render() {
    const { time, events, onFavouriteEvent } = this.props;

    return (
      <tr className="schedule-row">
        <TimeCell
          time={time}
        />
        {events.map((event, i) =>
          <EventCell
            id={event.id}
            title={event.title}
            favourited={event.favourited}
            onFavouriteEvent={onFavouriteEvent}
            key={i}
          />
        )}
      </tr>
    );
  }
}

ScheduleRow.propTypes = propTypes;

export default ScheduleRow;
