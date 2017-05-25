import React from 'react'
import PropTypes from 'prop-types'

import { List } from 'material-ui/List';
import CirclesListItem from './CirclesListItem'
import CircularProgress from 'material-ui/CircularProgress'
import { Grid, Row, Col } from 'react-flexbox-grid';
import LoadingList from '../../../../components/loading/LoadingList'


const style = {
  container: {
    marginTop: '30px'
  }
}

const ItemOnCol = ({ circle, actions }) => {
  return (
    <Col
      xs={6}
      md={6}
      key={circle.id}
    >
      <CirclesListItem
        key={circle.id}
        circle={circle}
        actions={actions}
      />
    </Col>
  )
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

      <Grid fluid>
        <Row>
          {circles.map(circle => {
            return (
              <ItemOnCol
                circle={circle}
                actions={actions}
              />
            )
          })}
        </Row>
      </Grid>
    </List>
  )
}

CirclesList.propTypes = {
  circles: PropTypes.array.isRequired,
}

export default CirclesList
