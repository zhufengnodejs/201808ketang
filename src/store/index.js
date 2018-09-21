import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
//logger用来在动作发生的前后打印日志
import logger from 'redux-logger';
//使仓库可以接收函数作为action
import thunk from 'redux-thunk';
//使用中间件的目的就是为了能够向仓库派发函数，有了中间件之后呢，派发给仓库的函数会得到执行
let store = createStore(reducers,applyMiddleware(logger,thunk));
window._store = store;
export default store;