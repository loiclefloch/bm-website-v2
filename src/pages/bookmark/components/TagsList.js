import React from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'

import { withStyles } from '@material-ui/core/styles'
import AddTagBtn from '../../../components/tag/AddTagBtn'
import Tag from '../../../components/tag/Tag'

const styles = theme => ({
  root: {
  },
  list: {
    height: 28,
    ...theme.style.flexCenter,
  },
  tagRoot: {
    marginRight: 15,
    fontSize: 13,
  },
})

const TagsList = ({ bookmark, tags, classes, addTagBtn }) => {
  const selectedTags = bookmark.tags

  return (
    <div className={classes.root}>
      {isEmpty(selectedTags) && <em>There is no tags yet.</em>}

      <div className={classes.list}>
        {map(selectedTags, tag => (
          <Tag key={tag.id} tag={tag} classes={{ root: classes.tagRoot }} />
        ))}
      </div>

      <AddTagBtn bookmark={bookmark} tags={tags} selectedTags={selectedTags} children={addTagBtn} />
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
