// 编写store

import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const foodsStore = createSlice({
    name: 'foods',

    // 1、初始化状态
    initialState: {
        // 商品列表
        foodsList: []
    },

    // 2、状态修改方法
    reducers: {
        // 同步修改方法
        setFoodsList(state, action) {
            state.foodsList = action.payload
        }
    }
})
// 3、解构出修改状态的方法；生成是action对象（Redux中修改store中数据的方法只有一种，就是提交（dispatch）action对象）
const {setFoodsList} = foodsStore.actions
// 4、异步获取方法
const fetchFoodsList = () => {
    return async (dispatch) => {
      // 异步获取数据
      const res = await axios.get("http://localhost:3004/takeaway");

      // 使用dispatch提交action
      dispatch(setFoodsList(res.data));
    };
}

// 5、导出异步获取方法
export { fetchFoodsList };

// 6、默认导出该模块
const reducer = foodsStore.reducer  
export default reducer