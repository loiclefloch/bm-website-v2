import React from 'react'

import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Chip from '@material-ui/core/Chip'
import { red700 } from '@material-ui/core/colors/red'
import UserAvatar from 'components/UserAvatar'

const styles = theme => ({
  root: {
    maxWidth: 400,
    marginBottom: theme.spacing.unit,
  },
  chip: {
    width: 75,
    ...theme.style.chip,
    ...theme.style.flexCenter,
  },
  chipLabel: {
    height: '100%',
  },
  admin: {
    borderColor: red700,
    color: red700,
  },
  notAdmin: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.textColor,
  },
})

const Member = ({ member, classes }) => (
  <Card className={classes.root} elevation={0}>
    <CardHeader
      avatar={<UserAvatar user={member} size={40} />}
      title={member.username}
      subheader={
        member.isCircleAdmin && (
          <Chip
            classes={{
              root: classNames(classes.chip, classes.admin),
              label: classes.chipLabel,
            }}
            label="admin"
          />
        )
      }
    />
  </Card>
)

export default withStyles(styles)(Member)
