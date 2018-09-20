import * as types from '../action-types';
export default {
    changeCurrentCategory(type){
        return {type:types.CHANGE_CURRENT_CATEGORY,payload:type};
    }
}