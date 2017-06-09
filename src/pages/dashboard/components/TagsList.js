import React from 'react'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'

const Tag = ({ tag }) => {

  return (
    <span
      className="u-paddingLeft5 u-paddingRight5 u-paddingTop2 u-paddingBottom2 u-marginLeft5 u-borderRadius4 u-fontSize13"
      style={{
        backgroundColor: tag.color,
        color: tag.isLightColor ? 'black' : 'white',
      }}
    >
      {tag.name}
    </span>
  )
}

const TagsList = ({ bookmark })  => {
  const { tags } = bookmark

  if (isEmpty(tags)) {
    return (null)
  }

  return (
    <div
      className="u-paddingLeft15 u-height28"
    >
      {map(tags, (tag) => {
        return (
          <Tag
            id={tag.id}
            tag={tag}
          />
        )
      })}
    </div>
  )
}

export default TagsList
