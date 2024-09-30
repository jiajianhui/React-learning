import { createSlice } from '@reduxjs/toolkit'

const counterStore = createSlice({
  name: "counter",

  // 初始化state
  initialState: {
    count: 0,
  },

  // 修改state的方法
  reducers: {
    inscrement(state) {
      state.count++;
    },
    decrement(state) {
      state.count++;
    },

    // 提交action传参
    addToNum(state, action) {
      state.count += action.payload;  //参数会被传递到action对象的payload属性上
    },
  },
});

// 解构actions
const { inscrement, decrement, addToNum } = counterStore.actions;
// 获取reducer
const reducer = counterStore.reducer

// 导出action对象
export { inscrement, decrement, addToNum };

// 导出该模块
export default reducer