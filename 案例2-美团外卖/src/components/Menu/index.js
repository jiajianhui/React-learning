import classNames from 'classnames'
import './index.scss'

// 导入useDispatch（生成触发action的dispatch函数）、setIndex（更改state的action）
import { useDispatch } from 'react-redux'
import { setIndex } from '../../store/modules/takeaway'

// 使用useSelector获取store中的数据
import { useSelector } from 'react-redux'

const Menu = ({foodsList}) => {
  // 将foodsList更改为相对简单的数组
  const menus = foodsList.map((item) => ({ tag: item.tag, name: item.name }));

  // 生成dispatch函数
  const dispatch = useDispatch();
  // 获取store中的数据
  const { activeIndex } = useSelector((state) => state.foods);

  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            onClick={() => dispatch(setIndex(index))}
            key={item.tag}
            className={classNames(
              "list-menu-item",
              // store中的数据与每一项的index做对比，若相同，则添加active类名
              activeIndex === index && "active"
            )}
          >
            {item.name}
          </div>
        );
      })}
    </nav>
  );
}

export default Menu
