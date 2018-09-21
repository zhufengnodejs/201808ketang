import {get,post} from './index';
// {username,password}
export function reg(user){
  return post('/reg',user);
}
export function login(user){
  return post('/login',user);
}