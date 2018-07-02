import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  root: {
    textAlign: 'center',
    marginTop: '20px',
  },
  loadMoreBtn: {
    marginTop: 20,
  },
})

const LoadMore = ({ paging, onLoadMore, classes }) => {
  if (!paging) {
    return null
  }
  return (
    <div className={classes.root}>
      <Typography>
        page {paging.page} on {paging.lastPage} ({paging.total} results)
      </Typography>

      {!paging.isLastPage && (
        <Button
          color="primary"
          onClick={() => onLoadMore(paging)}
          classes={{ root: classes.loadMoreBtn }}
        >
          <Typography>Load more</Typography>
        </Button>
      )}
    </div>
  )
}

LoadMore.propTypes = {
  paging: PropTypes.object.isRequired,

  /**
   * @param paging
   */
  onLoadMore: PropTypes.func.isRequired,
}

export default withStyles(styles)(LoadMore)
