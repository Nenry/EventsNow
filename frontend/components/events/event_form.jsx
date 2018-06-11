import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
class TextInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="event-label-input">
      <label>{this.props.label}</label>
      <input type="text" onChange={this.props.onChange} value={this.props.value} />
    </div>);
  }
}

class TextArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="event-label-input">
      <label>{this.props.label}</label>
      <textarea className='form-text-input' onChange={this.props.onChange} value={this.props.value} />
    </div>);
  }
}

class NumberInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="event-label-input">
      <label>{this.props.label}</label>
      <input type="number" onChange={this.props.onChange} value={this.props.value} />
    </div>);
  }
}

class DateInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="event-label-input">
      <label htmlFor="">{this.props.label}</label>
      <input type="date" onChange={this.props.onChange} value={this.props.value} />
    </div>);
  }

}



class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then((eventRes) => this.props.history.push(`/events/${eventRes.event.id}`));


  }


  render() {
    return (
      <div className="event-container">
        <div className="submit-button-container">
          <button className="submit-button" onClick={(e) => this.handleSubmit(e)} >{this.props.formType}</button>
        </div>
        <div className='event-form-header'>
          <div className='step-one'>1</div>
          <div className='event-details-msg'>Event Details</div>
        </div>

        <form className="event-form"  >
          <TextInput onChange={this.update('title')} value={this.state.title} label='Event Title'></TextInput>
          <TextArea onChange={this.update('body')} value={this.state.body} label='Event Description'></TextArea>
          <TextInput onChange={this.update('address')} value={this.state.address} label='Address'></TextInput>
          <TextInput onChange={this.update('city')} value={this.state.city} label='City'></TextInput>
          <TextInput onChange={this.update('state')} value={this.state.state} label='State'></TextInput>
          <DateInput onChange={this.update('date')} value={this.state.date} label='Date'></DateInput>
          <TextInput onChange={this.update('img_url')} value={this.state.img_url} label='Image URL'></TextInput>
          <TextInput onChange={this.update('category_id')} value={this.state.category_id} label="Category" />
          <NumberInput onChange={this.update('tickets_left')} value={this.tickets_left} label='Tickets' />
          <NumberInput onChange={this.update('price')} value={this.state.price} label="Price" />
          <div>
            <label>Starting Time</label>
            <input type="time" onChange={this.update('time_start')} value={this.state.time_start} label="Starting Time" />
            {/* <TextInput onChange={this.update('time_start')} value={this.state.time_start} label="Starting Time" /> */}
            <label>Ending Time</label>
            <input type="time" onChange={this.update('time_end')} value={this.state.time_end} label="Ending Time" />
          </div>

          {/* <label>Price</label>
          // <input type="number" onChange={this.update('price')} value={this.state.price} />
          // <label>Date</label>
          // <input type="date" onChange={this.update('date')} value={this.state.date} />
          // <div>
          //   <label>Time Start</label>
          //   <input type="text" onChange={this.update('time_start')} value={this.state.time_start} />
          //   <label>Time End</label>
          //   <input type="text" onChange={this.update('time_end')} value={this.state.time_end} />
          // </div> */}
          {/* <label>Title</label>
          <input type="text" onChange={this.update('title')} value={this.state.title} />
          <label>Body</label>
          <input type="text" onChange={this.update('body')} value={this.state.body} />
          <label>Address</label>
          <input type="text" onChange={this.update('address')} value={this.state.address} />
          <label>City</label>
          <input type="text" onChange={this.update('city')} value={this.state.city} />
          <label>State</label>
          <input type="text" onChange={this.update('state')} value={this.state.state} />
          <label>Category</label>
          <input type="text" onChange={this.update('category_id')} value={this.state.category_id} />
          <label>Image Link</label>
          <input type="text" onChange={this.update('img_url')} value={this.state.img_url} /> */}



        </form>



      </div>
    );
  }




}

export default withRouter(EventForm);