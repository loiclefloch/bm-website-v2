/**
 * 
 */
export const BookmarkCrawlerStatus = {
  /**
   * Could not retrieve the content
   */
  NO_RETRIEVE: 0,

  /**
   * Retrieved content, but there is some issues with
   * Can be set manually by the front
   */
  CONTENT_BUG: 1,

  /**
   * Content correctly retrieved
   */
  RETRIEVED: 2,
}
