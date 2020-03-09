import { createApiSelectors } from 'reacticoon/selector'

export const fetchBookSelectors = createApiSelectors('App::BookModule')

export const isPendingBook = fetchBookSelectors.isPending
export const getFetchBookData = fetchBookSelectors.getData
export const getFetchBookError = fetchBookSelectors.getError
