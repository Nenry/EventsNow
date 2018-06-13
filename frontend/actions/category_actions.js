import * as CategoryApiUtil from '../util/category_api_util';

export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORY_ERRORS = 'RECEIVE_CATEGORY_ERRORS';

export const receiveErrors = (errors) => ({
  type: RECEIVE_CATEGORY_ERRORS,
  errors
});

export const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const receiveCategory = (category) => ({
  type: RECEIVE_CATEGORY,
  category
});

export const fetchAllCategories = () => dispatch => (
  CategoryApiUtil.fetchAllCategories().then(categories => (
    dispatch(receiveCategories(categories))
  ))
);

export const fetchCategory = (id) => dispatch => (
  CategoryApiUtil.fetchCategory(id).then(category => (
    dispatch(receiveCategory(category))
  ))
);