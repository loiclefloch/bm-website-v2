import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'

import AddTagBtn from '../../../components/tag/AddTagBtn'
import Tag from '../../../components/tag/Tag'

const TagsList = ({ bookmark, tags, onSelectedTagsChange })  => {
  const selectedTags = bookmark.tags

  return (
    <div
      className="u-height28 u-flexCenter"
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
        tags={tags}
        selectedTags={selectedTags}
        onValidate={onSelectedTagsChange}
      />
    </div>
  )
}

TagsList.propTypes = {
  /**
   * @param tags
   * @type {Function}
   */
  onSelectedTagsChange: PropTypes.func.isRequired,
}

export default TagsList
