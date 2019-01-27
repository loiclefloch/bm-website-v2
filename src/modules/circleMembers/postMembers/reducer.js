import { createApiReducer } from 'reacticoon/reducer'
import { postCircleMembers } from './actions'

const circleMembersReducer = createApiReducer(postCircleMembers)

export default circleMembersReducer
