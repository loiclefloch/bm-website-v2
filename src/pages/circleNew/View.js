import React from 'react'

import { compose } from 'reacticoon/view'
import { withForm } from 'plugins/reacticoon-form'
import { withStyles } from '@material-ui/core/styles'

import CircleForm from 'modules/circleForm'
import AddCircleForm from './components/AddCircleForm'

const styles = theme => ({
  root: {
    textAlign: 'center',
    margin: '0 auto',
    height: '100%',
    marginTop: theme.spacing.unit * 10,
  },
})

const View = ({ classes }) => (
  <div className={classes.root}>
    <h1>Add circle</h1>

    <AddCircleForm />
  </div>
)

export default compose(
  withForm(CircleForm),
  withStyles(styles)
)(View)
