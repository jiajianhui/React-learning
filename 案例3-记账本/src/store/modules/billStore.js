// 账单列表

import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const billStore = createSlice({
    name:'bill',

    // 数据初始化
    initialState: {
        billList: []
    },

    reducers: {
        // 同步修改方法
        setBillList(state, action) {
            state.billList = action.payload
        }
    }
})

// 解构出setBillList
const {setBillList} = billStore.actions

// 异步获取列表方法
const getBillList = () => {
    return async (dispatch) => {
        // 异步逻辑
        const res = await axios.get("http://localhost:8888/ka");
        // 触发reducer
        dispatch(setBillList(res.data))
    }
}

// 导出异步方法
export {getBillList}



// 导出模块
const reducer = billStore.reducer
export default reducer