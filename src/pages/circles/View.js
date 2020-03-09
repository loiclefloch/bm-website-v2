import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import ButtonLink from 'components/ButtonLink'
import CirclesList from './components/CirclesList'

const styles = theme => ({})

const View = ({ circles, isPending, actions, classes }) => (
  <React.Fragment>
    <ButtonLink to={ButtonLink.getRoute('CIRCLE_NEW')}>Nouveau</ButtonLink>

    <CirclesList circles={circles} isPending={isPending} actions={actions} />
  </React.Fragment>
)

export default withStyles(styles)(View)
