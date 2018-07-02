import { createApiSelectors } from 'reacticoon/selector'

const postCircleMembersSelectors = createApiSelectors('App::PostCircleMembersModule')

export const isFetchingPostCircleMembers = postCircleMembersSelectors.isFetching
export const getDataPostCircleMembers = postCircleMembersSelectors.getData
export const getPostCircleMembersError = postCircleMembersSelectors.getError
