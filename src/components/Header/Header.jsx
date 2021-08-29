import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <h1>Disc Golf Bag</h1>
        <div className={styles.links}>
          <Link to='/list'>Home</Link>
          <Link to='/create'>Create Page</Link>
        </div>
      </div>
    )
  }
}
