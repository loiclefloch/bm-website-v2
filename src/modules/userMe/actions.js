import { createApiCallAction } from 'reacticoon/action'
import UserApi from '../../api/UserApi'

//
// Actions
//

export const fetchMe = createApiCallAction('ME::FETCH', UserApi.getMe())
