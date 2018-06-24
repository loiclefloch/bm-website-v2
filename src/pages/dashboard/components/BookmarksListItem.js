import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import Typography from '@material-ui/core/Typography'

import { Link } from 'reacticoon/routing'

import { AvatarWithDefault } from '../../../components/avatar'
import ListItemMeta from './ListItemMeta'
import TagsList from '../../bookmark/components/TagsList'

const styles = theme => ({
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    display: 'inline-block',
    padding: '0 8px',
  },
  icon: {
    marginTop: '14px',
  },
  card: {
    marginBottom: '30px',
  },
  subheadingArea: {
    display: 'flex',
    color: '#0000008a',
  },
  subheadingText: {
    color: '#0000008a',
  },
  description: {
    ...theme.app.readable,
    fontSize: '14pt',
    marginTop: theme.spacing.unit * 2,
  },
  tagsListRoot: {
    marginTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit,
  },
})

const Icon = ({ bookmark }) => {
  return <AvatarWithDefault src={bookmark.icon} placeholder={bookmark.domain} />
}

const BookmarksListItem = ({ bookmark, addTagsToBookmark, classes }) => (
  <Card className="pointer" className={classes.card}>
    <CardContent>
      {/* TODO: Use link */}
      <Link to={Link.getRoute('BOOKMARK')} params={{ bookmarkId: bookmark.id }}>
        <div className={classes.header}>
          <Icon bookmark={bookmark} />
          <Typography className={classes.title} variant="headline">
            {bookmark.name}
          </Typography>
        </div>
      </Link>
      <div className={classes.subheadingArea}>
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
        <Typography variant="subheading" className={classes.subheadingText}>
          {bookmark.readingTime} min &nbsp;- {bookmark.domain}
        </Typography>
      </div>

      {!isEmpty(bookmark.description) ? (
        <Link to={Link.getRoute('BOOKMARK')} params={{ bookmarkId: bookmark.id }}>
          <Typography className={classes.description}>{bookmark.description}</Typography>
        </Link>
      ) : null}

      <TagsList classes={{ root: classes.tagsList }} bookmark={bookmark} />

      <ListItemMeta websiteInfo={bookmark.websiteInfo} />
    </CardContent>
  </Card>
)

BookmarksListItem.propTypes = {
  bookmark: PropTypes.object.isRequired,

  /**
   * @param bookmark
   */
  showBookmark: PropTypes.func.isRequired,
}

export default withStyles(styles)(BookmarksListItem)
