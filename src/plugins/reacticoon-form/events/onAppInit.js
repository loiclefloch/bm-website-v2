import { getPluginConfig } from '../../../modules/reacticoon/plugin'

import invariant from 'invariant'
import isNil from 'lodash/isNil'
import isFunction from 'lodash/isFunction'

import { getStore } from '../../../modules/reacticoon/store'
import { registerForm } from '../modules/form/actions'

const onAppInit = () => {
  const config = getPluginConfig('ReacticoonPluginForm')
  console.info('ReacticoonPluginForm config: ', config)

  invariant(!isNil(config.forms), `[ReacticoonPluginForm] Missing 'forms' configuration`)

  config.forms.forEach(formConfig => {
    const { form, options } = formConfig

    invariant(
      isNil(form.default) || !isFunction(form.getDefault),
      `[ReacticoonPluginForm] form ${form.type} default must be a function named getDefault`
    )

    invariant(!isNil(form.type), `[ReacticoonPluginForm] 'type' is required`)

    const formState = {
      formData: form.getDefault(),
      options,
    }

    getStore().dispatch(registerForm(form.type, formState))
  })
}

export default onAppInit
