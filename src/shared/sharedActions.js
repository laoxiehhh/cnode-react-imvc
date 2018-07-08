/**
 * shared actions
 */
// 打开菜单
export const OPEN_MENU = (state) => {
  if (state.showMenu) {
    return state
  }
  return {
    ...state,
    showMenu: true
  }
}

// 关闭菜单
export const CLOSE_MENU = (state) => {
  if (!state.showMenu) {
    return state
  }
  return {
    ...state,
    showMenu: false
  }
}