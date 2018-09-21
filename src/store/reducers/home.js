import * as types from '../action-types';
let initState = {
    currentCategory:'all',
    sliders:[],//此处存放轮播图的数据
    lessons:{//定的是首页的课程列表的数据结构
        list:[],//课程对象的数组
        hasMore:true,//后面是否还有数据
        offset:0,//偏移量
        limit:5,//每页多少条
        loading:false,//是否正在加载
    }
}
export default function(state=initState,action){
    switch(action.type){
        case types.CHANGE_CURRENT_CATEGORY:
           return {...state,currentCategory:action.payload};
        case types.SET_HOME_SLIDERS:
           return {...state,sliders:action.payload};
        default:
          return state;   
    }
}