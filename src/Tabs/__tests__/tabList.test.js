import React from 'react'
import { shallow } from 'enzyme'
import TabList from '../tabList'

describe('TabList', () => {
  let wrapper
  const props = {
    children: <div>tab-list-test</div>,
  }

  beforeEach(() => {
    wrapper = shallow(<TabList {...props} />)
  })

  it('should contain a ul with class', () => {
    const ul = wrapper.find('ul')
    expect(ul).toHaveLength(1)
    expect(ul.hasClass('react-hash-tabs__tab-list')).toBeTruthy()
    expect(ul.contains(<div>tab-list-test</div>)).toBeTruthy()
  })
})
