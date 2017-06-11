import React from 'react'
import PropTypes from 'prop-types'

import isEmpty from 'lodash/isEmpty'

import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors'
import IconPeople from 'material-ui/svg-icons/social/people'
import FlatButton from 'material-ui/FlatButton'
import { AvatarWithDefault } from '../../../components/avatar'

import CirclesListItemFollowedByMe from './CirclesListItemFollowedByMe'

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

  return (
    <AvatarWithDefault
      src={circle.icon}
      placeholder={circle.name}
      {...props}
    />
  )
}


const CirclesListItem = ({ circle, actions }) => {
  const onShowDetail = () => actions.showCircle(circle)

  return (
    <Card>
      <CardHeader
        avatar={renderIcon(circle)}
        title={
          <CardTitle
            title={
              <div
                onClick={onShowDetail}
                className="pointer"
              >
                {circle.name}
              </div>
            }
            subtitle={
              <div
                className="u-flexCenter"
              >
                <span
                  className="u-flexCenter u-justifyContentCenter"
                >
                  {circle.numberOfMember}
                  &nbsp;
                  <IconPeople
                    style={{color:"inherit"}}
                  />
                </span>
                &nbsp;
                <CirclesListItemFollowedByMe
                  circle={circle}
                />
              </div>
            }
            style={style.title}
          />
        }
      >
      </CardHeader>
      <CardText
        onClick={onShowDetail}
        className="pointer readable"
        style={{
          fontSize: '18px',
        }}
      >
        {circle.description}
      </CardText>
    </Card>
  )
}

CirclesListItem.propTypes = {
  circle: PropTypes.object.isRequired,
}

export default CirclesListItem
