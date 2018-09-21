import home from './home';
import session from './session';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
//router 是用来把路径同步仓库中的
export default combineReducers({
    home,
    session,
    router:routerReducer
});