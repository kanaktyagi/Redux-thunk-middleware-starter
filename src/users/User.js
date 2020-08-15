import React from 'react'

const User = (props) => {
  return(<div> <div> <li>
    <span>name: {props.children} | age: {props.age}</span>
    <input onChange={props.changeEvent} value={props.children}/>
    <button onClick={props.deleteUser}>delete</button>
    </li>
    </div>
    <div>
    <input type="text" onChange={props.addUser}></input>
    <button onClick={props.addUser}>Add</button>
    </div></div>
    )
}

export default User