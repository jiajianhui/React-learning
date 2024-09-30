// 组合模块
import { configureStore } from "@reduxjs/toolkit";

// 导入子模块
import foodsReducer from './modules/takeaway'

const store = configureStore({
    reducer: {
        foods: foodsReducer
    }
})

export default store