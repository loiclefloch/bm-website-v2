import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Page from 'components/Page'
import View from './View'

const styles = theme => ({
  page_container: {
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    marginLeft: theme.app.sidebar.width,
  },
})

class DashboardPage extends Component {

  render() {
    const { classes } = this.props

    return (
      <Page title="Dashboard" classes={{ container: classes.page_container }}>
        <View />
      </Page>
    )
  }
}

export default withStyles(styles)(DashboardPage)
