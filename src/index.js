// routes

export default [
  {
    path: '/home',
    controller: require('./page/home/Controller')
  },
  {
    path: '/login',
    controller: require('./page/login/Controller')
  },
  {
    path: '/topic/:topicId',
    controller: require('./page/detail/Controller')
  },
  {
    path: '*',
    controller: require('./page/home/Controller')
  }
]