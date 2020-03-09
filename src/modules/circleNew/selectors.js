import { createApiSelectors } from 'reacticoon/selector'

const postCircleSelectors = createApiSelectors('App::CircleNewModule')

export const isPendingPostCircle = postCircleSelectors.isPending
export const getDataPostCircle = postCircleSelectors.getData
export const getPostCircleError = postCircleSelectors.getError
