import { createBrowserRouter } from "react-router-dom";

// 1、导入组件
import Login from '../pages/Login'
import Article from '../pages/Article'
import List from "../pages/List";

// 2、创建router实例对象并配置路由对应关系
const router = createBrowserRouter([
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