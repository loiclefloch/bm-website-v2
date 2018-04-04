import ApiEndpoints from './ApiEndpoints'

import BookmarksListSchema from './schemas/BookmarksListSchema'
import BookmarkSchema from './schemas/BookmarkSchema'
import BookmarkAddSchema from './schemas/BookmarkAddSchema'

const BookmarkApi = {

  // TODO: Constants
  getBookmarks: (page = 1, limit = 30) => {
    return {
      type: 'GET',
      schema: BookmarksListSchema,
      query: {
        page,
        limit,
      },
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
      schema: BookmarkAddSchema,
      endpoint: ApiEndpoints.BOOKMARKS,
      data: bookmark,
    }
  },

  putBookmark: bookmark => ({
    type: 'PUT',
    endpoint: ApiEndpoints.BOOKMARK,
    schema: BookmarkSchema,
    params: {
      bookmarkId: bookmark.id,
    },
    data: bookmark, 
  }),

  putBookmarkTags: (bookmark, tags) => {
    return {
      type: 'PUT',
      schema: BookmarkSchema,
      params: {
        bookmarkId: bookmark.id,
      },
      endpoint: ApiEndpoints.BOOKMARK_TAGS,
      data: {
        tags,
      },
    }
  },

}

export default BookmarkApi
