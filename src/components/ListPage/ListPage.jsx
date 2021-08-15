import React, { Component } from 'react'; 
import List from './List/List';
import { fetchDiscs, fetchDiscById, createDisc } from '../../services/discs-api';

export default class ListPage extends Component {
  //Set default state
  state = {
    discData: []
  }

  //Get data from backend and set it to state
  componentDidMount = async() => {
    const data = await fetchDiscs();
    // const newDisc = await createDisc({
    //   brand: 'Innova',
    //   name: 'PoleCat',
    //   speed: 2,
    //   image: 'https://m.media-amazon.com/images/I/61Mtc6A+g0L._AC_SL1001_.jpg'
    // })
    this.setState({ discData: data.body})
    
  }
  render() {
    //Destructure state
    const { discData } = this.state;
    return (
      <div>
        <List data={discData}/>
      </div>
    )
  }
}
