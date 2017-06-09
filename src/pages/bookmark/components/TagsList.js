import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'

import AddTagBtn from '../../../components/tag/AddTagBtn'
import Tag from '../../../components/tag/Tag'

const TagsList = ({ bookmark, onSelectedTagsChange })  => {
  const { tags } = bookmark

  return (
    <div
      className="u-height28"
    >
      {map(tags, (tag) => {
        return (
          <Tag
            key={tag.id}
            tag={tag}
            className="u-marginLeft5 u-fontSize13"
          />
        )
      })}
      <AddTagBtn
        tags={tags} // TODO
        selectedTags={tags}
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
