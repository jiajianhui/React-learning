// 在react组件中使用store中的数据——借用useSelector函数，它的作用是把store中的数据映射到组件中
import { useSelector, useDispatch } from "react-redux";

// react组件中修改store中的数据——借用useDispatch函数，它的作用是生成提交action对象的dispatch函数
import { decrement, inscrement } from "./store/modules/counterStore";

function App() {
  const { count } = useSelector((state) => state.counter); //这里的counter对应的是根store中reducer对象中的counter
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(inscrement())}>+</button>
    </div>
  );
}

export default App;
