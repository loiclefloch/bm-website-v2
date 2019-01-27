import { createApiReducer } from 'reacticoon/reducer'
import { postCircle } from './actions'

const circleNewReducer = createApiReducer(postCircle)

export default circleNewReducer
