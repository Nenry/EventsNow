import merge from 'lodash/merge';

import {
  RECEIVE_CATEGORY,
  RECEIVE_CATEGORIES,
  RECEIVE_CATEGORY_ERRORS
} from '../actions/category_actions';
import {
  RECEIVE_EVENT
} from '../actions/event_actions';


const categoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return merge({}, state, action.categories);
    case RECEIVE_CATEGORY:
      return merge({}, state, {
        [action.category.id]: action.category
      });


    default:
      return state;
  }
};

export default categoriesReducer;