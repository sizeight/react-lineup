import expect from 'expect';
import deepFreeze from 'deep-freeze';

import eventsReducer from '../../src/reducers/events';

import { FAVOURITE_EVENT } from '../../src/constants/ActionTypes';

describe('events reducer', () => {
  it('should return the initial state', () => {
    const action = {};
    const stateBefore = undefined;
    const stateAfter = [
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
    expect(eventsReducer(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle FAVOURITE_EVENT', () => {
    const action = {
      type: FAVOURITE_EVENT,
      eventId: 2,
    };
    const stateBefore = [
      {
        id: 1,
        favourited: false,
      },
      {
        id: 2,
        favourited: false,
      },
      {
        id: 3,
        favourited: false,
      },
    ]
    const stateAfter = [
      {
        id: 1,
        favourited: false,
      },
      {
        id: 2,
        favourited: true,
      },
      {
        id: 3,
        favourited: false,
      },
    ]
    deepFreeze(stateBefore);
    expect(eventsReducer(stateBefore, action)).toEqual(stateAfter);
  });
});
