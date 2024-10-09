import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 注入路由
import {RouterProvider} from 'react-router-dom'
import router from './router';

// 导入主题配置文件
import './theme.css'

// 注入redux
import {Provider} from 'react-redux'
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);

