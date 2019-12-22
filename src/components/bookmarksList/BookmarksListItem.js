import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'

import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography'

import { Link } from 'reacticoon/routing'

import BookmarkItemDetail from './BookmarkItemDetail'

const styles = theme => ({
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    display: 'inline-block',
    fontWeight: 500,
  },
  icon: {
    marginTop: '14px',
  },
  card: {
    marginBottom: theme.spacing.unit * 8,
    maxWidth: 700,
  },
  subheadingArea: {
    display: 'flex',
    marginTop: theme.spacing.unit,
    color: '#0000008a',
  },
  subheadingText: {
    color: '#0000008a',
  },
  description: {
    ...theme.app.readable,
    fontSize: '15pt',
    marginTop: theme.spacing.unit,
  },
})

class BookmarksListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showDetail: false,
    }
  }

  handleShowDetail = () => {
    this.setState({
      showDetail: true,
    })
  }

  handleHideDetail = () => {
    this.setState({
      showDetail: false,
    })
  }

  render() {
    const { bookmark, addTagsToBookmark, classes } = this.props
    const { showDetail } = this.state

    return (
      <div className={classNames('pointer', classes.card)}>
        <div>
          {/* TODO: Use link */}
          <div onMouseEnter={this.handleShowDetail} onMouseLeave={this.handleHideDetail}>
            {showDetail && <BookmarkItemDetail bookmark={bookmark} />}
            <Link to={Link.getRoute('BOOKMARK')} params={{ bookmarkId: bookmark.id }}>
              <div className={classes.header}>
                <Typography className={classes.title} variant="headline">
                  {bookmark.name}
                </Typography>
              </div>
            </Link>
          </div>

          {!isEmpty(bookmark.description) ? (
            <Link to={Link.getRoute('BOOKMARK')} params={{ bookmarkId: bookmark.id }}>
              <Typography className={classes.description}>{bookmark.description}</Typography>
            </Link>
          ) : null}

          <div className={classes.subheadingArea}>
            <Typography variant="subheading" className={classes.subheadingText}>
              {bookmark.readingTime} min &middot; {bookmark.domain}
            </Typography>
          </div>
        </div>
      </div>
    )
  }
}

BookmarksListItem.propTypes = {
  bookmark: PropTypes.object.isRequired,
}

export default withStyles(styles)(BookmarksListItem)
