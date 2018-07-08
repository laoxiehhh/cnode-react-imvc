/**
 * shared initial state
 */

export default {
  // html config
  html: {
    title: 'cnode-react-imvc',
    description: 'a cnode from react-imvc',
    keywords: 'react ssr mvc isomorphic'
  },
  // 页面类型： 首页，列表页，详情页
  pageTitle: '',
  // 用户信息
  userInfo: null,
  // 展示菜单
  showMenu: false,
  // 固定头部
  fixHeader: true,
  // 菜单里显示添加按钮
  showAddButton: false,
  // 消息数量
  messageCount: 0,
  // 提示信息
  alertText: '',
  // loading 
  loadingText: ''
}