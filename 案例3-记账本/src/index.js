import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 注入路由
import {RouterProvider} from 'react-router-dom'
import router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}></RouterProvider>
);

