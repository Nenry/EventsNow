import React from 'react';



export const TicketModal = ({ modalType, closeModal, openModal, event, createTicket, setState, state }) => {
  if (modalType === 'selectTickets') {
    return (
      <div>
        <div className="tickets-header-bar">
          <div className="tickets-header-text">Tickets</div>
          <div>
            <button className="tickets-header-bar-x" onClick={closeModal}>X</button>
          </div>
        </div>

        <div className="tickets-body">
          <div className="tickets-title">
            {event.title}
          </div>
          <div className="tickets-quantity">
            <div className="custom-select">
              <input type="number" value="" name="" id="" />

            </div>



          </div>
        </div>
        <div className="tickets-modal-footer">
          <div className="tickets-modal-footer-left">

            <div>
              USD: ${event.price}

            </div>
          </div>

          <button className="show-bar-button-checkout" onClick={() => createTicket({ event_id: event.id }).then(() => setState({ modalType: 'ticketConfirmation' }))}>Check Out</button>

        </div>
      </div>

    );
  } else if (modalType === 'ticketConfirmation') {
    return (
      <div>
        <div className="tickets-header-bar-confirmation">
          <div className="tickets-header-text">Ticket Confirmation</div>
          <div>
            <button className="tickets-header-bar-x" onClick={closeModal}>X</button>
          </div>
        </div>
        <div className="tickets-body">
          Congratulations! Tickets are yours!

        </div>
      </div>
    );
  }
};