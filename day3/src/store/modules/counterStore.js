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
  },
});

// 解构actions
const {inscrement, decrement} = counterStore.actions
// 获取reducer
const reducer = counterStore.reducer

// 导出
export { inscrement, decrement };
export default reducer