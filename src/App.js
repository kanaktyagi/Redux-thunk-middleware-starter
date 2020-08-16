import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import * as actionCreator from './store/actions/actions'

class App extends Component { 
  render() {
    return(
      <div className="App">
      <div className="age "><span>Age:{this.props.age}</span></div> 
      <br/>
      <button onClick={this.props.onAgeUp}> Age Up:</button>
      <button onClick={this.props.onAgeDown}> Age Down:</button>
      <br/>
      <hr/>
      <div> History:</div>
      <ul>
      {
        this.props.history.map((his) => {
         return( <li><button key={his.id} onClick={() => this.props.onDelItem(his.id)}>{his.age}</button></li>)
        })
      }
      </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state", state)
  return {
    age: state.age,
    history: state.history,
    delete: state.delete
}
}

const mapDispatchToProps =(dispatch) => {
  return {
    onAgeUp: () => dispatch(actionCreator.ageUp(1)),
    onAgeDown: () => dispatch(actionCreator.ageDown(1)),
    onDelItem: (id) => dispatch(actionCreator.delItem(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (App); 
