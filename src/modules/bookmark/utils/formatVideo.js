import isNil from 'lodash/isNil'

const getYouTubeIdWithUrl = (url: string): string => {
  // http://stackoverflow.com/questions/3452546/javascript-regex-how-to-get-youtube-video-id-from-url
  const videoId = url.split('v=')[1]
  if (isNil(videoId)) {
    return null
  }
  const ampersandPosition = videoId.indexOf('&')
  if (ampersandPosition !== -1) {
    return videoId.substring(0, ampersandPosition)
  }

  return videoId
}

const formatYoutube = bookmark => {
  bookmark.isYouTubeVideo = bookmark.url.search('www.youtube.com/watch?') !== -1
  if (!bookmark.isYouTubeVideo) {
    return bookmark
  }

  bookmark.videoId = getYouTubeIdWithUrl(bookmark.url)
}

export const formatVideo = bookmark => {
  if (!bookmark.isTypeVideo) {
    return bookmark
  }

  formatYoutube(bookmark)
}
