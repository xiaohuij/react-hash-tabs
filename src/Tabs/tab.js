import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Tab = ({ children, isActive, clickHandler }) => (
  <li className={classnames('react-hash-tabs__tab', { 'react-hash-tabs__tab--selected': isActive })}>
    <a
      onClick={clickHandler}
      role="link"
      tabIndex="-1"
    >
      {children}
    </a>
  </li>
)

Tab.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
  isActive: PropTypes.bool,
  clickHandler: PropTypes.func,
}

export default Tab
