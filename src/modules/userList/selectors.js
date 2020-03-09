import { createApiSelectors } from 'reacticoon/selector'

const userListSelectors = createApiSelectors('App::UserListModule')

export const isPendingUserList = userListSelectors.isPending
export const getFetchUserListData = userListSelectors.getData
export const getFetchUserListError = userListSelectors.getError
