// @flow
//
// https://github.com/thebuilder/react-scroll-percentage
//
import React from 'react' // eslint-disable-line no-unused-vars

/**
 * Monitors scroll, and triggers the children function with updated props
 *
 <ScrollPercentage>
 {({ percentage}) => (
 )}
 </ScrollPercentage>
 */
// TODO: fix
class WindowScrollPercentage extends React.PureComponent {
  state = {
    percentage: 0,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  componentWillUpdate(nextProps: Props, nextState: State) {
    if (!nextProps.onChange) return
    if (nextState.percentage !== this.state.percentage) {
      nextProps.onChange(nextState.percentage)
    }
  }

  handleScroll = () => {
    // lodash debounce method.
    // https://stackoverflow.com/questions/48140242/what-is-the-best-way-to-get-document-scroll-percentage-in-react-app
    let supportPageOffset = window.pageXOffset !== undefined
    let isCSS1Compat = (document.compatMode || '') === 'CSS1Compat'
    let scroll = {
      x: supportPageOffset
        ? window.pageXOffset
        : isCSS1Compat
        ? document.documentElement.scrollLeft
        : document.body.scrollLeft,
      y: supportPageOffset
        ? window.pageYOffset
        : isCSS1Compat
        ? document.documentElement.scrollTop
        : document.body.scrollTop,
    }

    let scrollPercentage =
      (scroll.y / (document.documentElement.offsetHeight - window.innerHeight)) * 100

    console.log(scrollPercentage)

    this.setState({
      percentage: scrollPercentage,
    })
  }

  render() {
    const { children, threshold, onChange, ...props } = this.props

    return (
      <React.Fragment>
        {children && typeof children === 'function' ? children(this.state.percentage) : children}
      </React.Fragment>
    )
  }
}

export default WindowScrollPercentage
