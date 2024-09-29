import { configureStore } from "@reduxjs/toolkit";

// 导入子模块
import counterReducer from './modules/counterStore'

// 创建根store，组合子模块
const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default store