import { useParams } from "react-router-dom"

const List = () => {
    // 接收参数
    const params = useParams()
    let id = params.id
    let name = params.name
    return (
        <div>List
            <div>参数——{id}{name}</div>
        </div>
    )
}

export default List