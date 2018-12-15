import React from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/map'

import { withStyles } from '@material-ui/core/styles'
import AddTagBtn from '../../../components/tag/AddTagBtn'
import Tag from '../../../components/tag/Tag'

const styles = theme => ({
  root: {
    height: 28,
    marginLeft: theme.spacing.unit,
    ...theme.style.flexCenter,
  },
  tagRoot: {
    marginRight: 15,
    fontSize: 13,
  },
})

const TagsList = ({ bookmark, tags, classes }) => {
  const selectedTags = bookmark.tags

  return (
    <div className={classes.root}>
      {map(selectedTags, tag => <Tag key={tag.id} tag={tag} classes={{ root: classes.tagRoot }} />)}
      <AddTagBtn bookmark={bookmark} tags={tags} selectedTags={selectedTags} />
    </div>
  )
}

TagsList.defaultProps = {
  tags: [],
}

TagsList.propTypes = {
  bookmark: PropTypes.object.isRequired,

  tags: PropTypes.array.isRequired,

  style: PropTypes.object,

  className: PropTypes.string,
}

export default withStyles(styles)(TagsList)
