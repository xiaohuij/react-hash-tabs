import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabIndex: this.props.selectedIndex || 0,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedIndex !== this.props.selectedIndex) {
      this.setState({
        tabIndex: nextProps.selectedIndex,
      })
    }
  }

  handleTabClick(i) {
    this.setState({
      tabIndex: i,
    })
  }

  render() {
    const { onSelect } = this.props
    const tabs = this.props.children[0].props.children.map((tab, i) => (
      React.cloneElement(tab, {
        isActive: this.state.tabIndex === i,
        clickHandler: () => {
          this.handleTabClick(i)
          if (onSelect) {
            onSelect(i)
          }
        },
      })
    ), this)
    const tabList = React.cloneElement(this.props.children[0], {
      children: tabs,
    })
    const tabPanels = this.props.children[1].map((panel, i) => (
      React.cloneElement(panel, {
        isActive: this.state.tabIndex === i,
      })
    ), this)
    return (
      <div className="react-hash-tabs">
        {tabList}
        {tabPanels}
      </div>
    )
  }
}

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  selectedIndex: PropTypes.number,
  onSelect: PropTypes.func,
}

export default Tabs
