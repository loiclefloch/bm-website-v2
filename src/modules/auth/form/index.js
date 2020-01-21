import { createForm } from 'reacticoon-plugins/reacticoon-plugin-form/src'

import { notEmpty } from 'reacticoon-plugins/reacticoon-plugin-validation/src'

const defaultData = {
  username: null,
  password: null,
}

const validationRules = () => ({
  username: [[notEmpty, '']],
  password: [[notEmpty, '']],
})

const loginForm = createForm('Auth::FORM::LOGIN', validationRules, defaultData)

export default loginForm
