import { createForm } from '../../plugins/reacticoon-form'

import { notEmpty } from '../../plugins/reacticoon-validation'

const defaultData = {
  name: null,
  description: null,
}

const validationRules = () => ({
  name: [
    [notEmpty, 'name is required'],
  ],
  description: [
    [notEmpty, 'description is required'],
  ]
})

const bookmarkForm = createForm(
  'CIRCLE::FORM::CREATE',
  validationRules,
  defaultData,
)

export default bookmarkForm