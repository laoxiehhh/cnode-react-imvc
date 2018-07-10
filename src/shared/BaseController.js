/**
 * base controller class
 */

import Controller from "react-imvc/controller";
import querystring from "querystring";
import sharedInitialState from "./sharedInitialState";
import * as sharedActions from "./sharedActions";

export default class extends Controller {
  SSR = true // 开启服务端渲染
  // controller.preload 对象用来在页面显示前，预加载 css, json 等数据
  preload = {
    main: "/css/main.css"
  };
  /**
   * controller.getInitialState 方法
   * 会在 createStore 之前执行，它应该返回一个对象，
   * 作为 createStore 的 initialState 参数.
   * 该方法的作用是，提供在运行时确定 initialState 的能力。
   * 比如从 cookie、storage、或者 server 里获取数据
   */
  async getInitialState(initialState) {
    let userInfo = await this.getUserInfo();
    let isLogin = this.isLogin();
    let showAddButton = isLogin;

    return {
      ...sharedInitialState,
      showAddButton,
      userInfo,
      isLogin,
      ...initialState
    };
  }
  /**
   * controller.getFinalActions 方法在 createStore 之前执行，
   * 它应该返回一个对象，作为 createStore 的 actions 参数.
   * 该方法的作用是，提供在运行时确定 actions 的能力，
   * 比如讲多个页面共享的 shared-actions 合并进来
   */
  getFinalActions(actions) {
    return {
      ...actions,
      ...sharedActions
    };
  }
  async getUserInfo () {
    // controller.context 是一个特殊对象，
    //所有 controller 实例都共享同一个 context 对象，
    //可以利用 context 对象储存一些跨页面共享的数据。
    //react-imvc会默认填充一些信息在里面
    let { context } = this
    let userInfo = null
    try {
      if (context.hasOwnProperty("userInfo")) {
        userInfo = context.userInfo;
      } else {
        let accesstoken = this.cookie("accesstoken");
        userInfo = await this.fetchUserInfo(accesstoken);
        context.userInfo = userInfo;
      }
    } catch (_) {
      context.userInfo = null;
    }
    return userInfo
  }
  // 通过token来或去用户信息
  async fetchUserInfo(accesstoken) {
    if (!accesstoken) {
      return null;
    }

    let data = await this.post("/accesstoken", { accesstoken });
    let { success, error_msg, ...userInfo } = data;
    return userInfo;
  }

  isLogin() {
    return !!this.context.userInfo;
  }
  // 封装 get 方法，处理 cnode 跨域要求
  get(api, params, options = {}) {
    options = {
      ...options,
      credentials: "omit",
      headers: {
        ...options.headers,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    return super.get(api, params, options);
  }
  // 封装 post 方法，处理 cnode 跨域要求
  post(api, params, options = {}) {
    options = {
      ...options,
      credentials: "omit",
      method: "POST",
      headers: {
        ...options.headers,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: querystring.stringify(params)
    };
    return this.fetch(api, options);
  }
  // 统一抛错, get/post 方法底层调用的是 fetch 方法
  async fetch(url, options) {
    let data = await super.fetch(url, options);
    let { success, error_msg, ...userInfo } = data;

    if (!success) {
      throw new Error(error_msg);
    }
    return data;
  }
  // 打开菜单
  handleOpenMenu = () => {
    let { OPEN_MENU } = this.store.actions;
    OPEN_MENU();
  };
  // 关闭菜单
  handleCloseMenu = () => {
    let { CLOSE_MENU } = this.store.actions;
    CLOSE_MENU();
  };
  handleLogout = () => {
    this.removeCookie('accesstoken')
    window.location.reload()
  }
  // 隐藏提示信息
  hideAlert = () => {
    let { UPDATE_ALERT_TEXT } = this.store.actions;
    UPDATE_ALERT_TEXT("");
  };

  // 显示提示信息
  showAlert = text => {
    let { UPDATE_ALERT_TEXT } = this.store.actions;
    UPDATE_ALERT_TEXT(text);
    setTimeout(this.hideAlert, 1000);
  };

  showLoading = content => {
    let { UPDATE_LOADING_TEXT } = this.store.actions;
    UPDATE_LOADING_TEXT(content);
  };

  hideLoading = () => {
    let { UPDATE_LOADING_TEXT } = this.store.actions;
    UPDATE_LOADING_TEXT("");
  };

  /**
   * 数据重用后，将服务端的 userInfo 存入 context 里给其他页面使用
   */
  stateDidReuse(state) {
    if (state.userInfo) {
      this.context.userInfo = state.userInfo;
    }
  }
  // 拓展字段：是否需要登录才可以访问
  NeedLogin = false;
  async shouldComponentCreate() {
    // 如果需要登录却没登录，去登录页
    if (this.NeedLogin && !this.isLogin()) {
      this.redirect(`/login?redirect=${this.location.raw}`);
      return false;
    }
  }
  pageWillLeave() {
    this.showLoading("加载中……");
  }

  pageDidBack() {
    this.hideLoading();
  }
}