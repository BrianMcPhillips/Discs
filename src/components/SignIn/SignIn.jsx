import React, { Component } from 'react';
import styles from './SignIn.modules.css';

export default class SignIn extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Please Login</h1>
        <form>
          <div className={styles.formControl}>
            <input type="text" required/>
            <label>Email</label>
          </div>
          <div className={styles.formControl}>
            <input type="password" required/>
          </div>
          <button className={styles.btn}></button>
          <p className={styles.text}>
            Don't have an account?
            <button>Register</button>
            </p>
        </form>
        
      </div>
    )
  }
}
