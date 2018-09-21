import * as types from '../action-types';
import {getSliders,getLessons} from '@/api/home';
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
    },
    getLessons(){
        return function(dispatch,getState){
            let {currentCategory,lessons:{offset,limit,loading}} = getState().home;
            if(!loading){//如果说已经在加载过程中了，再调用此方法会被忽略
                getLessons(currentCategory,offset,limit).then(function(payload){
                    dispatch({
                        type:types.SET_HOME_LESSONS,
                        payload//{list,hasMore}
                    });
                });
            }
            
        }
    }
}