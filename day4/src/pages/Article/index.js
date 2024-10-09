import { Link, useNavigate } from "react-router-dom";

const Article = () => {
  // 生成导航方法
  const navigate = useNavigate()

  return (
    <div>
      <div>Article</div>

      <hr />

      {/* 1、路由导航跳转 */}
      {/* 1-1；声明式写法——适合写在模版中 */}
      <Link to={"/login"}>跳转到Login</Link>

      {/* 1-2；编程式写法——适合写在逻辑代码中 */}
      <div>
        <button onClick={() => navigate("/login")}>跳转到Login</button>
      </div>

      <hr />

      {/* 2、导航跳转传参 */}
      {/* 2-1；searchParams传参 */}
      <div>
        <button onClick={() => navigate("/login?id=1001&name=jia")}>
          跳转到Login-searchParams传参
        </button>
      </div>
      {/* 2-2；params传参 */}
      <div>
        <button onClick={() => navigate("/list/1002/jack")}>
          跳转到List-params传参
        </button>
      </div>
    </div>
  );
};

export default Article;
