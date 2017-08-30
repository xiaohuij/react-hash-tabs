import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const TabPanel = ({ isActive, children }) => (
  <div className={classnames('react-hash-tabs__tab-panel', { 'react-hash-tabs__tab-panel--selected': isActive })}>
    {children}
  </div>
)

TabPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
  isActive: PropTypes.bool,
}

export default TabPanel
