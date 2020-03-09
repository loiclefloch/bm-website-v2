import React from 'react'

import Page from 'components/Page'

/**
 * Empty page displayed while loading the real page.
 */
const PageLoader = () => <Page title="" isPending={false} />

export default PageLoader
