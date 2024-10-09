import { useSearchParams } from "react-router-dom"

const Login = () => {
    // 接收参数
    const [params] = useSearchParams()
    let id = params.get('id')
    let name = params.get("name");
    return (
        <div>Login
            <div>参数——{id}{name}</div>
        </div>
    )
}

export default Login