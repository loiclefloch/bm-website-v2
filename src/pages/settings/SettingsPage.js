import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ui from 'redux-ui'

import { Tabs, Tab } from 'material-ui/Tabs'
import FontIcon from 'material-ui/FontIcon'
import SwipeableViews from 'react-swipeable-views'
import ThemeContainer from './theme/ThemeContainer'
import AccountCircleIcon from 'material-ui/svg-icons/action/account-circle';
import StyleIcon from 'material-ui/svg-icons/image/style';

import Page from '../../containers/Page'

@ui({
  state: {
    tabIndex: 1,
  }
})
class SettingsPage extends Component {

  handleChangeView = (tabIndex) => {
    console.log('handleChangeView')
    this.props.updateUI({ tabIndex })
  }

  render() {
    const { ui } = this.props

    return (
      <Page
        title="Settings"
      >
        <Tabs
          onChange={this.handleChangeView}
          value={ui.tabIndex}
        >
          <Tab
            icon={<AccountCircleIcon />}
            label="ACCOUNT"
            value={0}
          />
          <Tab
            icon={<StyleIcon />}
            label="THEMES"
            value={1}
          />
        </Tabs>

        <SwipeableViews
          index={ui.tabIndex}
          onChangeIndex={this.handleChangeView}
        >
          <div>
            LOL
          </div>
          <div>
            <ThemeContainer
            />
          </div>
        </SwipeableViews>
      </Page>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

export default connect(mapStateToProps, {

})(SettingsPage)
