require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TOKEN, {

  polling: {
    interval: 1000,
    autoStart: true
  }

});

bot.on("polling_error", err => console.log(err.data.error.message));

bot.on('text', async msg => {
	try {
	const text = msg.text.toLowerCase()

	if(text == 'сигма' || text == 'сігма' || text == 'sigma') {
		 await bot.sendDocument(msg.chat.id,'sigma.gif')
	}

	return
	} catch(error) {
		console.log(error);
	}
})

