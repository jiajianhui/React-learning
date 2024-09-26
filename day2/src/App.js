import { useState } from 'react'
import { useRef } from 'react';

// 父传子
// 1、父组件传递数据，在子组件标签身上绑定属性
// 2、子组件接收数据，props的参数；props可以传递任意类型的数据、props是只读对象（子组件不能对其进行修改，只能由父组件修改）
function Son(props) {
  return (
    <div>
      {/* 当把内容写在组件标签中后，父组件会自动在名为children的属性中接收该内容 */}
      <div>
        son {props.name} {props.children}
      </div>
      
      {/* 在子组件中调用父组件中的函数并传递参数 */}
      <button onClick={() => props.getMsg('hello')}>调用父组件中传过来的方法</button>
    </div>
  );
}

function App() {

  const [value, setValue] = useState('')

  const inputRef = useRef(null)
  const showDom = () => {
    console.dir(inputRef.current); //打印该Dom元素身上的属性或方法
    
  }

  const name = 'father'

  // 父组件中的方法
  const getMsg = (msg) => {
    console.log(msg);
  }

  return (
    <div className="App">
      {/* 1、表单受控绑定 */}
      {/* 绑定流程——使用useState管理数据；表单绑定该数据，利用onChange监测输入框的变化，将最先新的值传回useState */}
      <input value={value} onChange={(e) => setValue(e.target.value)} />

      {/* 2、React中获取DOM */}
      {/* 基本流程——useRef生成ref对象，将其绑定到dom元素身上；dom可用时，通过ref.current获取dom */}
      <div>
        <input ref={inputRef} />
        <button onClick={showDom}>获取Dom</button>
      </div>

      {/* 3、组件通信；父传子 */}
      <Son name={name}>
        <span> hello</span>
      </Son>

      {/* 4、组件通信；子传父 */}
      <Son getMsg={getMsg}></Son>
    </div>
  );
}

export default App;
