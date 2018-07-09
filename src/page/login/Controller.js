import Controller from "../../shared/BaseController";
import View from './View'
import Model from './Model'

export default class extends Controller {
  View = View
  Model = Model

  // Life Cycle
  //controller.shouldComponentCreate 方法触发时，view 还未被创建和渲染，如果该方法返回 false，将终止后续的生命周期活动。
  // 该方法的设计目的，是鉴定权限，如果用户没有权限访问该页面，可以通过 this.redirect 方法，重定向到其他页面。
  shouldComponentCreate () {
    let { context, location } = this
    // 如果已经登录，重定向离开
    if (this.isLogin()) {
      let { userInfo } = context
      let targetPath = location.query.redirect
      if (!targetPath) {
        targetPath = `${context.basename}/user/${userInfo.loginname}`
      }
      this.redirect(targetPath)
      return false
    }
  }

  handleLogin = async () => {
    let { token, location } = this.store.getState()
    if (!token || token.length !== 36) {
      this.showAlert('令牌格式错误, 应为36位UUID字符串')
      return 
    }

    this.showLoading('登陆中...')

    try {
      let userInfo = await this.fetchUserInfo(token)
      
      if (!userInfo) {
        throw new Error('登录失败，请重试!')
      }

      this.cookie('accesstoken', token)
      window.location.reload()
    } catch (error) {
      this.showAlert('error.message')
    }
    this.hideLoading()
  }
}