import { createApiReducer } from 'reacticoon/reducer'
import { postBook } from './actions'

const bookNewReducer = createApiReducer(postBook)

export default bookNewReducer
