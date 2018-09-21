import * as types from '../action-types';
import {reg,login} from '@/api/session';
import {push} from 'react-router-redux';
export default {
    reg(user){
       return function(dispatch,getState){
         reg(user).then(payload=>{
             dispatch({
                 type:types.SET_SESSION,
                 payload
             });
             //注册成功之后，去登录页登录
             dispatch(push('/login'));
         });
       }
    },
    login(user){
        return function(dispatch,getState){
            login(user).then(payload=>{
              dispatch({
                  type:types.SET_SESSION,
                  payload
              });
              if(!payload.error){
                dispatch(push('/profile'));
              }
          });
        }
     }
}