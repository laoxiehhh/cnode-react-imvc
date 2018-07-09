// routes

export default [
  {
    path: '/home',
    controller: require('./page/home/Controller')
  },
  {
    path: '*',
    controller: require('./page/home/Controller')
  }
]