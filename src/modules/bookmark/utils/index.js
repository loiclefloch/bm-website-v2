import isEmpty from 'lodash/isEmpty'
import isNil from 'lodash/isNil'

export const formatBookmark = (bookmark) => {
  if (isNil(bookmark)) {
    return null
  }
  bookmark = setBookmarkDomain(bookmark)
  bookmark = setBookmarkPrettyUrl(bookmark)
  bookmark = setBookmarkDefaultName(bookmark)
  bookmark = setType(bookmark)
  bookmark = pretifytContentContent(bookmark)
  return bookmark
}

const BookmarkType = {
  WEBSITE: 0, // default
  ARTICLE: 1,
  VIDEO: 2,
  MUSIC: 3,
  CODE: 4, // for example: github code page or project
  GAME: 5,
  SLIDE: 6
};

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
    if (!isEmpty(bookmark.title)) {
      name = bookmark.title
    } else {
      name = getPrettyUrl(bookmark.url)
    }
  }
  bookmark.name = name

  return bookmark
}

const setType = (bookmark) => {
  bookmark.isTypeVideo = bookmark.type === BookmarkType.VIDEO
  bookmark.isTypeWebsite = bookmark.type === BookmarkType.WEBSITE
  bookmark.isTypeArticle = bookmark.type === BookmarkType.ARTICLE
  bookmark.isTypeMusic = bookmark.type === BookmarkType.MUSIC
  bookmark.isTypeCode = bookmark.type === BookmarkType.CODE
  bookmark.isTypeGame = bookmark.type === BookmarkType.GAME
  bookmark.isTypeSlide = bookmark.type === BookmarkType.SLIDE

  return bookmark
}

const pretifytContentContent = (bookmark) => {
  // source: https://stackoverflow.com/questions/12412388/regex-to-remove-all-styles-but-leave-color-and-background-color-if-they-exist
  //
  // (<[^>]+\s+)                           Capture start tag to style attr ($1).
  // (?:                                   CASE 1:
  //
  //     style\s*=\s*"                     Match style attribute.
  //
  //     (?!                               Negative lookahead assertion, meaning:
  //         (?:|[^"]*[;\s])               If color found, go to CASE 2.
  //         color\s*:[^";]*
  //     )
  //
  //     (?!
  //         (?:|[^"]*[;\s])               Negative lookahead assertion, meaning:
  //         background-color\s*:[^";]*    If background-color found, go to CASE 2.
  //     )
  //
  //     [^"]*"                            Match the rest of the attribute.
  //
  // |                                     CASE 2:
  //
  //     (style\s*=\s*")                   Capture style attribute ($2).
  //
  //     (?=                               Positive lookahead.
  //         (?:|[^"]*[;\s])
  //         (color\s*:[^";]*)             Capture color style ($3),
  //     )?                                if it exists.
  //
  //     (?=                               Positive lookahead.
  //         (?:|[^"]*)
  //         (;)                           Capture semicolon ($4),
  //     )?                                if it exists.
  //
  //     (?=                               Positive lookahead.
  //         (?:|[^"]*[;\s])
  //         (background-color\s*:[^";]*)  Capture background-color style ($5),
  //     )?                                if it exists.
  //
  //     [^"]*(")                          Match the rest of the attribute,
  //                                       capturing the end-quote ($6).
  // )
  //
  const regex = /(<[^>]+\s+)(?:style\s*=\s*"(?!(?:|[^"]*[;\s])color\s*:[^";]*)(?!(?:|[^"]*[;\s])background-color\s*:[^";]*)[^"]*"|(style\s*=\s*")(?=(?:|[^"]*[;\s])(color\s*:[^";]*))?(?=(?:|[^"]*)(;))?(?=(?:|[^"]*[;\s])(background-color\s*:[^";]*))?[^"]*("))/gi

  if (isEmpty(bookmark.content)) {
    return bookmark
  }

  const contentWithoutStyle = bookmark.content.replace(
    regex,
    (match, $1, $2, $3, $4, $5, $6, offset, string) => {
      return $1 + ($2 ? $2       : '') + ($3 ? $3 + ';' : '')
      + ($5 ? $5 + ';' : '') + ($2 ? $6       : '')
    }
  )

  bookmark.content = contentWithoutStyle
  return bookmark
}
