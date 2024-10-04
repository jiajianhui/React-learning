import classNames from 'classnames'
import Count from '../Count'
import './index.scss'
import { useSelector, useDispatch } from 'react-redux'

// 导入增减reducer
import {
  increCount,
  decreCount,
  clearCount,
} from "../../store/modules/takeaway"; 

const Cart = () => {
  // 从store中获取数据
  // 1、获取添加商品的数量
  const {cartList} = useSelector(state => state.foods)
  // 2、计算总价
  const totalPrice = cartList.reduce((a, c) => {
    return a + c.price * c.count;
  }, 0)

  const cart = cartList;

  const dispatch = useDispatch()
  
  return (
    <div className="cartContainer">
      {/* 遮罩层 添加visible类名可以显示出来 */}
      <div
        className={classNames('cartOverlay')}
      />
      <div className="cart">
        {/* fill 添加fill类名可以切换购物车状态*/}
        {/* 购物车数量 */}
        <div className={classNames('icon', cartList.length > 0 && 'fill')}>
          {cartList.length > 0 && <div className="cartCornerMark">{cartList.length}</div>}
        </div>
        {/* 购物车价格 */}
        <div className="main">
          <div className="price">
            <span className="payableAmount">
              <span className="payableAmountUnit">¥</span>
              {/* 保留小数点后两位 */}
              {totalPrice.toFixed(2)}
            </span>
          </div>
          <span className="text">预估另需配送费 ¥5</span>
        </div>
        {/* 结算 or 起送 */}
        {cartList.length > 0 ? (
          <div className="goToPreview">去结算</div>
        ) : (
          <div className="minFee">¥20起送</div>
        )}
      </div>
      {/* 添加visible类名 div会显示出来 */}
      <div className={classNames('cartPanel', 'visible')}>
        <div className="header">
          <span className="text">购物车</span>
          <span className="clearCart" onClick={() => dispatch(clearCount())}>
            清空购物车
          </span>
        </div>

        {/* 购物车列表 */}
        <div className="scrollArea">
          {cart.map(item => {
            return (
              <div className="cartItem" key={item.id}>
                <img className="shopPic" src={item.picture} alt="" />
                <div className="main">
                  <div className="skuInfo">
                    <div className="name">{item.name}</div>
                  </div>
                  <div className="payableAmount">
                    <span className="yuan">¥</span>
                    <span className="price">{item.price}</span>
                  </div>
                </div>
                <div className="skuBtnWrapper btnGroup">
                  {/* Count组件 */}
                  <Count
                    count={item.count}
                    // 将对象参数传入reducer函数，即可找到对应的商品进行增减
                    onPlus={() => dispatch(increCount(item))}
                    onMinus={() => dispatch(decreCount(item))}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart
