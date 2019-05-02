import defaultEnv from './environment'

export default ({ getProcessEnv }) => ({
  ...defaultEnv,

  IS_DEV: true,

  HOSTNAME: 'localhost',

  SERVER_URL: `http://${getProcessEnv('DOMAIN')}/app_dev.php`,

  API_URL: `http://${getProcessEnv('DOMAIN')}/app_dev.php/api`,

  Auth: {
    '//': 'TODO: put on .env',
    client_id: '3_41usi26rwc6cs4gwcooskss8g0ww0kg44coowg0wkoc4cwwkgs',
    client_secret: '3wgrk1sdtny88skgsk00o8cc8o84swos4gckkgc4skw00s84ss',
    grant_type: 'password',
  },
})
