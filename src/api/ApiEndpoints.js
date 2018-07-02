const ApiEndpoints = {
  LOGIN: '/oauth/v2/token',

  BOOKMARKS: '/bookmarks',

  BOOKMARK: '/bookmarks/:bookmarkId',

  BOOKMARK_TAGS: '/bookmarks/:bookmarkId/tags',

  TAGS: '/tags',

  SEARCH_BOOKMARKS: '/search/bookmarks',

  DATA: '/data',

  CIRCLES: '/circles',

  USER_CIRCLE_MINE: 'api/users/me/circles/mine',

  USER_CIRCLES: 'api/users/:userId/circles',

  CIRCLE: '/circles/:circleId',

  CIRCLE_MEMBERS: '/circles/:circleId/members',

  BOOKS: '/circles/:circleId/books',

  BOOK: '/circles/:circleId/books/:bookId',
  
  BOOK_BOOKMARKS: '/circles/:circleId/books/:bookId/bookmarks',

  ME: '/users/me',

  USERS: '/users',

  USER: '/users/:userId',
};

export default ApiEndpoints;
