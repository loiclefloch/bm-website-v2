import { createForm } from 'reacticoon-plugins/reacticoon-form/src'

import { notEmpty } from 'reacticoon-plugins/reacticoon-validation/src'

const defaultData = {
  url: null,
  name: null,
}

const validationRules = () => ({
  url: [
    [notEmpty, ''],
  ],
})

const bookmarkForm = createForm(
  'Bookmark::FORM::CREATE',
  validationRules,
  defaultData,
)

export default bookmarkForm
