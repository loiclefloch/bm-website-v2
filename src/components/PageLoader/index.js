import React from 'react'

import Page from 'components/Page'

/**
 * Empty page displayed while loading the real page.
 */
const PageLoader = () => (
  <Page title="" isFetching={false} />
)

export default PageLoader