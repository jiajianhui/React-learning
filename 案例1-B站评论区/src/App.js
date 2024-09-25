import './App.scss'
import avatar from './images/bozai.png'
import {useRef, useState} from 'react'

// 导入lodash
import _ from 'lodash'

// 导入uuid和dayjs
import {v4 as uuidv4} from 'uuid'
import dayjs from 'dayjs'


// 评论列表数据
const defaultList = [
  {
    // 评论id
    rpid: 3,
    // 用户信息
    user: {
      uid: '13258165',
      avatar: '',
      uname: '周杰伦',
    },
    // 评论内容
    content: '哎哟，不错哦',
    // 评论时间
    ctime: '10-18 08:15',
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar: '',
      uname: '许嵩',
    },
    content: '我寻你千百度 日出到迟暮',
    ctime: '11-13 11:29',
    like: 71,
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar,
      uname: '黑马前端',
    },
    content: '学前端就来黑马',
    ctime: '10-19 09:00',
    like: 66,
  },
]
// 当前登录用户信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户头像
  avatar,
  // 用户昵称
  uname: '黑马前端',
}


// 导航 Tab 数组
// 为每一个tab绑定点击事件，点击谁就记录哪个tab，useState中记录的tab与循环遍历中的每一个tab进行比对，若匹配则激活
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
]



const App = () => {
  // 1、渲染评论列表
  // 使用useState维护评论列表
  const [list, setList] = useState(_.orderBy(defaultList, "like", "desc"));

  // 删除评论
  // 删除显示——条件渲染；删除功能——拿到当前id，以id为条件进行过滤

  // 删除函数
  function handleDelete(id) {
    console.log(id);
    setList(list.filter((item) => item.user.uid !== id));
  }

  // 使用useState管理type值
  const [type, setType] = useState("hot");
  // 使用useRef获取Dom元素
  const inputRef = useRef(null)
  // 点击tab函数
  function handleClick(type) {
    setType(type);

    // 数据排序
    if (type === "hot") {
      // 根据点赞量排序
      setList(_.orderBy(list, "like", "desc"));
    } else {
      // 根据创建时间排序
      setList(_.orderBy(list, "ctime", "desc"));
    }
  }

  // 发表评论
  // 1、使用useState管理用户输入数据，与表单数据绑定
  const [content, setContent] = useState("");
  // 2、发布按钮函数——将用户输入的数据放入list中（本质上是修改list，所以调用setList方法）
  const handlePublish = () => {
    // list是useState维护的，只能替换而不能修改它
    setList([
      ...list,
      // 新增数据的结构与之前的数据结构保持一致
      {
        rpid: uuidv4(), //生成随机id
        user: {
          uid: "36080105",
          avatar: "",
          uname: "许嵩",
        },
        content: content,
        ctime: dayjs(new Date()).format('MM-DD HH:mm'), //格式化 月-日 时:分
        like: 71,
      },
    ]);

    // 3、清空input框
    setContent('')
    // 4、input框重新获取焦点——使用useRef
    inputRef.current.focus()
  };

  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
            {tabs.map((item) => (
              <span
                className={`nav-item ${item.type === type && "active"}`}
                key={item.type}
                onClick={() => handleClick(item.type)}
              >
                {item.text}
              </span>
            ))}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              ref={inputRef}
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text" onClick={handlePublish}>
                发布
              </div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        {/* 2、渲染列表 */}
        {list.map((item) => (
          <div className="reply-list" key={item.rpid}>
            {/* 评论项 */}
            <div className="reply-item">
              {/* 头像 */}
              <div className="root-reply-avatar">
                <div className="bili-avatar">
                  <img
                    className="bili-avatar-img"
                    alt=""
                    src={item.user.avatar}
                  />
                </div>
              </div>

              <div className="content-wrap">
                {/* 用户名 */}
                <div className="user-info">
                  <div className="user-name">{item.user.uname}</div>
                </div>
                {/* 评论内容 */}
                <div className="root-reply">
                  <span className="reply-content">{item.content}</span>
                  <div className="reply-info">
                    {/* 评论时间 */}
                    <span className="reply-time">{item.ctime}</span>
                    {/* 评论数量 */}
                    <span className="reply-time">点赞数:{item.like}</span>

                    {/* 删除显示——条件渲染 */}
                    {item.user.uid === user.uid && (
                      <span
                        className="delete-btn"
                        onClick={() => handleDelete(item.user.uid)}
                      >
                        删除
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App