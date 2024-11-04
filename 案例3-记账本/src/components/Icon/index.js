// 使用nodejs搭建的静态资源服务
const baseUrl = "http://localhost:9000/icon/";

const Icon = ({ type, width = 20 }) => {
  return (
    <img
      src={`${baseUrl + type}.svg`}
      alt="图标"
      style={{
        width: width,
        height: width,
      }}
    />
  );
};


export default Icon