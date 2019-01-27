module.exports = isDev => ({
  options: {
    enableSass: true,
    debugMode: false,
    env: {
      'APP_ENV': isDev ? 'TEST' : 'PRODUCTION_MODE !'
    },
  },
})
