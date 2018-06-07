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

  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  renderErrors(field) {
    return(
      <div>
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
          <label className="signup-message">
          Create an account below 
          </label>
          {/* {this.renderErrors()} */}
          
          <label className="signup-col" >
            Email
            <input type="text"  onChange={this.handleChange('email')} value={this.state.email} />
            {this.renderErrors("Email")}
          </label>

          <section className ="first-last-name">
            <label className="signup-col" >
              First Name
              <input type="text" name="firstname" onChange={this.handleChange('first_name')} value={this.state.first_name}/>
              {this.renderErrors("First")}
            </label>


            <label className="signup-col">
              Last Name
              <input type="text" name="lastname" onChange={this.handleChange('last_name')} value={this.state.last_name}/>
              {this.renderErrors("Last")}
            </label>
          </section>

          <label className="signup-col" >
            Password
            <input type="password" name="password" onChange={this.handleChange('password')} />
            {this.renderErrors("Password")}
          </label>

      
          <input className="signup-button" type="submit"  value="Create Account"/>
  
        </form>

      </div>

    );
  }
}


export default withRouter(SignUpForm);