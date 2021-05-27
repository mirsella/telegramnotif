const telegramnotif = require('./index.js')
const fs = require('fs')

// eslint-disable

eval(fs.readFileSync('/home/mirsella/.config/token/telegram.token') + '')

telegramnotif(TgId, TgToken, `
npm run test
${new Date()}
yep
`)
    .then(e => console.log(e))
