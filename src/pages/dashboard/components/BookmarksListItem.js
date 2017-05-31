import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'

import { ListItem } from 'material-ui/List';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import AccessTimeIcon from 'material-ui/svg-icons/device/access-time';
import { AvatarWithDefault } from '../../../components/avatar'

const style = {
  title: {
    display: 'inline-block',
    padding: '0 8px',
  },
  icon: {
    marginTop: '14px',
  }
}

const Icon = ({ bookmark }) => {
  return (
    <AvatarWithDefault
      src={bookmark.icon}
      placeholder={bookmark.domain}
    />
  )
}

const AuthorAvatar = ({ author, authorAvatar }) => {
  if (isEmpty(author)) {
    return (null)
  }
  return (
    <AvatarWithDefault
      src={authorAvatar}
      placeholder={author}
    />
  )
}

const Meta = ({ websiteInfo })  => {
  const { author, authorAvatar } = websiteInfo
  if (!websiteInfo || (isEmpty(author) && isEmpty(authorAvatar))) {
    return (null)
  }
  return (
    <CardText>
      <div
        style={{
          verticalAlign: 'middle',
          display: 'inline-block',
        }}
      >
        <AuthorAvatar
          author={author}
          authorAvatar={authorAvatar}
        />
      </div>
      <div
        style={{
          verticalAlign: 'middle',
          display: 'inline-block',
          paddingLeft: '10px',
        }}
      >
        {author}
      </div>
    </CardText>
  )
}

const BookmarksListItem = ({ bookmark, onShowBookmark }) => {
  return (
    <Card
      onClick={() => onShowBookmark(bookmark)}
      style={{
        marginBottom: '30px',
      }}
    >
      <CardHeader
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
        >
          {bookmark.description}
        </CardText>
      }

      <Meta
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
