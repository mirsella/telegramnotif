const axios = require('axios')
module.exports = async function telegramnotif(ChatId, TgToken, text) {
    return await axios.post(`https://api.telegram.org/bot${TgToken}/sendMessage`, {
        'chat_id': ChatId,
        text
    })
}
