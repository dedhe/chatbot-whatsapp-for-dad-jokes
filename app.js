const qrcode = require('qrcode-terminal'),
    { Client } = require('whatsapp-web.js'),
    client = new Client(),
    dadJokes = require('@mikemcbride/dad-jokes')


client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    qrcode.generate(qr, { small: true })
})


client.on('ready', () => {
    console.log('Client is ready!')
});


client.on('message', msg => {

    let txt = msg.body.split(" ")
    if (txt.includes('joke') || txt.includes('jokes')) {
        msg.reply(dadJokes.random())
    }

})


client.initialize();