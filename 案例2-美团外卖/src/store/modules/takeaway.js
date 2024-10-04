// 编写store

import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const foodsStore = createSlice({
    name: 'foods',

    // 1、初始化状态
    initialState: {
        // 商品列表
        foodsList: [],

        // 激活项
        activeIndex: 0,

        // 购物车列表
        cartList: []
    },

    // 2、状态修改方法（reducer函数）
    reducers: {
        // 修改商品列表方法
        setFoodsList(state, action) {
            state.foodsList = action.payload
        },

        // 修改激活项方法
        setIndex(state, action) {
            // 适用于整体替换
            state.activeIndex = action.payload
        },

        // 修改购物车列表方法
        addCart(state, action) {
            // 如果添加过，更新count；未添加过，则直接push
            const cart = state.cartList.find(item => item.id === action.payload.id)
            if (cart) {
                // find方法返回的是数组中的元素，对象
                cart.count++
            } else {
              // 适用于追加元素
              state.cartList.push(action.payload);
            }
        },

        // count增
        increCount(state, action) {
            // 找到要修改的count
            const item = state.cartList.find(item => item.id === action.payload.id)
            item.count++
        },
        // count减
        decreCount(state, action) {
            const item = state.cartList.find(item => item.id === action.payload.id)
            // 判断count是否为0
            if (item.count === 0) {
                return
            }
            item.count--
        },
        // 清空count
        clearCount(state) {
            state.cartList = []
        }
    }
})
// 3、解构出修改状态的方法；生成是action对象（Redux中修改store中数据的方法只有一种，就是提交（dispatch）action对象）
const { setFoodsList, setIndex, addCart, increCount, decreCount, clearCount } =
  foodsStore.actions;
// 4、异步获取方法
const fetchFoodsList = () => {
    return async (dispatch) => {
      // 异步获取数据
      const res = await axios.get("http://localhost:3004/takeaway");

      // 使用dispatch提交action
      dispatch(setFoodsList(res.data));
    };
}

// 5、导出异步获取数据的方法、更改activeIndex的方法
export {
  fetchFoodsList,
  setIndex,
  addCart,
  increCount,
  decreCount,
  clearCount,
};

// 6、默认导出该模块
const reducer = foodsStore.reducer  
export default reducer