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
    path: '/user/:loginname',
    controller: require('./page/user/Controller')
  },
  {
    path: '/add',
    controller: require('./page/add/Controller')
  },
  {
    path: '/message',
    controller: require('./page/message/Controller')
  },
  {
    path: '/about',
    controller: require('./page/about/Controller')
  },
  {
    path: '*',
    controller: require('./page/home/Controller')
  }
]