import { createSelector } from 'reselect'

import isEmpty from 'lodash/isEmpty'

//
// Bookmarks
//

// input-selectors. They are created as ordinary non-memoized selector functions because they do
// not transform the data they select
const getBookmarksMap = (state) => state.entities.bookmarksList.getIn([ 'data', 'bookmarks' ])

// memoized selector. It takes getBookmarksMap as input-selectors, and a transform function that
// calculates the data
const getBookmarks = createSelector(
    getBookmarksMap,
    (resultMap) => resultMap && resultMap.toArray()
);

export const getBookmarksAsList = createSelector(
  [ getBookmarks ],
  (bookmarks) => {
    return bookmarks
    // .filter(bookmark => {
    //   return true
    // })
    .map(bookmark => {
      return formatBookmark(bookmark.toJS())
    })

  }
)

export const getBookmarksSortedByDate = createSelector(
  [ getBookmarksAsList ],
  (bookmarks) => {
    return bookmarks.sort((a, b) => {
      return b.id - a.id // TODO: createdAt
    })
  }
)

//
// Fetching bookmarksList
//

const getBookmarksIsFetching = (state) => state.entities.bookmarksList.get('isFetching')

export const isFetchingBookmarks = createSelector(
    getBookmarksIsFetching,
    (isFetching) => isFetching
)


//
// Bookmark
//

const getDomainUrl = (url) => {
  if (isEmpty(url)) {
    return ''
  }
  let domain = ''

  // find & remove protocol (http, ftp, etc.) and get domain
  if (url.indexOf('://') > -1) {
    domain = url.split('/')[2]
  } else {
    domain = url.split('/')[0]
  }

  // find & remove port number
  domain = domain.split(':')[0]

  return domain
}

/**
   * Return an url without the http(s)://
   * @param url
   * @returns {*}
   */
const getPrettyUrl = (url) => {
  if (isEmpty(url)) {
    return ''
  }
  if (url.indexOf('https://') === 0) {
    return url.slice('https://'.length)
  }
  if (url.indexOf('http://') === 0) {
    return url.slice('http://'.length)
  }
  return url
}

const setBookmarkDomain = (bookmark) => {
  bookmark.domain = getDomainUrl(bookmark.url)
  return bookmark
}

const setBookmarkPrettyUrl = (bookmark) => {
  bookmark.prettyUrl = getPrettyUrl(bookmark.url)
  return bookmark
}

const setBookmarkDefaultName = (bookmark) => {
  let name = bookmark.name;
  if (isEmpty(name)) {
    if (!isEmpty(this.title)) {
      name = this.title
    } else {
      name = getPrettyUrl(bookmark.url)
    }
  }
  bookmark.name = name

  return bookmark
}

const formatBookmark = (bookmark) => {
  bookmark = setBookmarkDomain(bookmark)
  bookmark = setBookmarkPrettyUrl(bookmark)
  bookmark = setBookmarkDefaultName(bookmark)
  return bookmark
}
