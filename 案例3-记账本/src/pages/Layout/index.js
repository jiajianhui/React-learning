import {Outlet} from 'react-router-dom'
import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
// 导入异步获取数据的方法
import { getBillList } from '../../store/modules/billStore'
// 导入组件
import {TabBar} from 'antd-mobile'
// 导入css
import './index.scss'

// 导入图标
import {
    AddCircleOutline,
    CalculatorOutline,
    BillOutline
} from 'antd-mobile-icons'

const Layout = () => {
    const dispatch = useDispatch()
    // 使用useEffect获取数据
    useEffect(() => {
        dispatch(getBillList());
    }, [dispatch])

    // 定义tabs
    const tabs = [
      {
        key: "",
        title: "月度账单",
        icon: <BillOutline />,
      },
      {
        key: "new",
        title: "记账",
        icon: <AddCircleOutline />,
      },
      {
        key: "year",
        title: "年度账单",
        icon: <CalculatorOutline />,
      },
    ];
    // tab路由切换函数
    const navigate = useNavigate();
    // onChange回调——切换标签时触发该函数，并传递一个参数，该参数默认为标签中的key
    const switchRoute = (path) => {
        navigate(path)
        console.log(path);
    }

    return(
        <div className='layout'>

            <div className='container'>
                {/* 二级路由 */}
                <Outlet />
            </div>

            {/* tabbar */}
            <div className='footer'>
                <TabBar onChange={switchRoute}>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title}>
                    </TabBar.Item>
                ))}
            </TabBar>
            </div>
        </div>
    )
}

export default Layout