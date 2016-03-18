import React, { PropTypes } from 'react';

import ScheduleRow from './ScheduleRow';

const propTypes = {
  events: PropTypes.array.isRequired,
  onFavouriteEvent: PropTypes.func.isRequired,
};

class Schedule extends React.Component {
  render() {
    const { events, onFavouriteEvent } = this.props;

    return (
      <table className="schedule">
        <tbody>
          <ScheduleRow
            time='13:00'
            events={events}
            onFavouriteEvent={onFavouriteEvent}
          />
          <ScheduleRow
            time='13:15'
            events={events}
            onFavouriteEvent={onFavouriteEvent}
          />
          <ScheduleRow
            time='13:30'
            events={events}
            onFavouriteEvent={onFavouriteEvent}
          />
        </tbody>
      </table>
    );
  }
}

Schedule.propTypes = propTypes;

export default Schedule;
