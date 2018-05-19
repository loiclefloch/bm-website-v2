import React from 'react'

import BookmarkForm from '../../../modules/bookmarkForm'
import { withForm } from '../../../plugins/reacticoon-form'
import TextField from 'material-ui/TextField'

const FormContent = ({ formData, onChange }) => (
  <div>
    <TextField
      floatingLabelText="url"
      className="u-minWidth360"
      value={formData.url}
      onChange={event => onChange('url', event.target.value)}
    />

    <TextField
      floatingLabelText="name"
      className="u-minWidth360"
      value={formData.name}
      onChange={event => onChange('name', event.target.value)}
    />
  </div>
)

export default withForm(BookmarkForm)(FormContent)
