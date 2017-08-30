import React from 'react'
import PropTypes from 'prop-types'

const TabList = ({ children }) => (
  <ul className="react-hash-tabs__tab-list">
    {children}
  </ul>
)

TabList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
}

export default TabList
