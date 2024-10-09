import {Outlet} from 'react-router-dom'

const Layout = () => {
    return(
        <div>

            {/* 二级路由 */}
            <Outlet />
            
            Layout
        </div>
    )
}

export default Layout