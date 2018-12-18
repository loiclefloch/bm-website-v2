import React, { Component } from 'react'

import { connect } from 'react-redux'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ThemeContainer from './theme/ThemeContainer'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StyleIcon from '@material-ui/icons/Style';

import Page from 'components/Page'

class SettingsPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tabIndex: 0,
    }
  }

  handleChangeView = (tabIndex) => {
    this.setState({ tabIndex })
  }

  render() {
    return (
      <Page
        title="Settings"
      >
        <Tabs
          onChange={this.handleChangeView}
          value={this.state.tabIndex}
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
