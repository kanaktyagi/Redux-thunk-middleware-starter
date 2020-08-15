import React, {Component} from 'react';
import User from './users/User'
import './App.css';

class Child extends Component {
  state={
      name: 'Abhishek'
  }
  constructor() {
    super()
    this.state={
      name:'Kanak'
    }
    console.log("Constructor of Child")
  }

  componentWillMount() {
    console.log("inside component Will mount child")
  }

  componentDidMount() {
    console.log("inside component Did mount child")
  }
  componentWillReceiveProps() {
      console.log("inside component will recieve props  child")
  }
  
  render(){
    return(
  <div className="App">
  {this.state.name}
  {console.log("render of child")}
  </div>
    );
  }
}

export default Child; 
