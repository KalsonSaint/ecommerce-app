import React, { Component } from "react";

import FormInput from "../form-input/form-input";
import CustomButton from '../custom-button/custom-button'
import {signInWithGoogle} from '../../firebase/firebase-utils'

import "./login.scss";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
        <div className="login">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
            <FormInput
                name="email"
                type="email"
                handleChange={this.handleChange}
                value={this.state.email}
                label="email"
                required
            />
            <FormInput
                name="password"
                type="password"
                value={this.state.password}
                handleChange={this.handleChange}
                label="password"
                required
            />
            <CustomButton type="submit"> Login </CustomButton>
            <CustomButton onClick={signInWithGoogle}> Sign In With Google </CustomButton>
            </form>
        </div>
    );
  }
}

export default Login;
