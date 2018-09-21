import * as types from '../action-types';
let initState = {
    user:null,//存放登录成功后的用户数据
    success:null,//成功的消息提示
    error:null//失败的消息提示
}
export default function(state=initState,action){
    switch(action.type){
        case types.SET_SESSION:
           return {...initState,...action.payload};
        default:
           return state;   
    }
}