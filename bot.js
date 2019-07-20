const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '.'

client.on('ready', () => {
  console.log(`Hey dostum, ${client.user.tag} hizmete basladi!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send(':ping_pong: Mesajlara ' + `${Date.now() - msg.createdTimestamp}` + "ms içinde cevap veriyorum.");
  }
  if (msg.content === 'avatar') {
    let kullanıcı = msg.mentions.users.first() || msg.author
    const embed = new Discord.RichEmbed()
    .setImage(kullanıcı.avatarURL)
    .setColor("#7289da")
    msg.channel.send(embed)
  }
});

client.login('NjAyMjA1NTExOTk1MjI4MTgx.XTNeSg.6rw_dwUNtL5_NiZlJwJoyCnqQ8M');