import isEmpty from 'lodash/isEmpty'

export const formatBookmark = (bookmark) => {
  bookmark = setBookmarkDomain(bookmark)
  bookmark = setBookmarkPrettyUrl(bookmark)
  bookmark = setBookmarkDefaultName(bookmark)
  return bookmark
}

//
// Private
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
