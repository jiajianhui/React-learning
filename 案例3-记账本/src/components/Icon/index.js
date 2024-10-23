const baseUrl = "https://zqran.gitee.io/images/ka/";

const Icon = ({type}) => {
    return (
        <img 
            src={`${baseUrl + type}.svg`}
            alt="图标"
            style={{
                width: 20,
                height: 20
            }}
        />
    )
}


export default Icon