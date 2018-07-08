import React from "react"
import classnames from "classnames"
import { Link } from "react-imvc/component"
import connect from "react-imvc/hoc/connect"

const withData = connect(({ state, handlers }) => {
  return {
    showMenu: state.showMenu,
    onClose: handlers.handleCloseMenu
  }
})

export default withData(Menu)

function Menu (props) {
  let className = classnames({
    "nav-list": true,
    show: props.showMenu
  });

  return (
    <section id="sideBar" className={className} onClick={props.onClose}>
      <ul className="list-ul">
        <MenuItemWithCheck
          className="icon-quanbu iconfont"
          to={`/list?tab=all`}
        >
          全部
        </MenuItemWithCheck>
        <MenuItemWithCheck className="icon-hao iconfont" to={`/list?tab=good`}>
          精华
        </MenuItemWithCheck>
        <MenuItemWithCheck
          className="icon-fenxiang iconfont"
          to={`/list?tab=share`}
        >
          分享
        </MenuItemWithCheck>
        <MenuItemWithCheck className="icon-wenda iconfont" to={`/list?tab=ask`}>
          问答
        </MenuItemWithCheck>
        <MenuItemWithCheck
          className="icon-zhaopin iconfont"
          to={`/list?tab=job`}
        >
          招聘
        </MenuItemWithCheck>
        <MenuItemWithCheck
          className="icon-xiaoxi iconfont line"
          to={`/message`}
        >
          消息
        </MenuItemWithCheck>
        <MenuItemWithCheck className="icon-about iconfont" to={`/about`}>
          关于
        </MenuItemWithCheck>
      </ul>
    </section>
  )
}

const withCurrentPath = connect(({ state }) => {
  // react-imvc 会把 controller.location 对象填充至 state.location 里
  // raw 为 pathname + search
  return {
    current: state.location.raw
  }
})

const MenuItemWithCheck = withCurrentPath(MenuItem)

function MenuItem (props) {
  if (props.to === props.current) {
    let { to, current, ...rest } = props
    return <li {...rest} />
  }
  let { current, ...rest } = props
  return <Link as="li" {...rest}>
}

