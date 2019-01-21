const Telegraf = require('telegraf');
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

require("dotenv").config();

var log = console.log.bind(console);

const keyboard = Markup.inlineKeyboard([
  Markup.urlButton('🐣', 'https://lebster.me'),
  Markup.callbackButton('Delete', 'delete')
])

const bot = new Telegraf(process.env.TELEGRAM_API_TOKEN)

bot.telegram.getMe().then((bot_informations) => {
  bot.options.username = bot_informations.username;
  log(`Server has initialized bot.`);
});

bot.start((ctx) => ctx.reply("Hello, dude."))
bot.help((ctx) => ctx.reply("I can't help you."))
bot.on('message', (ctx) => ctx.telegram.sendCopy(ctx.from.id, ctx.message, Extra.markup(keyboard)))
bot.action('delete', ({ deleteMessage }) => deleteMessage())
bot.launch()
