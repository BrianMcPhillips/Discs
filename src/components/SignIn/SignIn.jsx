import React, { Component } from 'react';
import styles from './SignIn.module.css';
import { signUp, signIn } from '../../services/discs-api';

export default class SignIn extends Component {
  state = {
    switchState: 'Off',
    email: '',
    password: ''
  }

  handleSwitchOn = () => {
    this.setState({ switchState: 'On' });
  }
  handleSwitchOff = () => {
    this.setState({ switchState: 'Off' });
  }
  handleSignUp = async(e) => {
    e.preventDefault();
    const data = await signUp({
      email: this.state.email,
      password: this.state.password
    });
    localStorage.setItem('token', data.body.token);
    this.props.history.push('/list');
  }
  handleEmail = (e) => {
    this.setState({ email: e.target.value })
  }
  handlePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  render() {
    const {
      switchState
    } = this.state;
    return (
      <div className={styles.container}>
        {
          switchState === 'Off' &&
            <div>
              <h1>Please Login</h1>
              <form>
                <div className={styles.formControl}>
                  <input type="text" required/>
                  <label>Email</label>
                </div>
                <div className={styles.formControl}>
                  <input type="password" required/>
                  <label>Password</label>
                </div>
                <button className={styles.btn}>Login</button>
                <p className={styles.text}>
                  Don't have an account?
                  <button onClick={this.handleSwitchOn}>Register</button>
                </p>
              </form>
            </div>
        }
        {
          switchState === 'On' && 
            <div>
              <h1>Sign Up</h1>
              <form onSubmit={this.handleSignUp}>
                <div className={styles.formControl}>
                  <input onChange={this.handleEmail}type="text" required/>
                  <label>Email</label>
                </div>
                <div className={styles.formControl}>
                  <input onChange={this.handlePassword} type="password" required/>
                  <label>Password</label>
                </div>
                <button className={styles.btn}>Sign Up</button>
                <p className={styles.text}>
                  Already have an account?
                  <button onClick={this.handleSwitchOff}>Sign In</button>
                </p>
              </form>
            </div>
        }
      </div>
    )
  }
}
