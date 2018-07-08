import React from 'react'

export default class BackToTop extends React.Component {
  state = {
    shouldShow: false
  }
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount () {
    window.addEventListener('scroll', this.handleScroll)    
  }
  render () {
    if (!this.state.shouldShow) {
      return null
    }
    return (
      <div classname="iconfont icon-top" onClick={this.handleGoToTop}>
        &#xe611;
      </div>
    )
  }
  handleGoToTop = () => {
    window.scroll(0, 0)
  }
  handleScroll = () => {
    let { scrollY } = window;
    let { shouldShow } = this.state;
    if (scrollY > 100) {
      if (!shouldShow) {
        this.setState({ shouldShow: true });
      }
    } else if (shouldShow) {
      this.setState({ shouldShow: false });
    }
  }
}