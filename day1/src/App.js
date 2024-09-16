import logo from './logo.svg';
import './App.css';

// 测试数据
const count = 100
function getName() {
  return 'jian'
}
const list = [
  { id: 1, name: "vue" },
  { id: 2, name: "react" },
  { id: 3, name: "hello" },
];

const isLogin = true

const articleType = 1
function getArticle() {
  if (articleType === 0) {
    return <div>无图模式</div>
  } else if (articleType === 1) {
    return <div>单图模式</div>
  } else {
    return <div>多图模式</div>
  }
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* 1、识别js表达式 */}
      <div>
        {/* 1、传递字符串 */}
        {"this is message"}

        {/* 2、识别js变量 */}
        {count}

        {/* 3、函数调用 */}
        {getName()}

        {/* 4、方法调用 */}
        {new Date().getDate()}

        {/* 5、使用js对象 */}
        {/* 外层大括号为识别表达式的语法，内层为识别对象的结构 */}
        <div style={{ color: "red" }}>hello</div>
      </div>

      {/* 2、列表渲染 */}
      <ul>
        
        {list.map((item) => (
          // map 循环哪个结构就return哪个结构
          // 注意事项：加上一个独一无二的key（字符串或number），名称一般为id
          // key的作用：react框架内部使用，提升更新性能
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      {/* 3、条件渲染 */}
      <div>
        {/* 1、逻辑与 && */}
        {isLogin && 'hello'}

        {/* 2、三元运算 */}
        {isLogin ? '曹操' : '刘备'}

        {/* 3、复杂条件渲染 */}
        {getArticle()}
      </div>
    </div>
  );
}

export default App;
