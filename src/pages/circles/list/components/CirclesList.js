import React from 'react'
import PropTypes from 'prop-types'

import { List } from 'material-ui/List';
import CirclesListItem from './CirclesListItem'
import CircularProgress from 'material-ui/CircularProgress'
import LoadingList from '../../../../components/loading/LoadingList'

const style = {
  container: {
    marginTop: '30px'
  }
}

const CirclesList = ({ circles, isFetching, actions }) => {
  return (
    <List
      style={style.container}
    >

      {isFetching &&
        <LoadingList
          listEmpty={circles}
        />
      }

      {circles.map(circle => {
        return (
          <CirclesListItem
            key={circle.id}
            circle={circle}
            actions={actions}
          />
        )
      })}
    </List>
  )
}

CirclesList.propTypes = {
  circles: PropTypes.array.isRequired,
}

export default CirclesList
