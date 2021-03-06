import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { email: "", password: "" };
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
    <Redirect to='/' />;
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.processForm({ email: "User@Demo.com", password: "password" });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }



  renderErrors(field) {
    return (
      <div className="session-errors">
        {this.props.errors.find(error => error.includes(field))}
      </div>
    );

  }

  render() {
    return (
      <div className="signup-form-div">


        <form className="signup-form" onSubmit={(e) => this.handleSubmit(e)}>
          <section className="logo">E</section>

          <h2 className="sign-title-welcome">Welcome</h2>
          <h3 className="signup-message">
            Please {this.props.formType} below or {this.props.navLink}
          </h3>
          <label className="signup-col">
            {this.renderErrors("Invalid")}
            Email
        <input className="session-inputs" type="text" name="email" onChange={this.handleChange('email')} />
          </label>
          <label className="signup-col">
            Password
        <input className="session-inputs" type="password" onChange={this.handleChange('password')} />
          </label>

          <input className="signup-button" type="submit" value="Login" />
          <button onClick={(e) => this.handleDemo(e)} className="demo-button">Demo Login</button>
        </form>

      </div>

    );
  }
}


export default withRouter(SessionForm);