const mineflayer = require('mineflayer')
const express = require('express')

const app = express()
app.get('/', (req, res) => res.send("Bot läuft"))
app.listen(3000)

function startBot() {
  const bot = mineflayer.createBot({
    host: "EH_Event.aternos.me",
    username: "Bot123",
    version: false
  })

  bot.on('spawn', () => console.log("Bot ist online!"))
  bot.on('end', () => {
    console.log("Bot disconnected, starte neu…")
    setTimeout(startBot, 5000)
  })
  bot.on('error', err => console.log(err))
}

startBot()
