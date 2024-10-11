// 导入组件
import { NavBar, DatePicker } from "antd-mobile";

// 导入样式
import './index.scss'

import { useState } from "react";
import classnames from 'classnames'
import dayjs from "dayjs";

const Month = () => {

  // 切换时间选择框
  // 1、使用useState控制显示和隐藏
  // 2、配置确认、取消相关操作
  // 3、点击时间区域，控制箭头动画
  const [dateVisible, setDateVisible] = useState(false)
  // 确认函数
  const onConfirm = (date) => {
    setDateVisible(false)
    // 赋值时间
    setCurrentDate(dayjs(date).format('YYYY-MM'))
  }

  // 将datePicker的日期与时间区域联动
  // 1、使用useState管理时间
  // 2、在确认函数中将将选择的时间赋值给useState
  // 3、使用dayjs插件将时间格式化
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs(new Date()).format('YYYY-MM')
  }) 

  return (
    <div className="monthBox">
      <NavBar back={null}>月度账单</NavBar>

      <div className="header">

        {/* 时间切换区域 */}
        <div className="date" onClick={() => setDateVisible(true)}>
          <span className="text">{currentDate}月账单</span>
          <span className={classnames("arrow", dateVisible && "expand")}></span>
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

      {/* 时间选择器组件 */}
      <DatePicker
        title="时间选择"
        visible={dateVisible}
        onCancel={() => setDateVisible(false)}
        onConfirm={onConfirm}
        max={new Date()}
      />
    </div>
  );
};

export default Month;
