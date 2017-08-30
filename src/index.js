import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs, TabList, TabPanel } from './Tabs'
import { isClient, getHash, setHash } from './hash'
import './index.scss'

class HashTabs extends Component {
  constructor(props) {
    super(props)
    this.isHash = this.props.isHash
    this.tabs = this.props.tabs
    this.state = {
      tabIndex: 0,
    }
    this.handleTabChange = this.handleTabChange.bind(this)
  }

  componentWillMount() {
    if (isClient()) {
      this.setTabIndex()
    }
  }

  componentDidMount() {
    if (isClient()) {
      window.onpopstate = () => {
        this.setTabIndex()
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.isHash = nextProps.isHash
    this.tabs = nextProps.tabs
  }

  setTabIndex() {
    const index = this.tabs.map(tab => tab.hash).indexOf(getHash())
    const tabIndex = index !== -1 ? index : 0
    this.setState({ tabIndex })
  }

  handleTabChange(index) {
    return !!this.isHash && setHash(this.tabs[index].hash)
  }

  render() {
    return (
      <Tabs
        selectedIndex={this.state.tabIndex}
        onSelect={this.handleTabChange}
      >
        <TabList>
          {this.tabs.map(tab => (<Tab key={tab.hash}>
            <span>{tab.name}</span>
          </Tab>))}
        </TabList>
        {this.tabs.map(tab => (<TabPanel key={tab.hash}>{tab.content}</TabPanel>))}
      </Tabs>
    )
  }
}

HashTabs.propTypes = {
  isHash: PropTypes.bool,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      hash: PropTypes.string,
      content: PropTypes.node,
    }),
  ).isRequired,
}

HashTabs.defaultProps = {
  isHash: true,
}

export default HashTabs
