import React, { PropTypes } from 'react';

import TimeCell from './TimeCell';
import EventCell from './EventCell';

const propTypes = {
  time: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired,
};

class ScheduleRow extends React.Component {
  render() {
    const { time, events } = this.props;

    return (
      <tr className="schedule-row">
        <TimeCell
          time={time}
        />
        {events.map((event, i) =>
          <EventCell
            title={event.title}
            key={i}
          />
        )}
      </tr>
    );
  }
}

ScheduleRow.propTypes = propTypes;

export default ScheduleRow;
