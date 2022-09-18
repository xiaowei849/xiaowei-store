// 引入mockjs模块
import Mock from 'mockjs'
// 把json数据引入
// webpack默认暴露图片、json数据格式
import banners from './banners.json'
import floors from './floors.json'

// mock数据：第一个参数：请求地址，第二个参数：请求数据
// 模拟轮播图数据
Mock.mock('/mock/banners', { code: 200, data: banners })
Mock.mock('/mock/floors', { code: 200, data: floors })
