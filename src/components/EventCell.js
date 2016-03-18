import React, { PropTypes } from 'react';

const propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  favourited: PropTypes.bool.isRequired,
  onFavouriteEvent: PropTypes.func.isRequired,
};

class EventCell extends React.Component {
  render() {
    const { id, title, favourited, onFavouriteEvent } = this.props;

    return (
      <td className="event-cell">
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            console.log(id);
            onFavouriteEvent(id);
          }}
        >{favourited ? 'X' : 'O'}</a>
        {' '}
        {title}
      </td>
    );
  }
}

EventCell.propTypes = propTypes;

export default EventCell;
