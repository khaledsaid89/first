const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("602085140339884052")
setInterval(function() {
channel.send(`last bot`);
}, 30)
})

client.login(process.env.BOT_TOKEN);