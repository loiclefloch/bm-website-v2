import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import PostCircleMembersContainer from 'modules/circleMembers/postMembers/views/PostCircleMembersContainer'
import UserSelectorContainer from 'components/UserSelectorContainer'
import LoadingBlock from 'components/loading/LoadingBlock'
import ApiErrorBlock from 'components/error/ApiErrorBlock'
import Member from './Member'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
  },
  header: {
    paddingLeft: theme.spacing.unit,
  },
  headerArea: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addMemberBtn: {},
  container: {
    marginTop: theme.spacing.unit * 2,
  },
})

const Members = ({ circle, onSelectedMembersChange, classes }) => (
  <div className={classes.root}>
    <PostCircleMembersContainer circleId={circle.id}>
      {({ postCircleMembers, isPendingPostCircleMembers, postCircleMembersError }) => (
        <LoadingBlock show={isPendingPostCircleMembers}>
          <div className={classes.headerArea}>
            <Typography variant="subheading" className={classes.header}>
              Members
            </Typography>

            <UserSelectorContainer
              values={circle.members}
              disableUnselect
              onChange={selectedUsers => {
                postCircleMembers(selectedUsers)
              }}
            >
              {({ onOpen }) => (
                <Button
                  onClick={onOpen}
                  className={classes.addMemberBtn}
                  variant="outlined"
                  size="small"
                >
                  Add a member
                </Button>
              )}
            </UserSelectorContainer>
          </div>

          <ApiErrorBlock apiError={postCircleMembersError} />
          <Grid container className={classes.container}>
            {circle.members.map(member => (
              <Grid item key={member.id} xs={12}>
                <Member member={member} />
              </Grid>
            ))}
          </Grid>
        </LoadingBlock>
      )}
    </PostCircleMembersContainer>
  </div>
)

export default withStyles(styles)(Members)
