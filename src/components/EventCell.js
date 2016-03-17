import React, { PropTypes } from 'react';

const propTypes = {
  title: PropTypes.string.isRequired,
};

class EventCell extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <td className="event-cell">
        {title}
      </td>
    );
  }
}

EventCell.propTypes = propTypes;

export default EventCell;
