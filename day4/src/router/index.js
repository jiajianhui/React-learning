import { createBrowserRouter } from "react-router-dom";

// 1、导入组件
import Login from '../pages/Login'
import Article from '../pages/Article'
import List from "../pages/List";
import Layout from "../pages/Layout";
import Board from "../pages/Board";
import Info from "../pages/Info";

// 2、创建router实例对象并配置路由对应关系
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    // 配置二级路由
    children: [
      {
        // 配置为默认二级路由
        index: true,
        element: <Board />,
      },
      {
        path: "/info",
        element: <Info />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/article",
    element: <Article />,
  },
  {
    // 配合params传参
    path: "/list/:id/:name",
    element: <List />,
  },
]);

// 3、导出router
export default router