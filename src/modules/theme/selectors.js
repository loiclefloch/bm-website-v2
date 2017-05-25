import { createSelector } from 'reselect'

// input-selectors. They are created as ordinary non-memoized selector functions because they do
// not transform the data they select
const getThemeOnState = (state) => state.ux.theme

const getCurrentThemeOnState = (state) => getThemeOnState(state).current

const getDefaultsThemeOnState = (state) => getThemeOnState(state).defaults

const getDefaultThemeOnState = (state) => getDefaultsThemeOnState(state).getIn(
  [ 'light' ]
)

export const getTheme = createSelector(
    getCurrentThemeOnState, getDefaultThemeOnState,
    (theme, defaultTheme) => theme ? theme.toJS() : defaultTheme.toJS()
)

export const getDefaultThemes = createSelector(
    getDefaultThemeOnState,
    (defaultTheme) => defaultTheme
)

export const getDefaultTheme = createSelector(
   getDefaultsThemeOnState,
    (defaultsTheme) => defaultsTheme
)
