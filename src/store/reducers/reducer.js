import { loading } from "../actions/actions";

const initialState = {
    age: 21,
    name: 'kanak',
    loading: false,
    history: []
};

const reducer = (state = initialState, action ) => {
    const newState = { ...state};
     switch(action.type) {
        
         case "AGE_UP" :
             //newState.age +=action.value
             return {
                 ...state,
                 age: state.age + action.value,
                 history: state.history.concat({id: Math.random(), age: state.age + action.value}),
                 loading: false
             }
         case "AGE_DOWN" :
             return {
                 ...state,
                 age: state.age - action.value,
                 history: state.history.concat({id: Math.random(), age: state.age - action.value})
             }
         case "LOADING" : 
             return {
                 ...state,
                 loading: true
             }    
        case "DEL_ITEM" :
            return {
                ...state,
                history: state.history.filter(el => el.id !== action.value )
            }   
             default :{
                 return {
                     ...state,
                     age: state.age,
                     history: state.history
                 }
             }
     }
};

export default reducer