import isNil from 'lodash/isNil'
import isEmpty from 'lodash/isEmpty'
import isFunction from 'lodash/isFunction'

import invariant from 'invariant'

const createFormatter = (...functions) => {
  return (data, props = {}) => {
    invariant(isNil(props) || (typeof props === 'object'), 'format props must be an object')

    if (isNil(data)) {
      return null
    }

    let res = {...data}

    if (isEmpty(functions)) {
      return res
    }

    functions.forEach((func) => {
      invariant(isFunction(func), 'invalid paremeter pass to createFormatter')

      const funcRes = func(res, props)

      invariant(!isNil(funcRes), `[formatter] invalid return, data is nil on ${func}`)

      res = funcRes
    })

    return res
  }
}

export default createFormatter
