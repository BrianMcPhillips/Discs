import React, { Component } from 'react'; 
import request from 'superagent';
import List from './List/List';

export default class ListPage extends Component {
  state = {
    discData: []
  }
  componentDidMount = async() => {
    const data = await request.get('http://localhost:3001/discs');
    this.setState({ discData: data.body})
    
  }
  render() {
    const { discData } = this.state;
    return (
      <div>
        <List data={discData}/>
      </div>
    )
  }
}
