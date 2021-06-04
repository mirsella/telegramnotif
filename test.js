const telegramnotif = require('./index.js')
const fs = require('fs')

// eslint-disable

eval(fs.readFileSync('/home/mirsella/.config/token/telegram.token') + '')

telegramnotif(TgId, TgToken, `
npm run test
${new Date()}
<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">yup</a>
`, { parse_mode: 'HTML'})
    .then(e => console.log(e))
