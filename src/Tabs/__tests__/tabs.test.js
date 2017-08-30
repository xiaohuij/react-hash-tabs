import React from 'react'
import { shallow, mount } from 'enzyme'
import { Tabs, TabList, Tab, TabPanel } from '../index'

describe('Tabs', () => {
  let wrapper
  const tabs = [
    { tab: 'tab-a', hash: 'a', content: <section>tab-content-a</section> },
    { tab: 'tab-b', hash: 'b', content: <section>tab-content-b</section> },
  ]

  describe('Initialize without props assigned', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Tabs>
          <TabList>
            {tabs.map(tab => (
              <Tab key={tab.hash}>{tab.tab}</Tab>
            ))}
          </TabList>
          {tabs.map(tab => (
            <TabPanel key={tab.tab}>{tab.content}</TabPanel>
          ))}
        </Tabs>,
      )
    })

    it('should render tabs with class', () => {
      const div = wrapper.find('div')
      expect(div).toHaveLength(1)
      expect(div.hasClass('react-hash-tabs')).toBeTruthy()
    })

    it('should render tab with props', () => {
      const tab = wrapper.find('Tab')
      expect(tab).toHaveLength(2)
      expect(tab.at(0).prop('isActive')).toBeTruthy()
      expect(tab.at(1).prop('isActive')).toBeFalsy()
    })

    it('should render tab panel with props', () => {
      const panel = wrapper.find('TabPanel')
      expect(panel).toHaveLength(2)
      expect(panel.at(0).prop('isActive')).toBeTruthy()
      expect(panel.at(1).prop('isActive')).toBeFalsy()
    })
  })

  describe('Initialize with props assigned', () => {
    const onSelect = jest.fn()

    beforeEach(() => {
      wrapper = shallow(
        <Tabs selectedIndex={1} onSelect={onSelect}>
          <TabList>
            {tabs.map(tab => (
              <Tab key={tab.hash}>{tab.tab}</Tab>
            ))}
          </TabList>
          {tabs.map(tab => (
            <TabPanel key={tab.tab}>{tab.content}</TabPanel>
          ))}
        </Tabs>,
      )
    })

    it('should render tab with props', () => {
      const tab = wrapper.find('Tab')
      expect(tab.at(0).prop('isActive')).toBeFalsy()
      expect(tab.at(1).prop('isActive')).toBeTruthy()
    })

    it('should render tab panel with props', () => {
      const panel = wrapper.find('TabPanel')
      expect(panel.at(0).prop('isActive')).toBeFalsy()
      expect(panel.at(1).prop('isActive')).toBeTruthy()
    })
  })

  describe('Changing tab', () => {
    beforeEach(() => {
      wrapper = mount(
        <Tabs>
          <TabList>
            {tabs.map(tab => (
              <Tab key={tab.hash}>{tab.tab}</Tab>
            ))}
          </TabList>
          {tabs.map(tab => (
            <TabPanel key={tab.tab}>{tab.content}</TabPanel>
          ))}
        </Tabs>,
      )
    })

    it('should render with props when clicks', () => {
      const tab = wrapper.find('Tab')
      const panel = wrapper.find('TabPanel')

      expect(wrapper.state('tabIndex')).toBe(0)
      tab.at(1).prop('clickHandler')()
      expect(wrapper.state('tabIndex')).toBe(1)
      expect(panel.at(0).prop('isActive')).toBeFalsy()
      expect(panel.at(1).prop('isActive')).toBeTruthy()
    })
  })

  describe('Changing tab', () => {
    const onSelect = jest.fn()

    beforeEach(() => {
      wrapper = mount(
        <Tabs selectedIndex={1} onSelect={onSelect}>
          <TabList>
            {tabs.map(tab => (
              <Tab key={tab.hash}>{tab.tab}</Tab>
            ))}
          </TabList>
          {tabs.map(tab => (
            <TabPanel key={tab.tab}>{tab.content}</TabPanel>
          ))}
        </Tabs>,
      )
    })

    it('should render with props when clicks', () => {
      const tab = wrapper.find('Tab')
      const panel = wrapper.find('TabPanel')

      expect(wrapper.state('tabIndex')).toBe(1)
      tab.at(0).prop('clickHandler')()
      expect(onSelect).toHaveBeenCalledWith(0)
      expect(wrapper.state('tabIndex')).toBe(0)
      expect(panel.at(0).prop('isActive')).toBeTruthy()
      expect(panel.at(1).prop('isActive')).toBeFalsy()
    })
  })
})
