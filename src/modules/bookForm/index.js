import { createForm } from 'reacticoon-plugins/reacticoon-plugin-form/src'

import { notEmpty } from 'reacticoon-plugins/reacticoon-plugin-validation/src'

const defaultData = {
  name: null,
  description: null,
}

const validationRules = () => ({
  name: [[notEmpty, 'name is required']],
  description: [[notEmpty, 'description is required']],
})

const bookmarkForm = createForm('Book::FORM::CREATE', validationRules, defaultData)

export default bookmarkForm
