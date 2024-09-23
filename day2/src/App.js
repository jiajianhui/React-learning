import { useState } from 'react'
import { useRef } from 'react';

function App() {

  const [value, setValue] = useState('')

  const inputRef = useRef(null)
  const showDom = () => {
    console.dir(inputRef.current); //打印该Dom元素身上的属性或方法
    
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

      
    </div>
  );
}

export default App;
