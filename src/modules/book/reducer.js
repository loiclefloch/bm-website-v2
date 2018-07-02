import { createApiReducer } from 'reacticoon/reducer'
import { fetchBook } from './actions'

const bookReducer = createApiReducer(fetchBook)

export default bookReducer
