import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'

import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import AccessTimeIcon from 'material-ui/svg-icons/device/access-time';
import { AvatarWithDefault } from '../../../components/avatar'
import ListItemMeta from './ListItemMeta'
import TagsList from '../../bookmark/components/TagsList'

const style = {
  title: {
    display: 'inline-block',
    padding: '0 8px',
  },
  icon: {
    marginTop: '14px',
  },
  card: {
    marginBottom: '30px',
  },
}

const Icon = ({ bookmark }) => {
  return (
    <AvatarWithDefault
      src={bookmark.icon}
      placeholder={bookmark.domain}
    />
  )
}


const BookmarksListItem = ({ bookmark, onShowBookmark, addTagsToBookmark }) => {
  return (
    <Card
      className="pointer"
      style={style.card}
    >
      <CardHeader
        onClick={() => onShowBookmark(bookmark)}
        avatar={
          <Icon
            bookmark={bookmark}
          />
        }
        title={
          <CardTitle
            title={bookmark.name}
            subtitle={
              <span>
                <AccessTimeIcon
                  style={{
                    height: '18px',
                    marginTop: '2px',
                    verticalAlign: 'middle',
                    // trick to use the parent color
                    color: 'currentColor',
                  }}
                />
                &nbsp;
                {bookmark.readingTime} min
                &nbsp;- {bookmark.domain}
              </span>
            }
            style={style.title}
          />
        }
      >
      </CardHeader>

      {!isEmpty(bookmark.description) &&
        <CardText
          className="readable"
          style={{
            fontSize: '14pt',
          }}
          onClick={() => onShowBookmark(bookmark)}
        >
          {bookmark.description}
        </CardText>
      }

      <TagsList
        className="u-marginLeft15 u-paddingBottom10"
        bookmark={bookmark}
      />

      <ListItemMeta
        onClick={() => onShowBookmark(bookmark)}
        websiteInfo={bookmark.websiteInfo}
      />
    </Card>
  )
}

BookmarksListItem.propTypes = {
  bookmark: PropTypes.object.isRequired,

  /**
   * @param bookmark
   */
  showBookmark: PropTypes.func.isRequired,
}

export default BookmarksListItem
