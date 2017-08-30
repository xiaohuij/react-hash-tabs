import React from 'react'
import { shallow } from 'enzyme'
import Tab from '../tab'

describe('Tab', () => {
  describe('render tab correctly', () => {
    let wrapper
    const props = {
      isActive: false,
      children: <div>tab-test</div>,
      clickHandler: jest.fn(),
    }

    beforeEach(() => {
      wrapper = shallow(<Tab {...props} />)
    })

    it('should contain a li with class', () => {
      const li = wrapper.find('li')
      expect(li).toHaveLength(1)
      expect(li.hasClass('react-hash-tabs__tab')).toBeTruthy()
      expect(li.hasClass('react-hash-tabs__tab--selected')).toBeFalsy()
    })

    it('should contain tab content', () => {
      const tab = wrapper.find('li')
      expect(tab.contains(<div>tab-test</div>)).toBeTruthy()
    })

    it('should contain link button', () => {
      const btn = wrapper.find('a')
      expect(btn).toHaveLength(1)
      btn.simulate('click')
      expect(props.clickHandler).toHaveBeenCalled()
    })
  })

  describe('render selected tab correctly', () => {
    let wrapper
    const props = {
      isActive: true,
      children: <div>tab-test</div>,
      clickHandler: jest.fn(),
    }

    beforeEach(() => {
      wrapper = shallow(<Tab {...props} />)
    })

    it('should contain a li with class', () => {
      const li = wrapper.find('li')
      expect(li).toHaveLength(1)
      expect(li.hasClass('react-hash-tabs__tab')).toBeTruthy()
      expect(li.hasClass('react-hash-tabs__tab--selected')).toBeTruthy()
    })
  })
})
