import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import { TicketModal } from './event_ticket_modal';
const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalType: '',
      ticketCount: 1,
      ticketProcess: "cart"
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(field) {
    return () =>
      this.setState({ modalIsOpen: true, modalType: field });
  }



  closeModal() {
    this.setState({ modalIsOpen: false, ticketProcess: "cart" });
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);

    window.scrollTo(0, 0);
  }

  handleDelete(e) {
    this.props.deleteEvent(this.props.event.id).then(() => this.props.history.push('/events'));
  }

  handleCheckout() {
    this.props.createTicket({ event_id: this.props.event.id, tickets_count: this.state.ticketCount })
      .then(() => this.setState({ ticketProcess: 'confirm' }));

  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });

    };
  }

  renderErrors(field) {
    return (
      <div className="session-errors">
        {this.props.errors}
      </div>
    );

  }


  TicketModal() {

    return (
      <div>
        <div className="tickets-header-bar">
          <div className="tickets-header-text">Tickets</div>
          <div>
            <button className="tickets-header-bar-x" onClick={this.closeModal}>X</button>
          </div>
        </div>

        <div className="tickets-body">
          <div className="tickets-title">
            {this.props.event.title}
          </div>
          <div className="tickets-quantity">
            <div className="custom-select">

              <input type="number" onChange={this.update('ticketCount')} value={this.state.ticketCount} />
              {this.renderErrors("Not enough")}



            </div>



          </div>
        </div>
        <div className="tickets-modal-footer">
          <div className="tickets-modal-footer-left">

            <div>
              USD: ${this.props.event.price}

            </div>
          </div>

          <button className="show-bar-button-checkout" onClick={() => this.handleCheckout()}>Check Out</button>

        </div>
      </div>

    );
  }




  TicketModal2() {

    return (
      <div>
        <div className="tickets-header-bar-confirmation">
          <div className="tickets-header-text">Ticket Confirmation</div>
          <div>
            <button className="tickets-header-bar-x" onClick={this.closeModal}>X</button>
          </div>
        </div>
        <div className="tickets-body">
          Congratulations! Tickets are yours!

        </div>
      </div>
    );
  }

  render() {
    if (this.props.event) {
      return (
        <div className='event-show'>

          <div className="event-show-wrapper">
            <div className="event-show-banner-detail">
              <img className="event-show-banner" src={this.props.event.img_url} alt="" />

              <div className="event-side-banner">
                {this.props.event.title}
                <div>
                  Price: {this.props.event.price}$

                </div>
                <div>
                  <button className="show-bar-button-ticket" onClick={this.openModal('selectTickets')}>Tickets</button>
                  <Modal
                    isOpen={this.state.modalIsOpen}

                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    {this.state.ticketProcess === "cart" ? this.TicketModal() : this.TicketModal2()}



                  </Modal>
                </div>
              </div>

            </div>
            <div className="show-container">
              <div className='show-bar'>
                {this.props.session.id === this.props.event.host_id ? <Link to={`/events/${this.props.event.id}/edit`} className="show-bar-button">Edit</Link> : <div></div>}
                {this.props.session.id === this.props.event.host_id ? <button onClick={(e) => this.handleDelete(e)} className="show-bar-button">Delete</button> : <div></div>}
                <button onClick={() => this.props.createBookmark({ event_id: this.props.event.id })} className="show-bar-button">Bookmark</button>
              </div>
              <div className="event-show-main-detail">
                <div className="grid-desc">
                  <div className="show-desc-header">
                    Description

                  </div>
                  <div className="show-body">
                    {this.props.event.body}

                  </div>
                </div>

                <div className="details-loc">

                  <div>
                    <div className="sidebar-detail-header">

                      Date and Time
                    </div>
                    {this.props.event.time_start}-{this.props.event.time_end}
                  </div>


                  <div>
                    <div className="sidebar-detail-header">
                      Location


                    </div>
                    <div>
                      {this.props.event.address}
                    </div>
                    {this.props.event.city},
                    {this.props.event.state}
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

      );
    }

    return (<div>Loading...</div>);

  }
}

export default withRouter(EventShow);