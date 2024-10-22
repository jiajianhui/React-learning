import { useMemo } from 'react';
// 导入样式
import './index.scss'

const DayBill = ({ date, billData }) => {

  // 将拿到的billData进行统计计算
  const dayResult = useMemo(() => {
    const pay = billData.filter(item => item.type === 'pay').reduce((a,c) => a + c.money, 0)
    const income = billData.filter((item) => item.type === "income").reduce((a,c) => a + c.money, 0);
    return {
      pay,
      income,
      total: pay + income
    }
  }, [billData])

  return (
    <div className="dayContainer">
      {/* 日期 */}
      <div className="date">{date}</div>

      {/* 总览 */}
      <div className="overview">
        <div className="item">
          <span className="type pay">支出</span>
          <span className="money">{dayResult.pay}</span>
        </div>

        <div className="item">
          <span className="type income">收入</span>
          <span className="money">{dayResult.income}</span>
        </div>

        <div className="item">
          <span className="money">{dayResult.total}</span>
          <span className="type total">结余</span>
        </div>
      </div>
    </div>
  );
};

export default DayBill