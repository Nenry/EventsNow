import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import EventIndexItem from '../events/event_index_item';

class CategoryShow extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.categoryId !== this.props.match.params.categoryId)
      this.props.fetchCategory(nextProps.match.params.categoryId);
  }

  componentDidMount() {
    this.props.fetchCategory(this.props.match.params.categoryId);
    window.scrollTo(0, 0);
  }


  render() {

    if (this.props.category) {
      return (
        <div className="categories-show-container">
          <div className="categories-show-header">
            {this.props.category.title}
          </div>
          <div className="bookmarks">
            {this.props.category.events.map((event) => (
              <div key={event.id}>
                <EventIndexItem key={event.id} event={event} className="bookmarks" />

              </div>

            ))}
          </div>
        </div>
      );

    } else {
      return (
        <div>Loading...</div>
      );
    }
  }
}

export default withRouter(CategoryShow);