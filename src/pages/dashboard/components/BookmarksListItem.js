import React from 'react'
import PropTypes from 'prop-types'

import isEmpty from 'lodash/isEmpty'

import { ListItem } from 'material-ui/List';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'
import FontAwesome from 'react-fontawesome'
import { PeopleAvatar } from '../../../components/avatar'

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
    <PeopleAvatar
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
    <PeopleAvatar
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
                  <FontAwesome
                    name='clock-o'
                    size='1x'
                  />
                  &nbsp;
                  {bookmark.readingTime} minutes
                  &nbsp;
                  - {bookmark.domain}
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
