import React, { PropTypes } from 'react';

const propTypes = {
  time: PropTypes.string.isRequired,
};

class TimeCell extends React.Component {
  render() {
    const { time } = this.props;

    return (
      <td className="time-cell">
        {time}
      </td>
    );
  }
}

TimeCell.propTypes = propTypes;

export default TimeCell;
