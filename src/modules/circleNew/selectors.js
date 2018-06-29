import { createApiSelectors } from 'reacticoon/selector'

const postCircleSelectors = createApiSelectors('App::CircleNewModule')

export const isFetchingPostCircle = postCircleSelectors.isFetching
export const getDataPostCircle = postCircleSelectors.getData
export const getPostCircleError = postCircleSelectors.getError
