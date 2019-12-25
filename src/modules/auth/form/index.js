import { createForm } from 'reacticoon-plugins/reacticoon-form/src'

import { notEmpty } from 'reacticoon-plugins/reacticoon-validation/src'

const defaultData = {
  username: null,
  password: null,
}

const validationRules = () => ({
  username: [
    [notEmpty, ''],
  ],
  password: [
    [notEmpty, ''],
  ]
})

const loginForm = createForm(
  'Auth::FORM::LOGIN',
  validationRules,
  defaultData,
)

export default loginForm
