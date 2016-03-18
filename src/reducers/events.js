import { FAVOURITE_EVENT } from '../constants/ActionTypes'

const initialState = [
  {
    id: 1,
    title: 'Queen',
    stage: 'Main stage',
    favourited: false,
    date: '2016/03/18',
    begin: '12:00',
    end: '13:00',
  },
  {
    id: 2,
    title: 'Metallica',
    stage: 'Main stage',
    favourited: false,
    date: '2016/03/18',
    begin: '13:00',
    end: '14:00',
  },
  {
    id: 3,
    title: 'The Prodigy',
    stage: 'Electronic stage',
    favourited: false,
    date: '2016/03/18',
    begin: '12:00',
    end: '13:00',
  },
  {
    id: 4,
    title: 'The Chemical Brothers',
    stage: 'Electronic stage',
    favourited: false,
    date: '2016/03/18',
    begin: '13:00',
    end: '14:00',
  },
];

function event(state, action) {
  switch (action.type) {
    case FAVOURITE_EVENT:
      if (state.id !== action.eventId) {
        return state;
      }
      return {
        ...state,
        favourited: !state.favourited,
      };
    default:
      return state;
  }
}

export default function events(state = initialState, action) {
  switch (action.type) {
    case FAVOURITE_EVENT:
      return state.map(e =>
        event(e, action)
      );
    default:
      return state;
  }
}
