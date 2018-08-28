import React from 'react'

import classNames from 'classnames'
import ButtonLink from 'components/ButtonLink'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import BooksList from './BooksList'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 6,
    marginRight: theme.spacing.unit * 2,
    height: '100%',
  },
  rootNotDefaultCircle: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  headerArea: {},
})

const Books = ({ circle, classes }) => (
  <div
    className={classNames(classes.root, {
      [classes.rootNotDefaultCircle]: !circle.isDefaultCircle,
    })}
  >
    <div className={classes.headerArea}>
      <Typography variant="headline">Books</Typography>

      <ButtonLink to={ButtonLink.getRoute('BOOK_NEW')} params={{ circleId: circle.id }}>
        Nouveau
      </ButtonLink>
    </div>

    <BooksList circleId={circle.id} books={circle.books} />
  </div>
)

export default withStyles(styles)(Books)
