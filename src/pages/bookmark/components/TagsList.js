import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'

import AddTagBtn from '../../../components/tag/AddTagBtn'
import Tag from '../../../components/tag/Tag'

const TagsList = ({ bookmark, tags, style, className })  => {
  const selectedTags = bookmark.tags

  return (
    <div
      className={`u-height28 u-flexCenter ${className}`}
      style={style}
    >
      {map(selectedTags, (tag) => {
        return (
          <Tag
            key={tag.id}
            tag={tag}
            className="u-marginLeft5 u-fontSize13"
          />
        )
      })}
      <AddTagBtn
        bookmark={bookmark}
        tags={tags}
        selectedTags={selectedTags}
      />
    </div>
  )
}

TagsList.defaultProps = {
  tags: [],
  style: {},
  className: '',
}

TagsList.propTypes = {
  bookmark: PropTypes.object.isRequired,

  tags: PropTypes.array.isRequired,

  style: PropTypes.object,

  className: PropTypes.string,
}

export default TagsList
