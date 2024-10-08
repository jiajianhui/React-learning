import { Link, useNavigate } from "react-router-dom";

const Article = () => {
  // 生成导航方法
  const navigate = useNavigate()

  return (
    <div>
      <div>Article</div>

      {/* 声明式写法——适合写在模版中 */}
      <Link to={"/login"}>跳转到Login</Link>

      {/* 编程式写法——适合写在逻辑代码中 */}
      <div>
        <button onClick={() => navigate("/login")}>跳转到Login</button>
      </div>
    </div>
  );
};

export default Article;
