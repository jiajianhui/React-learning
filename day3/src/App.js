// 在react组件中使用store中的数据——借用useSelector函数，它的作用是把store中的数据映射到组件中
import { useSelector, useDispatch } from "react-redux";

// react组件中修改store中的数据——借用useDispatch函数，它的作用是生成dispatch函数（用来触发action对象）
import { decrement, inscrement, addToNum } from "./store/modules/counterStore";

function App() {
  const { count } = useSelector((state) => state.counter); //这里的counter对应的是根store中reducer对象中的counter
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(inscrement())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>+10</button>
      <button onClick={() => dispatch(addToNum(20))}>+20</button>
    </div>
  );
}

export default App;
