import { createApiReducer } from 'reacticoon/reducer'
import { fetchUserList } from './actions'

const userListReducer = createApiReducer(fetchUserList)

export default userListReducer
