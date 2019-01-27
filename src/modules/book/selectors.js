import { createApiSelectors } from 'reacticoon/selector'

const fetchBookSelectors = createApiSelectors('App::BookModule') 

export const isFetchingBook = fetchBookSelectors.isFetching
export const getFetchBookData = fetchBookSelectors.getData
export const getFetchBookError = fetchBookSelectors.getError