import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { AvatarWithDefault } from 'components/avatar'
import Divider from '@material-ui/core/Divider'
import CardContent from '@material-ui/core/CardContent'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import AddIcon from '@material-ui/icons/Add'
import TagsList from 'app/pages/bookmark/components/TagsList'
import ListItemMeta from './ListItemMeta'

const styles = theme => ({
  root: {
    position: 'absolute',
    width: 300,
    left: 300,

    '& h3': {
      textTransform: 'uppercase',
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2,
      fontSize: 14,
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    display: 'flex',
    alignItems: 'center',
  },
  divider: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  avatar: {
    borderRadius: 0,
  },
  content: {},
  tagsList_root: {
    margin: 0,
    marginTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit,
  },
  addTagBtn: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing.unit,
  },
})

const Icon = ({ bookmark, classes }) => {
  return (
    <AvatarWithDefault
      src={bookmark.icon}
      placeholder={bookmark.domain}
      className={classes.avatar}
    />
  )
}

class BookmarkItemDetail extends React.Component {
  render() {
    const { bookmark, classes } = this.props

    return (
      <Card className={classes.root}>
        <CardContent>
          <div className={classes.header}>
            <div className={classes.time}>
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
            </div>

            <Icon bookmark={bookmark} classes={classes} />
          </div>

          <ListItemMeta websiteInfo={bookmark.websiteInfo} />

          <Divider classes={{ root: classes.divider }} />

          <h3>Books</h3>
          {/* TODO: books list */}
          <em>Books are not handled yet</em>

          <h3>Tags</h3>

          <TagsList
            classes={{ root: classes.tagsList_root }}
            bookmark={bookmark}
            addTagBtn={<div className={classes.addTagBtn}><AddIcon /> Ajouter un tag</div>}
          />
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(BookmarkItemDetail)
