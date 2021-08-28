import React, { Component } from 'react';
import styles from './SignIn.module.css';

export default class SignIn extends Component {
  state = {
    switchState: 'Off'
  }

  handleSwitchOn = () => {
    this.setState({ switchState: 'On' });
  }
  handleSwitchOff = () => {
    this.setState({ switchState: 'Off' });
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
              <h1>Register</h1>
              <form>
                <div className={styles.formControl}>
                  <input type="text" required/>
                  <label>Email</label>
                </div>
                <div className={styles.formControl}>
                  <input type="password" required/>
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
