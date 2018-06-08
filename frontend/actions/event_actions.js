import * as EventsApiUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';



export const receiveEvents = (events) =>({
  type: RECEIVE_EVENTS,
  events
});

export const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
});

export const removeEvent = (eventId) => ({
  type: REMOVE_EVENT,
  eventId
});

export const fetchEvents = () => dispatch => (
  EventsApiUtil.fetchEvents().then(events => (
    dispatch(receiveEvents(events))
  ))
);

export const fetchEvent = (id) => dispatch => (
  EventsApiUtil.fetchEvent(id).then(event => (
    dispatch(receiveEvent(event))
  ))
);

export const createEvent = (event) => dispatch =>(
  EventsApiUtil.createEvent(event).then(eventRes => (
    dispatch(receiveEvent(eventRes))
  ))
);

export const deleteEvent = (id) => dispatch => (
  EventsApiUtil.deleteEvent(id).then(eventRes => (
    dispatch(removeEvent(eventRes.id))
  ))
);