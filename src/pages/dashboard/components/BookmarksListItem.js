import React from 'react'
import PropTypes from 'prop-types'

import isEmpty from 'lodash/isEmpty'

import { ListItem } from 'material-ui/List';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'
import AccessTimeIcon from 'material-ui/svg-icons/device/access-time';
import { AvatarWithDefault } from '../../../components/avatar'

const style = {
  title: {
    display: 'inline-block',
    padding: '0 8px'
  },
  icon: {
    marginTop: '14px'
  }
}

const Icon = ({ bookmark }) => {
  const props = {
    size: 30,
    style: style.icon,
  }

  return (
    <AvatarWithDefault
      src={bookmark.icon}
      placeholder={bookmark.domain}
    />
  )
}

const AuthorAvatar = ({ authorName, authorAvatar }) => {
  const props = {
    size: 30,
    style: style.icon,
  }

  return (
    <AvatarWithDefault
      src={authorAvatar}
      placeholder={authorName}
    />
  )
}

const Meta = ({ websiteInfo })  => {
  if (!websiteInfo || !websiteInfo.meta) {
    return (null)
  }
  const meta = websiteInfo.meta
  return (
    <CardText>
      <AuthorAvatar
        author={websiteInfo.author}
        authorAvatar={websiteInfo.authorAvatar}
      />
      {websiteInfo.author}
    </CardText>
  )
}

const BookmarksListItem = ({ bookmark, actions }) => {
  return (
    <ListItem
      onClick={() => actions.showBookmark(bookmark)}
    >
      <Card>
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
        <CardText>
          {bookmark.description}
        </CardText>

        <Meta
          websiteInfo={bookmark.websiteInfo}
        />
      </Card>
    </ListItem>
  )
}

BookmarksListItem.propTypes = {
  bookmark: PropTypes.object.isRequired,
}

export default BookmarksListItem
