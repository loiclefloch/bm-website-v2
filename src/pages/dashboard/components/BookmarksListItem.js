import React from 'react'
import PropTypes from 'prop-types'

import isEmpty from 'lodash/isEmpty'

import { ListItem } from 'material-ui/List';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

const BookmarksListItem = ({ bookmark, actions }) => {

  return (
    <ListItem
      onClick={() => console.log('click') && actions.showBookmark(bookmark)}
      primaryText={
        <span>{bookmark.id} - {bookmark.title}</span>
      }
      secondaryText={
        <p>
          {bookmark.description}

          {!isEmpty(bookmark.description) &&
            <span>-- </span>
          }

          <span style={{color: darkBlack}}>
            {bookmark.url}
          </span>
        </p>
      }
    />
  )
}

BookmarksListItem.propTypes = {
  bookmark: PropTypes.object.isRequired,
}

export default BookmarksListItem
