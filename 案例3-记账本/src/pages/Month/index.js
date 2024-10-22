// 导入组件
import { NavBar, DatePicker } from "antd-mobile";

// 导入样式
import './index.scss'

import { useEffect, useMemo, useState } from "react";
import classnames from 'classnames'
import dayjs from "dayjs";
import {useSelector} from 'react-redux'
import _ from 'lodash'

// 导入 每日统计组件
import DayBill from "./compoments/DayBill";

const Month = () => {

  // 切换时间选择框
  // 1、使用useState控制显示和隐藏
  // 2、配置确认、取消相关操作
  // 3、点击时间区域，控制箭头动画
  const [dateVisible, setDateVisible] = useState(false)
  // 确认函数
  const onConfirm = (date) => {
    setDateVisible(false);
    // 将选择的时间格式化
    const formatDate = dayjs(date).format("YYYY-MM");
    // 进行赋值
    setCurrentDate(formatDate);

    // 拿到当前月份中的数据——对象取值
    // 只有当前月中有数据，才进行赋值，没有的话，清空数组；触发monthResult的重新计算
    if (monthGroup[formatDate]) {
      setCurrentMonthList(monthGroup[formatDate]);
    } else {
      setCurrentMonthList([]);
    }
  }

  // 将datePicker的日期与时间区域联动
  // 1、使用useState管理时间
  // 2、在确认函数中将将选择的时间赋值给useState
  // 3、使用dayjs插件将时间格式化
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs(new Date()).format('YYYY-MM')
  }) 

  // 将数据按月分组
  // 1、从Redux中拿到数组
  // 2、使用useMemo进行数据二次处理
  // 3、使用lodash实现数据按月分组——返回对象
  const billList = useSelector(state => state.bill.billList)
  const monthGroup = useMemo(() => {
    return _.groupBy(billList, (item) => dayjs(item.date).format('YYYY-MM'));
  }, [billList])


  // 计算选择月份后的统计数据
  // 1、确认获取当前月份
  // 2、在确认函数中，在monthGroup中，获取当前月（key）对应的数组（通过对象取值拿到）——使用useState维护
  // 3、基于该数组进行计算
  const [currentMonthList, setCurrentMonthList] = useState([]);
  const monthResult = useMemo(() => {
    // 计算出 支出、收入、结余
    // 判断当前月份中是否有数据
    if (currentMonthList.length === 0) {
      return {
        pay: 0,
        income: 0,
        total: 0,
      }; 
    }
    const pay = currentMonthList.filter(item => item.type === 'pay').reduce((a,c) => a + c.money, 0)
    const income = currentMonthList.filter(item => item.type === "income").reduce((a,c) => a + c.money, 0);
    return {
      pay,
      income,
      total: income + pay
    }
  }, [currentMonthList])


  // 初始化时，获取当前月的统计数据
  useEffect(() => {
    // 不管有没有数据，都会触发monthResult的重新计算
    if (monthGroup[currentDate]) {
      setCurrentMonthList(monthGroup[currentDate]);
    } else {
      setCurrentMonthList([])
    }
  }, [currentDate, monthGroup]);


  // 将当前月份的数据按每日进行分组
  const dayGroup = useMemo(() => {
    // 生成新的对象，以年月日为key
    const groupData = _.groupBy(currentMonthList, item => dayjs(item.date).format('YYYY-MM-DD'))
    // 拿到对象的所有key
    const keys = Object.keys(groupData)  
    return {
      groupData,
      keys
    }
  }, [currentMonthList])

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
            <span className="money">{monthResult.pay.toFixed(2)}</span>
            <span className="type">支出</span>
          </div>
          <div className="item">
            <span className="money">{monthResult.income.toFixed(2)}</span>
            <span className="type">收入</span>
          </div>
          <div className="item">
            <span className="money">{monthResult.total.toFixed(2)}</span>
            <span className="type">结余</span>
          </div>
        </div>
      </div>

      {dayGroup.keys.map(key => {
        // 依次将日期、账单数据（通过对象key取值拿到）传给子组件
        return <DayBill key={key} date={key} billData={dayGroup.groupData[key]} />
      })}

      {/* 时间选择器组件 */}
      <DatePicker
        title="时间选择"
        visible={dateVisible}
        onCancel={() => setDateVisible(false)}
        onConfirm={onConfirm}
        max={new Date()}
        precision="month" //控制选择器精度
      />
    </div>
  );
};

export default Month;
