// 组合模块
import { configureStore } from "@reduxjs/toolkit";
import billReducer from './modules/billStore'

const store = configureStore({
    reducer: {
        bill: billReducer
    }
})

// 导出
export default store