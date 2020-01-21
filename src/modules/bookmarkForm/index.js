import { createForm } from 'reacticoon-plugins/reacticoon-plugin-form/src'

import { notEmpty } from 'reacticoon-plugins/reacticoon-plugin-validation/src'

const defaultData = {
  url: null,
  name: null,
}

const validationRules = () => ({
  url: [[notEmpty, '']],
})

const bookmarkForm = createForm('Bookmark::FORM::CREATE', validationRules, defaultData)

export default bookmarkForm
