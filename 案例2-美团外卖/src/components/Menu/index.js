import classNames from 'classnames'
import './index.scss'

const Menu = ({foodsList}) => {
  // const foodsList = [
  //   {
  //     "tag": "318569657",
  //     "name": "一人套餐",
  //     "foods": [
  //       {
  //         "id": 8078956697,
  //         "name": "烤羊肉串(10串)",
  //         "like_ratio_desc": "好评度100%",
  //         "month_saled": 40,
  //         "unit": "10串",
  //         "food_tag_list": ["点评网友推荐"],
  //         "price": 90,
  //         "picture": "https://zqran.gitee.io/images/waimai/8078956697.jpg",
  //         "description": "",
  //         "tag": "318569657"
  //       },
  //       {
  //         "id": 7384994864,
  //         "name": "腊味煲仔饭",
  //         "like_ratio_desc": "好评度81%",
  //         "month_saled": 100,
  //         "unit": "1人份",
  //         "food_tag_list": [],
  //         "price": 39,
  //         "picture": "https://zqran.gitee.io/images/waimai/7384994864.jpg",
  //         "description": "",
  //         "tag": "318569657"
  //       },
  //       {
  //         "id": 2305772036,
  //         "name": "鸡腿胡萝卜焖饭",
  //         "like_ratio_desc": "好评度91%",
  //         "month_saled": 300,
  //         "unit": "1人份",
  //         "food_tag_list": [],
  //         "price": 34.32,
  //         "picture": "https://zqran.gitee.io/images/waimai/2305772036.jpg",
  //         "description": "主料：大米、鸡腿、菜心、胡萝卜",
  //         "tag": "318569657"
  //       },
  //       {
  //         "id": 2233861812,
  //         "name": "小份酸汤莜面鱼鱼+肉夹馍套餐",
  //         "like_ratio_desc": "好评度73%",
  //         "month_saled": 600,
  //         "unit": "1人份",
  //         "food_tag_list": ["“口味好,包装很好～点赞”"],
  //         "price": 34.32,
  //         "picture": "https://zqran.gitee.io/images/waimai/2233861812.jpg",
  //         "description": "酸汤莜面鱼鱼，主料：酸汤、莜面 肉夹馍，主料：白皮饼、猪肉",
  //         "tag": "318569657"
  //       }
  //     ]
  //   }
  // ]
  const menus = foodsList.map(item => ({ tag: item.tag, name: item.name }))
  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            key={item.tag}
            className={classNames(
              'list-menu-item',
              'active'
            )}
          >
            {item.name}
          </div>
        )
      })}
    </nav>
  )
}

export default Menu
