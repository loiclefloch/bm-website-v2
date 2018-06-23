import { createForm } from '../../../plugins/reacticoon-form'

import { notEmpty } from '../../../plugins/reacticoon-validation'

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
