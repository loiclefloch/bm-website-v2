import { createApiSelectors } from 'reacticoon/selector'

const postBookSelectors = createApiSelectors('App::BookNewModule')

export const isPendingPostBook = postBookSelectors.isPending
export const getDataPostBook = postBookSelectors.getData
export const getPostBookError = postBookSelectors.getError
