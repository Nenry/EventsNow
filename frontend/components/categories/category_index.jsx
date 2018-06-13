import React from 'react';
import { Link } from 'react-router-dom';
class CategoryIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllCategories();
  }


  render() {
    return (
      <div className="categories-index-wrapper">

        {this.props.categories.map((category) => {
          return (
            <Link to={`/categories/${category.id}`}>{category.title}</Link>
          );
        })}

      </div>
    );
  }
}

export default CategoryIndex;
