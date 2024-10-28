// 账单列表

import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const billStore = createSlice({
    name:'bill',

    // 数据初始化
    initialState: {
        billList: []
    },
    // 同步修改方法
    reducers: {
        
        // 初始化相关方法
        setBillList(state, action) {
            state.billList = action.payload
        },

        // 添加方法
        addBill(state, action) {
            state.billList.push(action.payload)
        }
    }
})

// 解构出setBillList
const {setBillList, addBill} = billStore.actions

// 异步获取列表方法
const getBillList = () => {
    return async (dispatch) => {
        // 异步逻辑
        const res = await axios.get("http://localhost:8888/ka");
        // 触发reducer
        dispatch(setBillList(res.data))
    }
}

// 异步新增账单方法
const addBillList = (data) => {
    return async(dispatch) => {
        const res = await axios.post("http://localhost:8888/ka", data);
        dispatch(addBill(res.data))
    }
}

// 导出异步方法
export {getBillList, addBillList}



// 导出模块
const reducer = billStore.reducer
export default reducer