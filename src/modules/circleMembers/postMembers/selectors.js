import { createApiSelectors } from 'reacticoon/selector'

const postCircleMembersSelectors = createApiSelectors('App::PostCircleMembersModule')

export const isPendingPostCircleMembers = postCircleMembersSelectors.isPending
export const getDataPostCircleMembers = postCircleMembersSelectors.getData
export const getPostCircleMembersError = postCircleMembersSelectors.getError
