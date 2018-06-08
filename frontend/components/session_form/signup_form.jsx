import React from 'react';
import { withRouter } from 'react-router-dom';
import { uptime } from 'os';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { email: "", password: "" , first_name: "", last_name: ""};
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }




  renderErrors(field) {
    return(
      <div className="session-errors">
        {this.props.errors.find(error => error.includes(field))}
      </div>
    );
   
  }

  render() {
    return (
      <div className="signup-form-div">


        <form  className="signup-form" onSubmit={(e) => this.handleSubmit(e)}>
          <section className="logo">E</section>
          <h2 className="sign-title">Welcome</h2>
          <h3 className="signup-message">
          Create an account. 
          </h3>
          {/* {this.renderErrors()} */}
          
          <label className="signup-col" >
            Email
            <input className="session-inputs" type="text"  onChange={this.handleChange('email')} value={this.state.email} />
            {this.renderErrors("Email")}
          </label>

          <section className ="first-last-name">
            <label className="" >
              First Name
              <input className="sign-col-firstname-input" type="text" name="firstname" onChange={this.handleChange('first_name')} value={this.state.first_name}/>
              {this.renderErrors("First")}
            </label>


            <label className="signup-col">
              Last Name
              <input className ="sign-col-last-name-input" type="text" name="lastname" onChange={this.handleChange('last_name')} value={this.state.last_name}/>
              {this.renderErrors("Last")}
            </label>
          </section>

          <label className="signup-col" >
            Password
            <input className="session-inputs" type="password" name="password" onChange={this.handleChange('password')} />
            {this.renderErrors("Password")}
          </label>

      
          <input className="signup-button" type="submit"  value="Sign Up"/>
          
        </form>

      </div>

    );
  }
}


export default withRouter(SignUpForm);