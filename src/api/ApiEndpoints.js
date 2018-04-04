const ApiEndpoints = {
  LOGIN: '/oauth/v2/token',

  BOOKMARKS: '/bookmarks',

  BOOKMARK: '/bookmarks/:bookmarkId',

  BOOKMARK_TAGS: '/bookmarks/:bookmarkId/tags',

  TAGS: '/tags',

  SEARCH_BOOKMARKS: '/search/bookmarks',

  DATA: '/data',

  CIRCLES: '/circles',

  CIRCLE: '/circles/:circleId',

  ME: '/users/me',

  USERS: '/users',

  USER: '/users/:userId',
};

export default ApiEndpoints;
