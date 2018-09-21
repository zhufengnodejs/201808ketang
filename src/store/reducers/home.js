import * as types from '../action-types';
let initState = {
    currentCategory:'all'，
    sliders:[]//此处存放轮播图的数据
}
export default function(state=initState,action){
    switch(action.type){
        case types.CHANGE_CURRENT_CATEGORY:
           return {...state,currentCategory:action.payload};
        default:
          return state;   
    }
}