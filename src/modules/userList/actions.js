import { createApiCallAction } from 'reacticoon/action'
import UserApi from 'app/api/UserApi'

//
// Actions
//

export const fetchUserList = createApiCallAction('USER_LIST::GET', () =>
  UserApi.getUserList()
)
