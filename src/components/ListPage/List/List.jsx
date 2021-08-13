import React, { Component } from 'react';
import Item from './Item/Item';

export default class List extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {
          data.map(item => <Item key={item.name} data={item}/>)
        }
      </div>
    )
  }
}
