import { createForm } from '../../plugins/reacticoon-form'

import { notEmpty } from '../../plugins/reacticoon-validation'

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
