import React from 'react'
import { render } from 'react-dom'
import HashTabs from '../../src/index'

const TabContent = ({children}) => (
  <div>
    {children}
  </div>
)

const tabs = [
  { name: 'Tab One', hash: 'one', content: <TabContent>first content</TabContent> },
  { name: 'Tab Two', hash: 'two', content: <TabContent>second content</TabContent> },
  { name: 'Tab Three', hash: 'three', content: 'third content' },
  { name: 'Tab Four', hash: 'four', content: 'four content' },
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enableHash: true,
    }
    this.handleChange.bind(this)
  }

  handleChange = (e) => {
    this.setState({ enableHash: e.target.checked })
  }

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={this.state.enableHash}
            onChange={this.handleChange}
          />
          Turn Hash {this.state.enableHash ? 'Off' : 'On'}
        </label>
        <HashTabs isHash={this.state.enableHash} tabs={tabs} />
      </div>
    )
  }
}

render(<App />, document.getElementById('container'))
