import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'reacticoon/routing'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

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

const BooksListItem = ({ circleId, book, classes }) => (
  <Card>
    <div className={classes.header}>
      <Link to={Link.getRoute('BOOK')} params={{ circleId, bookId: book.id }}>
        <Typography component="headline" className={classes.title}>
          {book.name}
        </Typography>
      </Link>
    </div>

    <div className={classes.meta} />

    <CardContent>
      <Link to={Link.getRoute('BOOK')} params={{ circleId, bookId: book.id }}>
        <div
          className="pointer readable"
          style={{
            fontSize: '18px',
          }}
        >
          {book.description}
        </div>
      </Link>
    </CardContent>
  </Card>
)

BooksListItem.propTypes = {
  book: PropTypes.object.isRequired,
}

export default withStyles(styles)(BooksListItem)
