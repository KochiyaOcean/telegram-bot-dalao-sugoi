const { token } = require('./TOKEN.json')

const TelegramBot = require('node-telegram-bot-api')

const bot = new TelegramBot(token, {polling: true})

bot.on('message', msg => {
  if (msg.text && msg.text.includes("这句是在装逼")) {
    bot.sendMessage(msg.chat.id, 'すごーい！', {
      reply_to_message_id: msg.message_id,
    })
  }
})
