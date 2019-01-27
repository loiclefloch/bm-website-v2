import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import ButtonLink from 'components/ButtonLink'
import CirclesList from './components/CirclesList'

const styles = theme => ({})

const View = ({ circles, isFetching, actions, classes }) => (
  <React.Fragment>
    <ButtonLink to={ButtonLink.getRoute('CIRCLE_NEW')}>Nouveau</ButtonLink>

    <CirclesList circles={circles} isFetching={isFetching} actions={actions} />
  </React.Fragment>
)

export default withStyles(styles)(View)
