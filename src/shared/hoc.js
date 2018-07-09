import React from 'react'
/**
 * React.PureComponent是优化 React 应用程序最重要的方法之一，易于实施，只要把继承类从 Component 
 * 换成 PureComponent 即可，可以减少不必要的 render 操作的次数，从而提高性能，
 * 而且可以少写 shouldComponentUpdate 函数，节省了点代码。
 */
export let purify = () => (InputComponent) => {
  return class Pure extends React.PureComponent {
      render() {
          return <InputComponent {...this.props} />
      }
  }
}

export let staticify = () => (InputComponent) => {
    return class Static extends React.Component {
        shouldComponentUpdate() {
            return false // always false to make sure just rendering once
        }
        render() {
            return <InputComponent {...this.props} />
        }
    }
}