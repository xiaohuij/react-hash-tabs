import React from 'react'
import { shallow, mount } from 'enzyme'
import * as hash from '../hash'
import HashTabs from '../index'

describe('HashTabs', () => {
  const tabs = [
    { name: 'DesktopA', hash: 'a', content: <div>a</div> },
    { name: 'DesktopB', hash: 'b', content: <div>b</div> },
  ]

  describe('render', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<HashTabs tabs={tabs} />)
    })

    it('should contain a Tabs component', () => {
      expect(wrapper.find('Tabs')).toHaveLength(1)
    })

    it('should contain a TabList component', () => {
      expect(wrapper.find('TabList')).toHaveLength(1)
    })

    it('should contain 2 Tab components', () => {
      expect(wrapper.find('Tab')).toHaveLength(2)
    })

    it('should contain 2 TabPanel components', () => {
      expect(wrapper.find('TabPanel')).toHaveLength(2)
    })

    it('should contain tab A', () => {
      expect(wrapper.contains(<span>DesktopA</span>)).toBe(true)
    })

    it('should render content of each tab', () => {
      expect(wrapper.contains(<div>a</div>)).toBe(true)
      expect(wrapper.contains(<div>b</div>)).toBe(true)
    })
  })

  describe('events', () => {
    let backup

    beforeAll(() => {
      backup = { ...hash }
    })

    beforeEach(() => {
      hash.isClient = backup.isClient
      hash.getHash = backup.getHash
      hash.setHash = backup.setHash
    })

    it('should select tab b when hash is b', () => {
      hash.isClient = jest.fn(() => true)
      hash.getHash = jest.fn(() => 'b')

      const wrapper = mount(<HashTabs tabs={tabs} />)
      const tab = wrapper.childAt(0).childAt(1)
      const panel = wrapper.childAt(1 + 1)

      expect(tab.prop('isActive')).toBe(true)
      expect(panel.prop('isActive')).toBe(true)
    })

    it('should set hash to b when tab b is changed', () => {
      hash.setHash = jest.fn()
      const wrapper = mount(<HashTabs tabs={tabs} />)

      wrapper.childAt(0).childAt(1).childAt(0).simulate('click')
      expect(hash.setHash).toBeCalledWith('b')
    })
  })
})
