import React from 'react'

import Button from '@material-ui/core/Button'
import { Link } from 'reacticoon/routing'

const ButtonLink = ({ children, to, params, query, newTab, link, ...otherProps }) => (
  <Button
    component={props => (
      <Link to={to} params={params} query={query} newTab={newTab} {...link} {...props} />
    )}
    {...otherProps}
  >
    {children}
  </Button>
)

ButtonLink.getRoute = Link.getRoute

export default ButtonLink
