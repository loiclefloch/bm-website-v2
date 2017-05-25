import React from 'react'
import PropTypes from 'prop-types'

import isNil from 'lodash/isNil'

import {
 Link as ReactRouterLink
} from 'react-router'

import Route from '../../utils/Route'
import RoutingEnum  from '../../config/RoutingEnum'

/**
 * Abstract the react-router-dom Route to handle our `Route` definition.
 */
const Link = (props) => {
  const { to, params, children, ...other } = props
  return (
    <ReactRouterLink
      to={!isNil(to) ? to.generatePathWithParams(params) : '#'}
      className="link"
    >
      {children}
    </ReactRouterLink>
  )
}

Link.propTypes = {
  to: PropTypes.objectOf(Route).isRequired,
}

Link.Route = RoutingEnum

export default Link
