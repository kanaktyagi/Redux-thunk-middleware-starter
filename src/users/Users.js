import React, {Component} from 'react';
import User from './User';

class Users extends Component {
    state= {
        users:[
            {name:"John", age:20},
            {name:"Jill", age:30},
            {name:"Peter", age:40},
        ],
        title: "Users List"
    }
    makeMeYounger = () => {
                const newState = this.state.users.map((user)=>{
                    const tempUser = user;
                    if(tempUser.age -=10)                 
                    return tempUser;
                }) 
                this.setState({
                    newState
                })
    }
    render() {
        return (<div>
            <button onClick={this.makeMeYounger}>Make us 10 year younger</button>
            <br/>
            <h1>{this.state.title}</h1>
            {
                this.state.users.map((user)=> {
                    return <User age={user.age}>{user.name}</User>
                })
            }
            </div>)
    }
 }

 export default Users