import { combineReducers } from 'redux';
import { get, put, post } from '../../utils/request';

const initialState = {
    byType:'',
    listData:[]
}

// action type
export const types = {
    FETCH_ALL_LISTS:"GET/FETCH_ALL_LISTS",  // 获取文章列表
};

// action creators
export const actions = {
    // 获取文章列表
    fetchAllLists: () => {
        return (dispatch, getState) => {
            const data = [
                {
                    id:'001',
                    title:'博客项目搭建(1)',
                    createTime:760000,
                    type:'code',
                    content:'前端技术：react+redux 后端技术:koa2+mongodb',
                    coverImg:'@/asset/user.jpeg'
                }
            ]
            return dispatch(fetchListSuccess(data,1))            
        }
    }
}

// 获取文章列表成功
const fetchListSuccess = (post,len) => ({
    type:types.FETCH_ALL_LISTS,
    post,
    len
})


//reducers
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ALL_LISTS:
            return {...state,listData:action.post,len:action.len};
        default:
            return state;
    }
}

export default reducer;