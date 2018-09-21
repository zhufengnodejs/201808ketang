import * as types from '../action-types';
import {getSliders} from '@/api/home';
export default {
    changeCurrentCategory(type){
        return {type:types.CHANGE_CURRENT_CATEGORY,payload:type};
    },
    getSliders(){
        //Actions must be plain objects. Use custom middleware for async actions
        // dispatch(action);
        return function(dispatch,getState){
            //调用后台接口，得到返回值，再派发真正action
            getSliders().then(sliders=>{
                dispatch({
                    type:types.SET_HOME_SLIDERS,
                    payload:sliders
                });
            });
        }
    }
}