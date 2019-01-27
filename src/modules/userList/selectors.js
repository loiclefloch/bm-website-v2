import { createApiSelectors } from 'reacticoon/selector'

const userListSelectors = createApiSelectors('App::UserListModule') 

export const isFetchingUserList = userListSelectors.isFetching
export const getFetchUserListData = userListSelectors.getData
export const getFetchUserListError = userListSelectors.getError