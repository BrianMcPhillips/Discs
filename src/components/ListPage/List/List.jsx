import React, { Component } from 'react';
import Item from './Item/Item';
import styles from './List.module.css';

export default class List extends Component {
  render() {
    //Destructure Props
    const { data } = this.props;
    return (
      // Map over props data to dynamically render items to page
      <div className={styles.list}>
        {
          data.map(item => <Item key={item.name} data={item}/>)
        }
      </div>
    )
  }
}
