import React from 'react'
import Child from './child'

const parent = (props) => {
    console.log(props)
    return( 
        <div>
            <Child {...props} xyz="xrt" />
        </div>
    )
}

export default parent;