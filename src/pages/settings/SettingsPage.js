import React, { Component } from 'react'

import { connect } from 'react-redux'
import ui from 'redux-ui'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ThemeContainer from './theme/ThemeContainer'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StyleIcon from '@material-ui/icons/Style';

import Page from 'components/Page'

@ui({
  state: {
    tabIndex: 1,
  }
})
class SettingsPage extends Component {

  handleChangeView = (tabIndex) => {
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

        {/* <SwipeableViews
          index={ui.tabIndex}
          onChangeIndex={this.handleChangeView}
        > */}
          <div>
            LOL
          </div>
          <div>
            <ThemeContainer
            />
          </div>
        {/* </SwipeableViews> */}
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
