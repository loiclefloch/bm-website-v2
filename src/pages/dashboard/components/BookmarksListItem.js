import React from 'react'
import PropTypes from 'prop-types'

import isEmpty from 'lodash/isEmpty'

import { ListItem } from 'material-ui/List';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
import FontAwesome from 'react-fontawesome'

const style = {
  title: {
    display: 'inline-block',
    padding: '0 8px'
  },
  icon: {
    marginTop: '14px'
  }
}

const renderIcon = bookmark => {
  const props = {
    size: 30,
    style: style.icon,
  }

  if (!isEmpty(bookmark.icon)) {
    return (
      <Avatar
        src={bookmark.icon}
        {...props}
      />
    )
  }

  return (
    <Avatar
      {...props}
    >
      {/* TODO: use website name */}
      {bookmark.url[0]}
    </Avatar>
  )
}

const BookmarksListItem = ({ bookmark, actions }) => {
  return (
    <ListItem
      onClick={() => actions.showBookmark(bookmark)}
    >
      <Card>
        <CardHeader
          avatar={renderIcon(bookmark)}
          title={
            <CardTitle
              title={bookmark.title}
              subtitle={
                <span>
                  <FontAwesome
                    name='clock-o'
                    size='1x'
                  />
                  &nbsp;
                  {bookmark.readingTime} minutes
                  &nbsp;
                  - {bookmark.url} {/* TODO: domain name */}
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
      </Card>
    </ListItem>
  )
}

BookmarksListItem.propTypes = {
  bookmark: PropTypes.object.isRequired,
}

export default BookmarksListItem
