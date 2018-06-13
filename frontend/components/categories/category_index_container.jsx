import { connect } from 'react-redux';
import CategoryIndex from './category_index';
import { fetchAllCategories, fetchCategory } from '../../actions/category_actions';
const msp = state =>
  ({
    categories: Object.values(state.entities.categories)
  });


const mdp = dispatch => {
  return ({
    fetchAllCategories: () => dispatch(fetchAllCategories()),
    fetchCategory: (id) => dispatch(fetchCategory(id))

  });
};

export default connect(msp, mdp)(CategoryIndex);