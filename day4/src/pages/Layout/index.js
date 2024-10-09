import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
      <div>
        <div>Layout</div>

        <Link to={"/"}>看板</Link>
        <br />
        <Link to={"/info"}>信息</Link>

        {/* 二级路由出口 */}
        <Outlet />
      </div>
    );
}

export default Layout