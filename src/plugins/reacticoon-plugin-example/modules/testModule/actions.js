import createAction from '../../../../modules/reacticoon/action/createAction'

//
// we create an action, that receive a single argument `totoValue`
//
export const testAction = createAction('ReacticoonPluginExample::testAction', (totoValue = 42) => ({
  toto: totoValue,
}))
