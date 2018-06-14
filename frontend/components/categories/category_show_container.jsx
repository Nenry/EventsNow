import { connect } from 'react-redux';
import CategoryShow from './category_show';
import { fetchAllCategories, fetchCategory } from '../../actions/category_actions';
const msp = (state, ownProps) =>
  ({
    category: state.entities.categories[ownProps.match.params.categoryId]
  });


const mdp = dispatch => {
  return ({
    fetchAllCategories: () => dispatch(fetchAllCategories()),
    fetchCategory: (id) => dispatch(fetchCategory(id))

  });
};

export default connect(msp, mdp)(CategoryShow);