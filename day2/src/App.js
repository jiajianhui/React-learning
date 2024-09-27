import { createContext, useContext, useEffect, useState } from 'react'
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

// 兄弟组件——在B中获取A中的信息
function A(props) {
  return (
    <div>this is A compnent {props.aaa}</div>
  )
}
function B({getName}) {
  return (
    <div>
      this is B compnent <button onClick={() => getName('1')}>向A发送内容</button>
    </div>
  );
}

// 跨层级通信
const AppContext = createContext()
function C() {
  return(
    <div>this is C component <D /> </div>
  )
}
function D() {
  // 使用useContext获取数据
  const data = useContext(AppContext);
  return <div>this is D component, {data}</div>;
}

// 清除副作用
function E() {
  
  useEffect(() => {
    // 开启定时器
    const timer = setInterval(() => {
      console.log("定时器执行中");
    }, 1000);

    // 组件卸载时自动执行回调（清除副作用）
    return () => {
      clearInterval(timer);
    }
  }, [])

  return (
    <span>this is E component</span>
  )
}

 // 自定义Hook函数
// 封装思路：
// 1、声明一个以use打头的函数
// 2、在函数体内封装可复用的逻辑
// 3、将组件中用到的状态或者回调return出去（数组或对象）
// 4、在哪个组件中要用这个逻辑，就执行这个Hook，解构出对应的状态或回调

// ReactHook（一切use打头的函数）使用规则
// 1、只能在组件中或者其他自定义Hook函数中调用
// 2、只能在组件的顶层调用，不能嵌套在if、for、其他函数中
function useToggle() {
  // 可复用逻辑
  const [showDiv, setDiv] = useState(true);
  const toggleDiv = () => {
    setDiv(!showDiv);
  }

  // 将状态或回调return出去，方便其他组件使用
  return {
    showDiv,
    toggleDiv
  }
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

  // 兄弟通信方法
  const  getName = (name) => {
    setAAA(name)
  }
  const [aaa, setAAA] = useState('')

  // 跨层级通信
  const appMsg = 'App'

  // useEffect；React Hook函数，用于在组件中（App）创建由渲染本身引起的操作（渲染完成后执行回调函数）
  // 参数1——回调函数（副作用函数）；参数2——数组，依赖项，设置执行机制
  // 关于依赖项——1、没有依赖项的话，组件初始渲染+组件更新时执行回调；2、空数组依赖，只在初识渲染时执行一次回调；3、添加特定依赖项，组件初始渲染+特定依赖项变化时执行回调
  const URL = 'http://geek.itheima.net/v1_0/channels'
  const [channels, setChannels] = useState([])
  useEffect(() => {
    async function getList() {
      const res = await fetch(URL);
      // res.json() 是一个异步方法，它会读取 Response 对象的正文，将其解析成 JSON 格式
      const jsonData = await res.json();
      console.log(jsonData);

      setChannels(jsonData.data.channels);
    }
    getList()

  }, [])

  // 清除副作用——是否展示E组件
  const [showE, setE] = useState(true)


  // 调用自定义Hook，将对应的状态和回调解构出来，供App组件使用
  const { showDiv, toggleDiv } = useToggle();
 
  
  

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

      {/* 5、兄弟通信——B向A发送内容 */}
      <div>
        <A aaa={aaa} />
        <B getName={getName} />
      </div>

      {/* 6、使用context机制跨层级传递数据 */}
      {/* 6.1使用createContext方法创建上下文对象Ctx；6.2在顶层组件中通过Ctx.Provider组件提供数据；6.3在底层组件中通过useContext钩子函数获取消费数据 */}
      <AppContext.Provider value={appMsg}>
        this is app
        <C />
      </AppContext.Provider>

      {/* 7、useEffect */}
      <ul>
        {channels.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>

      {/* 8、清除副作用——组件卸载时，清除定时器 */}
      <div>
        {showE && <E />}
        <button onClick={() => setE(false)}>卸载E组件</button>
      </div>

      {/* 9、自定义Hook函数 */}
      <div>
        {showDiv && <div>Div</div>}
        <button onClick={() => toggleDiv()}>toggleDiv</button>
      </div>
    </div>
  );
}

export default App;
