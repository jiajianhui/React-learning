import {NavBar, Button, Input, DatePicker} from 'antd-mobile'
import './index.scss'
import { useState } from 'react';
import classNames from 'classnames'

// 导航相关
import {useNavigate} from 'react-router-dom'

// 导入数据
import { billListData } from '../../contant/billList';

// 导入样式
import './index.scss'


const New = () => {

  // 控制时间选择器的显示
  const [visible, setVisible] = useState(false)

  // 控制账单类型切换
  const [billType, setBillType] = useState('pay')

  // 导航方法
  const navigate = useNavigate()

  return (
    <div className="container">
      <NavBar onBack={() => navigate(-1)}>记一笔</NavBar>

      {/* 账单按钮及输入框 */}
      <div className="header">
        <div className="btns">
          <Button
            onClick={() => setBillType("pay")}
            shape="rounded"
            className={classNames(billType === "pay" && "selected")}
          >
            支出
          </Button>
          <Button
            onClick={() => setBillType("income")}
            shape="rounded"
            className={classNames(billType === "income" && "selected")}
          >
            收入
          </Button>
        </div>

        <div className="inputBox">
          {/* 时间选择器 */}
          <Button
            className="date"
            onClick={() => {
              setVisible(true);
            }}
          >
            <div className="text">今天</div>
            <DatePicker
              title="时间选择"
              visible={visible}
              onCancel={() => setVisible(false)}
              defaultValue={new Date()}
              max={new Date()}
            />
          </Button>
          {/* 输入框 */}
          <Input className="input" type="number" placeholder="0.00" />
          <span className="yuan">¥</span>
        </div>
      </div>

      {/* 账单类型 */}
      <div className="billType">
        {billListData[billType].map((item) => {
          return (
            <div className="typeItem" key={item.type}>
              {/* 名称 */}
              <div className="title">{item.name}</div>

              {/* 列表 */}
              <div className="list">
                {item.list.map((item) => {
                  return (
                    <div className="listItem" key={item.type}>
                      {" "}
                      {item.name}{" "}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* 保存按钮 */}
      <div className='save'>
        <Button color='primary'>保存</Button>
      </div>
    </div>
  );
};

export default New;
