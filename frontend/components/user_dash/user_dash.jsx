import React from 'react';
import EventIndexItem from '../events/event_index_item';
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class UserDash extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  componentDidMount() {
    this.props.fetchBookmarks();

  }


  render() {

    if (this.props.currentBookmarks.every(bookmark => bookmark.event !== undefined)) {

      return (
        <div className="users-dash-wrapper">
          <div className="user-modal">
            <button onClick={this.openModal}>Open Modal</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >

              <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
              <div>I am a modal</div>
              <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
                <button onClick={this.closeModal}>close</button>
              </form>
            </Modal>
          </div>

          <div className="user-events-bar">
            Saved Events
        </div>



          <div className="bookmarks">

            {this.props.currentBookmarks.map((bookmark) => (
              <div key={bookmark.id}>
                <EventIndexItem key={bookmark.event.id} event={bookmark.event} className="bookmarks" />

              </div>

            ))}

          </div>
        </div >
      );


    } else {
      return (<div>loading...</div>);
    }




  }


}


export default UserDash;