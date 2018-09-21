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
                dispatch({
                    type:types.SET_HOME_LESSONS_LOADING,
                    payload:true
                });
                getLessons(currentCategory,offset,limit).then(function(payload){
                    dispatch({
                        type:types.SET_HOME_LESSONS,
                        payload//{list,hasMore}
                    });
                });
            }
            
        }
    },
    //重新加载数据，以前的历史数据全部清空
    refreshLessons(){
        return function(dispatch,getState){
            let {currentCategory,lessons:{limit,loading}} = getState().home;
            if(!loading){//如果说已经在加载过程中了，再调用此方法会被忽略
                dispatch({
                    type:types.SET_HOME_LESSONS_LOADING,
                    payload:true
                });
                getLessons(currentCategory,0,limit).then(function(payload){
                    dispatch({
                        type:types.REFRESH_HOME_LESSONS,
                        payload//{list,hasMore}
                    });
                });
            }
            
        }
    }
}