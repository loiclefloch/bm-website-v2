import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import UserAvatar from 'components/UserAvatar'

const styles = theme => ({})

const UserCard = ({ user, isSelected, onToggle, classes }) => (
  <ListItem button onClick={onToggle}>
    <UserAvatar user={user} size={40} />
    
    <ListItemText primary={user.username} />

    {isSelected ? 'X' : ''}
  </ListItem>
)

export default withStyles(styles)(UserCard)