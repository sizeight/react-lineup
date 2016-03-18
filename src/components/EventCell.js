import React, { PropTypes } from 'react';

const propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

class EventCell extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <td className="event-cell">
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            console.log("Clicked");
          }}
        >O</a>
        {' '}
        {title}
      </td>
    );
  }
}

EventCell.propTypes = propTypes;

export default EventCell;
