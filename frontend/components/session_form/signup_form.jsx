import React from 'react';
import { withRouter } from 'react-router-dom';

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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>


        <form onSubmit={(e) => this.handleSubmit(e)}>
          Please {this.props.formType} below or {this.props.navLink}
          {this.renderErrors()}
          <label htmlFor="">
            Email
            <input type="text" name="email" onChange={this.handleChange('email')} value={this.state.email} />
          </label>
          <label htmlFor="">
            Password
            <input type="password" name="password" onChange={this.handleChange('password')} />
          </label>

          <label htmlFor="">
            First Name:
            <input type="text" name="firstname" onChange={this.handleChange('first_name')} value={this.state.first_name}/>
          </label>


          <label htmlFor="">
            Last Name:
            <input type="text" name="lastname" onChange={this.handleChange('last_name')} value={this.state.last_name}/>
          </label>

          <input type="submit" value="Sign Up" />
        </form>

      </div>

    );
  }
}


export default withRouter(SignUpForm);