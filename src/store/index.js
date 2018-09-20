import {createStore} from 'redux';
import reducers from './reducers';
let store = createStore(reducers);
window._store = store;
export default store;