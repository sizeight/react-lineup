import { FAVOURITE_EVENT } from '../constants/ActionTypes';

export function favouriteEvent(eventId) {
  return { type: FAVOURITE_EVENT, eventId };
}
