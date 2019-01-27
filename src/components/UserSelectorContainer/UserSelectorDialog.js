import React from 'react'


import ArrayUtils from 'app/utils/ArrayUtils'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Button from '@material-ui/core/Button'
import LoadingBlock from 'components/loading/LoadingBlock'
import UserCard from './UserCard'

const styles = theme => ({})

const UserSelectorDialog = ({
  open,
  userList,
  values,
  onToggleUser,
  isFecthingUserList,
  fetchUserListError,
  classes,
  onClose,
  onSubmit,
  ...otherProps
}) => (
  <Dialog onClose={onClose} open={open} aria-labelledby="user-selector-dialog" {...otherProps}>
    <DialogTitle id="simple-dialog-title">Select users</DialogTitle>

    <DialogContent>
      <LoadingBlock show={isFecthingUserList || !userList}>
        {() => (
          <React.Fragment>
            <List>
              {userList.map(user => (
                <UserCard
                  key={user.id}
                  user={user}
                  isSelected={ArrayUtils.exists(values, u => u.id === user.id)}
                  onToggle={() => {
                    onToggleUser(user)
                  }}
                />
              ))}
            </List>

            <DialogActions>
              <Button onClick={onClose} color="primary">
                Cancel
              </Button>
              <Button onClick={onSubmit} color="primary" autoFocus>
                Update
              </Button>
            </DialogActions>
          </React.Fragment>
        )}
      </LoadingBlock>
    </DialogContent>
  </Dialog>
)

export default withStyles(styles)(UserSelectorDialog)
