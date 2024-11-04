import {NavBar, Button, Input, DatePicker} from 'antd-mobile'
import './index.scss'
import { useEffect, useState } from 'react';
import classNames from 'classnames'

// 导入Icon组件
import Icon from '../../components/Icon'

// 导航相关
import {useNavigate} from 'react-router-dom'

// 时间格式化插件
import dayjs from 'dayjs';

// 导入数据
import { billListData } from '../../contant/billList';

// 导入样式
import './index.scss'

// 导入新增账单方法
import { addBillList } from '../../store/modules/billStore';
import {useDispatch} from 'react-redux'


const New = () => {
  // 控制时间选择器的显示
  const [visible, setVisible] = useState(false);

  // 控制账单类型切换
  const [billType, setBillType] = useState("pay");

  // 导航方法
  const navigate = useNavigate();

  // 收集接口所需数据
  // 1、使用useState维护输入框中的金额
  const [money, setMoney] = useState(0);
  const inputChange = (value) => {
    setMoney(value);
  };

  // 2、使用useState维护账单类型
  const [useFor, setUseFor] = useState("");

  // 3、保存方法——将数据整合，然后触发提交
  const dispatch = useDispatch();
  const saveBill = () => {
    const data = {
      type: billType,
      money: billType === "pay" ? -money : +money,
      date: selectedDate,
      useFor: useFor,
    };

    console.log(data);
    dispatch(addBillList(data));
  };

  // 使用useState维护当前选择的时间
  const [selectedDate, setSelectedDate] = useState(new Date());

  // 时间选择器确认函数
  const dateConfirm = (value) => {
    console.log(value);
    setSelectedDate(value);
    setVisible(false);
  };

  // 动态显示时间选择器文字
  const dateText = () => {
    const today = dayjs(new Date()).format("YYYY-MM-DD");
    const selectedDay = dayjs(selectedDate).format("YYYY-MM-DD");

    return selectedDay === today ? "今天" : selectedDay;
  };

  // 动态获取billType的高度
  const [billTypeHeight, setBillTypeHeight] =useState(0)
  useEffect(() => {
    // 获取dom节点
    const navBar = document.querySelector(".adm-nav-bar");
    const header = document.querySelector(".header");

    console.log(navBar);
    

    // 获取对应高度
    const navBarHeight = navBar.offsetHeight;
    const headerHeight = header.offsetHeight;

    // 计算高度billType的高度
    setBillTypeHeight(window.innerHeight - navBarHeight - headerHeight)
  })


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
            <div className="text">{dateText()}</div>
            <DatePicker
              title="时间选择"
              visible={visible}
              onCancel={() => setVisible(false)}
              defaultValue={new Date()}
              max={new Date()}
              onConfirm={dateConfirm}
            />
          </Button>
          {/* 输入框 */}
          <Input
            className="input"
            type="number"
            placeholder="0.00"
            value={money}
            onChange={inputChange}
          />
          <span className="yuan">¥</span>
        </div>
      </div>

      {/* 账单类型 */}
      <div className="billType" style={{height: billTypeHeight - 20}}>
        {billListData[billType].map((item) => {
          return (
            <div className="typeItem" key={item.type}>
              {/* 名称 */}
              <div className="title">{item.name}</div>

              {/* 列表 */}
              <div className="list">
                {item.list.map((item) => {
                  return (
                    <div
                      className={classNames(
                        "listItem",
                        useFor === item.type ? "selected" : ""
                      )}
                      key={item.type}
                      onClick={() => setUseFor(item.type)}
                    >
                      <Icon type={item.type} width={26} />
                      {item.name}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* 保存按钮 */}
      <div className="save">
        <Button color="primary" onClick={() => saveBill()}>
          保存
        </Button>
      </div>
    </div>
  );
};

export default New;
