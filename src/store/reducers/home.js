import * as types from '../action-types';
let initState = {
    currentCategory:'all'
}
export default function(state=initState,action){
    switch(action.type){
        case types.CHANGE_CURRENT_CATEGORY:
           return {...state,currentCategory:action.payload};
        default:
          return state;   
    }
}