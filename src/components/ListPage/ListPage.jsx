import React, { Component } from 'react'; 
import List from './List/List';
import { fetchDiscs } from '../../services/discs-api';
import styles from './ListPage.module.css';

export default class ListPage extends Component {
  //Set default state
  state = {
    discData: [],
  }

  //Get data from backend and set it to state
  componentDidMount = async() => {
    if(!this.props.token) {
      this.props.history.push('/')
    } else {
    const data = await fetchDiscs(this.props.token);
    this.setState({ discData: data.body });
    } 
  }
  
  render() {
    //Destructure state
    const { discData } = this.state;
    return (
      <div className={styles.list}>
        <List data={discData}/>
      </div>
    )
  }
}
