import expect from 'expect';

// import { FAVOURITE_EVENT } from '../src/constants/ActionTypes';

// import { favouriteEvent } from '../src/actions';

describe('events actions', () => {
  it(('favouriteEvent()'), () => {
    const expectedAction = {
      type: FAVOURITE_EVENT,
      eventId: 3,
    };
    expect(favouriteEvent(3)).toEqual(expectedAction);
  });
})
