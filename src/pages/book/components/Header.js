import React from 'react'

import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import ButtonLink from 'components/ButtonLink'

const styles = theme => ({})

const Header = ({ book, classes }) => (
  <div>
    <Typography variant="headline">{book.name}</Typography>

    <Divider />

    <Typography variant="subheading" className={classes.root}>
      {book.description}
    </Typography>

    <ButtonLink
      to={ButtonLink.getRoute('CIRCLE')}
      params={{
        circleId: book.owner.id,
      }}
    >
      Go back to circle
    </ButtonLink>
  </div>
)

export default withStyles(styles)(Header)
