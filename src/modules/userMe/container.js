import { createSimpleContainer } from 'reacticoon/container'

import UserMeModule from 'modules/userMe'

const UserMeContainer = createSimpleContainer('UserMeContainer', {
  module: UserMeModule,
  apiCallAction: 'fetchUserMe',
  selectors: 'fetchUserSelectors',
})

export default UserMeContainer
