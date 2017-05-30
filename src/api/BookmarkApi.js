import ApiEndpoints from '../config/ApiEndpoints'

import BookmarksListSchema from './schemas/BookmarksListSchema'
import BookmarkSchema from './schemas/BookmarkSchema'
import AddBookmarkSchema from './schemas/AddBookmarkSchema'

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
  },

  postBookmark: (bookmark) => {
    return {
      type: 'POST',
      schema: AddBookmarkSchema,
      endpoint: ApiEndpoints.BOOKMARKS,
      data: bookmark,
    }
  },

}

export default BookmarkApi
