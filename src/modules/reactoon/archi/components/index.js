//
// archi components contains components for the Root of our app
//
// Root 
// -> ErrorBoundary 
// -> Provider (react-redux) 
// -> appConfig.Content: user side component. Use it to englobe the router with providers 
// in order to not re-render those providers when the route change
// Ex: MuiThemeProvider, CssThemeProvider, I18n initial loading, ...
// -> router (react-router)
//