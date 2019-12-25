import React from 'react'
import PropTypes from 'prop-types'

import { existsOnArray, toggleArrayObject } from 'reacticoon/utils/array'
import UserListContainer from 'modules/userList/views/UserListContainer'
import UserSelectorDialog from './UserSelectorDialog'

class UserSelectorContainer extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      values: [...this.props.values],
    }
  }

  componentDidUpdate(prevProps) {
    // update values state when opening
    if (prevProps.open === false && this.props.open) {
      this.setState({
        values: [...this.props.values],
      })
    }
  }

  handleShow = () => {
    this.setState({
      open: true,
    })
  }

  handleClose = () => {
    this.setState({
      open: false,
    })
  }

  handleToggleUser = user => {
    if (
      // can unselect or is not selected on props
      !this.props.disableUnselect ||
      !existsOnArray(this.props.values, user, u => u.id === user.id)
    ) {
      this.setState({
        values: toggleArrayObject(this.state.values, user, u => u.id === user.id),
      })
    }
  }

  handleSubmit = () => {
    this.props.onChange(this.state.values)
    this.handleClose()
  }

  render() {
    const { children } = this.props

    const childrenProps = {
      onOpen: this.handleShow,
      onClose: this.handleClose,
    }

    if (!this.state.open) {
      // render directly the children, allow us to laod the users only when we wants to select them
      return children(childrenProps)
    }

    return (
      <UserListContainer>
        {({ userList, isFecthingUserList, fetchUserListError }) => (
          <React.Fragment>
            {children(childrenProps)}
            <UserSelectorDialog
              open={this.state.open}
              userList={userList}
              values={this.state.values}
              isFecthingUserList={isFecthingUserList}
              fetchUserListError={fetchUserListError}
              onToggleUser={this.handleToggleUser}
              onClose={this.handleClose}
              onSubmit={this.handleSubmit}
            />
          </React.Fragment>
        )}
      </UserListContainer>
    )
  }
}

UserSelectorContainer.defaultProps = {
  disableUnselect: false,
}

UserSelectorContainer.propTypes = {
  values: PropTypes.array.isRequired,

  onChange: PropTypes.func.isRequired,

  disableUnselect: PropTypes.bool,
}

export default UserSelectorContainer
