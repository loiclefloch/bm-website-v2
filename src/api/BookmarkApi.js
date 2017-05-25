import ApiEndpoints from '../config/ApiEndpoints'
import Config from '../config/Config'

import BookmarksListSchema from './schemas/BookmarksListSchema'
import BookmarkSchema from './schemas/BookmarkSchema'

const BookmarkApi = {

  // TODO: Constants
  getBookmarks: (page = 1, limit = 30) => {
    return {
      type: 'GET',
      schema: BookmarksListSchema,
      endpoint: ApiEndpoints.BOOKMARKS,
    }
  },

  getBookmark: (bookmarkId: string) => {
    return {
      type: 'GET',
      schema: BookmarkSchema,
      endpoint: ApiEndpoints.BOOKMARK,
      params: {
        bookmarkId
      }
    }
  }

}

export default BookmarkApi
