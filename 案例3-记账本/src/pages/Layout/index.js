import {Outlet} from 'react-router-dom'

// 导入组件
import {Button} from 'antd-mobile'

const Layout = () => {
    return(
        <div>

            {/* 二级路由 */}
            <Outlet />

            Layout
            <Button color='primary'>按钮</Button>
        </div>
    )
}

export default Layout