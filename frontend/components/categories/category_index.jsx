import React from 'react';
import { Link } from 'react-router-dom';
class CategoryIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllCategories();
  }


  render() {
    return (
      <div className='home-categories'>
        <div className='category-header'>
          Categories
      </div>
      <div className="categories-index-wrapper">
        <Link className="music" to='/categories/2'>Music</Link>
        <Link className="food-drinks" to='/categories/3'>Food & Drinks</Link>
        <Link className="classes" to='/categories/4'>Classes</Link>
        <Link className="arts" to='/categories/5'>Arts</Link>
        <Link className="parties" to='/categories/6'>Parties</Link>
        <Link className="sport-wellness" to='/categories/7'>Sport & Wellness</Link>
        <Link className="networking" to='/categories/8'>Networking</Link>
      </div>
      </div>

    );
  }


  // render() {
  //   return (
  //     <div className="categories-index-wrapper">

  //       {this.props.categories.map((category) => {
  //         if (category.id !== 1)
  //           return (
  //             <Link to={`/categories/${category.id}`}>{category.title}</Link>
  //           );
  //       })}

  //     </div>
  //   );
  // }
}

export default CategoryIndex;
