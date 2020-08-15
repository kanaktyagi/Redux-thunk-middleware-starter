import React from 'react';
import commonStyles from './../styles/commonStyles';


const translateProps = (props) => {
    console.log("props", props)
    let _style = {...commonStyles.default}
    if(props.disable) {
        console.log("inside")
        _style ={ ..._style, ...commonStyles.disable}
    }
    const newProps = {...props, style: _style}
    return newProps
}
export default (WrappedComponent) => {
 return function wrapperRender(args) {
  return WrappedComponent(translateProps(args))
 }
}