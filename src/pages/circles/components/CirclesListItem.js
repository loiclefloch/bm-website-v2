import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'reacticoon/routing'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import IconPeople from '@material-ui/icons/People'
import { AvatarWithDefault } from 'components/avatar'

import CirclesListItemFollowedByMe from './CirclesListItemFollowedByMe'

const styles = theme => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: `0 ${theme.spacing.unit}px`,
    paddingLeft: theme.spacing.unit,
  },
  meta: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: `0 ${theme.spacing.unit}px`,
    paddingLeft: theme.spacing.unit * 7, // align under title
    paddingRight: theme.spacing.unit * 2,
  },
  title: {
    display: 'inline-block',
    padding: '0 8px',
    cursor: 'poiner',
    marginLeft: theme.spacing.unit,
    fontSize: 20,
  },
  avatar: {
    marginTop: '14px',
  },
  iconPeople: {
    color: 'inherit',
    fontSize: 20,
  },
  numberOfPeople: {
    ...theme.style.flexCenter,
    justifyContent: 'center',
    color: theme.app.background.dark,
  },
})

const CirclesListItem = ({ circle, classes }) => (
  <Card>
    <div className={classes.header}>
      <AvatarWithDefault
        src={circle.icon}
        placeholder={circle.name}
        size={30}
        className={classes.avatar}
      />

      <Link to={Link.getRoute('CIRCLE')} params={{ circleId: circle.id }}>
        <Typography component="headline" className={classes.title}>
          {circle.name}
        </Typography>
      </Link>
    </div>

    <div className={classes.meta}>
      <CirclesListItemFollowedByMe
        circle={circle}
        onClick={() => {
          /* TODO */
        }}
      />
      <span className={classes.numberOfPeople}>
        {circle.numberOfMember}
        &nbsp;
        <IconPeople className={classes.iconPeople} />
      </span>
    </div>

    <CardContent>
      <Link to={Link.getRoute('CIRCLE')} params={{ circleId: circle.id }}>
        <div
          className="pointer readable"
          style={{
            fontSize: '18px',
          }}
        >
          {circle.description}
        </div>
      </Link>
    </CardContent>
  </Card>
)

CirclesListItem.propTypes = {
  circle: PropTypes.object.isRequired,
}

export default withStyles(styles)(CirclesListItem)
