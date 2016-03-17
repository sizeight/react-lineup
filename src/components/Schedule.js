import React, { PropTypes } from 'react';

import ScheduleRow from './ScheduleRow';

const propTypes = {
  events: PropTypes.array.isRequired,
};

class Schedule extends React.Component {
  render() {
    const { events } = this.props;

    return (
      <table className="schedule">
        <tbody>
          <ScheduleRow
            time='13:00'
            events={events}
          />
          <ScheduleRow
            time='13:15'
            events={events}
          />
          <ScheduleRow
            time='13:30'
            events={events}
          />
          <ScheduleRow
            time='13:45'
            events={events}
          />
          <ScheduleRow
            time='14:00'
            events={events}
          />
          <ScheduleRow
            time='14:15'
            events={events}
          />
        </tbody>
      </table>
    );
  }
}

Schedule.propTypes = propTypes;

export default Schedule;
