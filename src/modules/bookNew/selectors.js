import { createApiSelectors } from 'reacticoon/selector'

const postBookSelectors = createApiSelectors('App::BookNewModule')

export const isFetchingPostBook = postBookSelectors.isFetching
export const getDataPostBook = postBookSelectors.getData
export const getPostBookError = postBookSelectors.getError
