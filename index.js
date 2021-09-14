const axios = require('axios')
module.exports = async function telegramnotif(ChatId, TgToken, text, options) {
    return await axios.post(
        `https://api.telegram.org/bot${TgToken}/sendMessage?` + Object.entries(options || {}).map(e => e[0] + '=' + e[1] + '&'),
        {
            'chat_id': ChatId,
            text
        }
    )
}
