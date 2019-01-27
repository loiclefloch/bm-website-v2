import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { AvatarWithDefault } from 'components/avatar'
import Divider from '@material-ui/core/Divider'
import CardContent from '@material-ui/core/CardContent'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import ListItemMeta from './ListItemMeta'
import TagsList from 'app/pages/bookmark/components/TagsList'

const styles = theme => ({
  root: {
    position: 'absolute',
    width: 300,
    left: 300,
  },
  divider: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  content: {},
  tagsList_root: {
    marginTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit,
  },
})

const Icon = ({ bookmark }) => {
  return <AvatarWithDefault src={bookmark.icon} placeholder={bookmark.domain} />
}

class BookmarkItemDetail extends React.Component {
  render() {
    const { bookmark, classes } = this.props

    return (
      <Card className={classes.root}>
        <CardContent>

          <Icon bookmark={bookmark} />

          <AccessTimeIcon
            style={{
              height: '18px',
              marginTop: '2px',
              verticalAlign: 'middle',
              // trick to use the parent color
              color: 'currentColor',
            }}
          />
          &nbsp;
          {bookmark.readingTime} min

          <Divider classes={{ root: classes.divider }} />

          <h3>Books</h3>
          {/* TODO: books list */}

          <h3>Tags</h3>
          <TagsList classes={{ root: classes.tagsList_root }} bookmark={bookmark} />

          <ListItemMeta websiteInfo={bookmark.websiteInfo} />
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(BookmarkItemDetail)
