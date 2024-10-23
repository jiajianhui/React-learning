import { useMemo, useState } from 'react';
import classNames from 'classnames';
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

  // 控制显示详情
  const [showDetail,setShowDetail] = useState(false)

  return (
    <div className="dayContainer">
      <div className="dayHeader">
        {/* 日期 */}
        <div className="dateBox">
          <div className="date">{date}</div>
          <span className={classNames("arrow", showDetail && "expand")} onClick={() => setShowDetail(!showDetail)}></span>
        </div>

        {/* 总览 */}
        <div className="overview">
          <div className="item">
            <span className="type pay">支出</span>
            <span className="money">{dayResult.pay.toFixed(2)}</span>
          </div>

          <div className="item">
            <span className="type income">收入</span>
            <span className="money">{dayResult.income.toFixed(2)}</span>
          </div>

          <div className="item">
            <span className="money">{dayResult.total.toFixed(2)}</span>
            <span className="type total">结余</span>
          </div>
        </div>
      </div>

      {/* 详情 */}
      <div className={classNames("detail", showDetail && "isShow")}>
        {billData.map(item => {
          return <div className="detailItem" key={item.id}>
            <span className="name">{item.useFor}</span>
            <span className={classNames('count', item.money < 0 && 'green')}>{item.money}</span>
          </div>;
        })}
        
      </div>
    </div>
  );
};

export default DayBill