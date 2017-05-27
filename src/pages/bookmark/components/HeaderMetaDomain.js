import React from 'react'
import { AvatarWithDefault } from '../../../components/avatar'
import { CardText } from 'material-ui/Card'


const HeaderMetaDomain = ({ bookmark }) => {

  return (
    <CardText>
      {bookmark.icon &&
        <AvatarWithDefault
          src={bookmark.icon}
          placeholder={bookmark.domain}
          size='20px'
          style={{
              verticalAlign: 'middle',
              display: 'inline-block',
          }}
        />
      }

      <a
        href={bookmark.url}
        target="_blank"
        className="link"
        rel="noopener noreferrer"
        style={{
            verticalAlign: 'middle',
            display: 'inline-block',
            paddingLeft: '10px',
        }}
      >
        {bookmark.domain}
      </a>
    </CardText>
  )
}

export default HeaderMetaDomain
