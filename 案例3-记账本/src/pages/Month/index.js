// 导入组件
import { NavBar } from "antd-mobile";

// 导入样式
import './index.scss'

const Month = () => {
  return (
    <div className="monthBox">
      <NavBar back={null}>月度账单</NavBar>

      <div className="header">
        {/* 时间切换区域 */}
        <div className="date">
          <span className="text">2024 | 10月账单</span>
          <span className="arrow expand"></span>
        </div>

        {/* 统计区域 */}
        <div className="overview">
          <div className="item">
            <span className="money">180.0</span>
            <span className="type">支出</span>
          </div>
          <div className="item">
            <span className="money">200.0</span>
            <span className="type">收入</span>
          </div>
          <div className="item">
            <span className="money">20.0</span>
            <span className="type">结余</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Month;
