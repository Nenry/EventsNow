import React from 'react';
import { withRouter } from 'react-router-dom';
class TextInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="event-label-input">
      <label>{this.props.label}</label>
      <input type="text" onChange={this.props.onChange} value={this.props.value} placeholder={this.props.placeholder} />
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
      <textarea rows="10" cols="20" wrap="hard" className='form-text-input' onChange={this.props.onChange} value={this.props.value} />
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

  renderErrors(field) {
    return (
      <div className="session-errors">
        {this.props.errors.find(error => error.includes(field))}
      </div>
    );

  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state);
    // console.log(this.props.session);
    // console.log(this.props.currentUser);
    // if (this.state.time_start !== "" && this.state.time_end !== "")
      this.props.action(this.state).then((eventRes) => this.props.history.push(`/events/${eventRes.event.id}`));


  }





  render() {
    return (
      <div className="event-container">
        <div className="top-bar">
          {/* <button className="submit-button" onClick={(e) => this.handleSubmit(e)} >{this.props.formType}</button> */}
        </div>
        <div className='event-form-header'>
          <div className='step-one'>1</div>
          <div className='event-details-msg'>Event Details</div>
        </div>

        <form className="event-form"  >
          <TextInput onChange={this.update('title')} value={this.state.title} label='Event Title'></TextInput>
          {this.renderErrors("Title")}
          <TextArea onChange={this.update('body')} value={this.state.body} label='Event Body'></TextArea>
          {this.renderErrors("Body")}
          <TextInput onChange={this.update('address')} value={this.state.address} label='Address'></TextInput>
          {this.renderErrors("Address")}
          <TextInput onChange={this.update('city')} value={this.state.city} label='City'></TextInput>
          {this.renderErrors("City")}
          <TextInput onChange={this.update('state')} value={this.state.state} label='State'></TextInput>
          {this.renderErrors("State")}
          <DateInput onChange={this.update('date')} value={this.state.date} label='Date'></DateInput>
          {this.renderErrors("Date")}
          {this.renderErrors("date")}
          <TextInput onChange={this.update('img_url')} value={this.state.img_url} label='Image URL' placeholder='Not Required'></TextInput>
          {this.renderErrors("Img")}
          {/* <TextInput onChange={this.update('category')} value={this.state.category} label="Category" />
          {this.renderErrors("Category")} */}
          <NumberInput onChange={this.update('total_tickets')} value={this.total_tickets} label='Tickets' />
          {this.renderErrors("Total tickets")}
          <NumberInput onChange={this.update('price')} value={this.state.price} label="Price" />
          {this.renderErrors("Price")}
          <div>
            <label>Starting Time</label>
            <input type="time" onChange={this.update('time_start')} value={this.state.time_start} label="Starting Time" />
            {this.props.errors.find(error => error.includes('Time start')) ? <div className="session-errors" >Ending time can't be blank</div> : <div></div>}
            {/* {this.renderErrors("Time start")} */}
            {/* <TextInput onChange={this.update('time_start')} value={this.state.time_start} label="Starting Time" /> */}
            <label>Ending Time</label>
            <input type="time" onChange={this.update('time_end')} value={this.state.time_end} label="Ending Time" />
            {this.props.errors.find(error => error.includes('Time end')) ? <div className="session-errors" >Starting time can't be blank</div> : <div></div>}
            {this.renderErrors("end")}
          </div>

          <select onChange={this.update('category_id')} name="Categories">
            <option value="1"> Select a category</option>
            <option value="2">Music</option>
            <option value="3">Food & Drinks</option>
            <option value="4">Classes</option>
            <option value="5">Arts</option>
            <option value="6">Parties</option>
            <option value="7">Sport & Wellness</option>
            <option value="8">Networking</option>
          </select>

          {/* <option value="1" >Se lect a category</option>
          <option value="2" >Auto, Boat & Air</option>
          <option value="3">Business</option>
          <option value="4">Charity Causes</option>
          <option value="5">Community & Culture</option>
          <option value="6">Family & Education</option>
          <option value="7">Fashion & Beauty</option>
          <option value="8">Film, Media & Entertainment</option>
          <option value="9">Food & Drink</option>
          <option value="10">Government & Politics</option>
          <option value="11">Health & Wellness</option>
          <option value="12">Hobbies & Special Interest</option>
          <option value="13">Home & Lifestyle</option>
          <option value="14">Music</option>
          <option value="15">Other</option>
          <option value="16">Performing & Visual Arts</option>
          <option value="17">Religion & Spirituality</option>
          <option value="18">School Activities</option>
          <option value="19">Science & Technology</option>
          <option value="20">Seasonal & Holiday</option>
          <option value="21">Sport & Fitness</option> */}
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


          <div className="submit-button-container">
            <button className="submit-button" onClick={(e) => this.handleSubmit(e)} >{this.props.formType}</button>
          </div>
        </form>



      </div>
    );
  }




}

export default withRouter(EventForm);
