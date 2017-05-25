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

const renderIcon = circle => {
  const props = {
    size: 30,
    style: style.icon,
  }

  if (!isEmpty(circle.icon)) {
    return (
      <Avatar
        src={circle.icon}
        {...props}
      />
    )
  }

  return (
    <Avatar
      {...props}
    >
      {circle.name[0]}
    </Avatar>
  )
}

const CirclesListItem = ({ circle, actions }) => {
  return (
    <ListItem
      onClick={() => actions.showCircle(circle)}
    >
      <Card>
        <CardHeader
          avatar={renderIcon(circle)}
          title={
            <CardTitle
              title={circle.name}
              subtitle={
                circle.description
              }
              style={style.title}
            />
          }
        >
        </CardHeader>
      </Card>
    </ListItem>
  )
}

CirclesListItem.propTypes = {
  circle: PropTypes.object.isRequired,
}

export default CirclesListItem
