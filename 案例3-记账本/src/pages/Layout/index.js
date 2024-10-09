import {Outlet} from 'react-router-dom'
import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
// 导入异步获取数据的方法
import { getBillList } from '../../store/modules/billStore'
// 导入组件
import {Button} from 'antd-mobile'

const Layout = () => {
    const dispatch = useDispatch()
    // 使用useEffect获取数据
    useEffect(() => {
        dispatch(getBillList());
    }, [dispatch])
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