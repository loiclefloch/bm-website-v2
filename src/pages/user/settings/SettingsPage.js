import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ui from 'redux-ui'

import {Tabs, Tab} from 'material-ui/Tabs'
import FontIcon from 'material-ui/FontIcon'
import SwipeableViews from 'react-swipeable-views'
import ThemeContainer from './theme/ThemeContainer'

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
      <div>
        <Tabs
          onChange={this.handleChangeView}
          value={ui.tabIndex}
        >
          <Tab
            icon={<FontIcon className="fa fa-user"></FontIcon>}
            label="ACCOUNT"
            value={0}
          />
          <Tab
            icon={<FontIcon className="fa fa-paint-brush"></FontIcon>}
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
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

export default connect(mapStateToProps, {

})(SettingsPage)
