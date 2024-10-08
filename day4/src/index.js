import React from 'react';
import ReactDOM from 'react-dom/client';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// 1、创建router实例对象并配置路由对应关系
const router = createBrowserRouter([
  {
    path: "/login",
    element: <div>登录页</div>,
  },
  {
    path: "/article",
    element: <div>文章页</div>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 2、路由绑定 */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
