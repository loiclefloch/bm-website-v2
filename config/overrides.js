module.exports = isDev => ({
  options: {
    debugMode: false,
    enableSass: true,
    env: {
      APP_ENV: isDev ? 'TEST !' : 'PRODUCTION_MODE !',
    },
  },
})
