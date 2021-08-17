import React, { Component } from 'react';
import styles from './Item.module.css';
import { Link } from 'react-router-dom';

export default class Item extends Component {
  render() {
    //Destructure props
    const { 
      data: {
        brand,
        name,
        speed,
        image
      } 
    } = this.props;
    return (
      //List of relevant info for each item being rendered to page
      <div className={styles.item}>
        <Link to={`/detail/${name}`}>
          <img src={image} alt={name} />
        </Link>
        <h3>{name}</h3>
        <h5>{brand}</h5>
        <p>{speed}</p>
      </div>
    )
  }
}
