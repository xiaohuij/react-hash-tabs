import React from 'react'
import { shallow } from 'enzyme'
import TabPanel from '../tabPanel'

describe('TabPanel', () => {
  let wrapper
  const props = {
    children: <article>tab-panel-test</article>,
  }

  it('should render element with class', () => {
    props.isActive = false
    wrapper = shallow(<TabPanel {...props} />)

    const div = wrapper.find('div')
    expect(div).toHaveLength(1)
    expect(div.hasClass('react-hash-tabs__tab-panel')).toBeTruthy()
    expect(div.hasClass('react-hash-tabs__tab-panel--selected')).toBeFalsy()
    expect(div.contains(<article>tab-panel-test</article>)).toBeTruthy()
  })

  it('should render selected element with class', () => {
    props.isActive = true
    wrapper = shallow(<TabPanel {...props} />)

    const div = wrapper.find('div')
    expect(div.hasClass('react-hash-tabs__tab-panel')).toBeTruthy()
    expect(div.hasClass('react-hash-tabs__tab-panel--selected')).toBeTruthy()
  })
})
