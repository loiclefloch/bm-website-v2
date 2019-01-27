import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import ButtonTagLink from 'components/ButtonTagLink'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2,
  },
  list: {},
  listItem: {
    marginRight: theme.spacing.unit,
  },
  footer: {
    marginTop: theme.spacing.unit,
  },
})

const tags = [
  {
    id: 1,
    name: 'Product Design',
  },
  {
    id: 2,
    name: 'UX',
  },
  {
    id: 3,
    name: 'React & Redux',
  },
]

const SidebarTagsView = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.list}>
      {tags.map(tag => (
        <ButtonTagLink
          key={tag.id}
          // TODO: link to tag page
          //to={}
          className={classes.listItem}
        >
          {tag.name}
        </ButtonTagLink>
      ))}
    </div>

    <div className={classes.footer} />
  </div>
)

export default withStyles(styles)(SidebarTagsView)
