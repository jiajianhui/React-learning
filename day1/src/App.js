import { useState } from "react";

// 导入css
import './index.css'

// 测试数据
const count = 100;
function getName() {
  return "jian";
}
const list = [
  { id: 1, name: "vue" },
  { id: 2, name: "react" },
  { id: 3, name: "hello" },
];

const isLogin = true;

const articleType = 1;
function getArticle() {
  if (articleType === 0) {
    return <div>无图模式</div>;
  } else if (articleType === 1) {
    return <div>单图模式</div>;
  } else {
    return <div>多图模式</div>;
  }
}

// 将事件对象和自定义参数传入
function handleClick(name, e) {
  console.log("hello", name, e);
}

// 定义组件；首字母大写，内部存放逻辑和视图UI
const Button = () => {
  return <button>hello</button>;
};



function App() {
  // useState
  // 必须在函数组件顶层调用，这是 React Hooks 的规则之一
  // num为状态变量；setNum为修改状态变量的方法
  const [num, setNum] = useState(0);
  const [myName, setmyName] = useState({ name: "jian" });

  return (
    <div className="App">
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
        {isLogin && "hello"}

        {/* 2、三元运算 */}
        {isLogin ? "曹操" : "刘备"}

        {/* 3、复杂条件渲染 */}
        {getArticle()}
      </div>

      {/* 4、事件绑定 */}
      <div>
        <button onClick={(e) => handleClick("jian", e)}>clicke me</button>
      </div>

      {/* 5、组件 */}
      {/* 将组件当成标签来写 */}
      <Button />

      {/* 6、useState */}
      <div>
        <button
          onClick={() => {
            // 修改普通数据
            setNum(num + 1);

            // 修改对象数据（数组同理）
            setmyName({
              // 使用展开运算符保留对象的其他属性，并更新 `name` 属性
              ...myName,
              name: "hui",
            });
          }}
        >
          {num}
          {/* 这里渲染对象的属性 */}
          {myName.name}
        </button>
      </div>

      {/* 7、样式控制 */}
      <div>
        {/* 行内样式（不推荐）；可以将其抽离为变量、多单词的属性名称使用驼峰命名法 */}
        <span style={{ color: "red", fontSize: "60px" }}>hello</span>
        {/* class类名控制 */}
        <span className="text">world</span>
      </div>
    </div>
  );
}

export default App;
