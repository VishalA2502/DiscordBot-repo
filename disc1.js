const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => 
{
    console.log('Logged in as ${client.user.tag}!');
});

client.on('message', msg => {
    if(msg.content === 'ping')
    {
        msg.reply('Pong!');
    }
});

client.login('NzkyNjIwODUxNDkyMjkwNTkx.X-gXsQ.mp2ivRJiVvgDFKQJh8gqt1d09HI');