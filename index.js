const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
});

//PING
client.on('message', msg => {
  if (msg.content === '^^ping') {
    msg.channel.send('Pong! ${client.pings[0]}ms');
  }
});

//STREAMERMODE
client.on('ready', () => {
client.user.setGame('in 117 users', 'https://www.twitch.tv/streamerhouse%27');
})

//SERVERINFO
client.on('message', message => {
if (message.content === '^^serverinfo') {
    Promise.all([
        message.react(':sunglasses:'),
        message.react(':money_mouth:'),
    ])
        .catch(() => console.error('One of the emojis failed to react.'))
    var embedserverinfo = new Discord.RichEmbed()
    .setTitle("")
    .setThumbnail(message.guild.iconURL)
        .setThumbnail(message.guild.iconURL)
        .addField("Name:", message.guild.name)
        .addField("ID:", message.guild.id)
        .addField("Verification Level:", message.guild.verificationLevel)
        .addField("Owner:", message.guild.owner)
        .addField("Created On:", message.guild.createdAt)
        .addField("Members:", message.guild.memberCount)
        .addField("Channels:", message.guild.channels.size)
        .addField("Region:", message.guild.region)
        .setColor('#026bff')
    message.channel.send(embedserverinfo);
}
})

//SAY
client.on('message', message => {
  let args = message.content.split(" ").slice(1);
  if(message.content.startsWith("^^say"))  {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("» | You do not have permission!");		  
         message.delete()
         const embed = new Discord.RichEmbed()
         .setDescription(args.join(" "))
         .setColor(0xff0000)
    message.channel.sendEmbed(embed);
 
     }
 
});

//AVATAR
client.on('message', message => {
  if (message.content === '^^avatar') {
    message.reply(message.author.avatarURL);
  }
});

//INVITE
client.on('message', msg => {
  if (msg.content === '^^invite') {	  
    msg.channel.send('**Invite EzeBot. »** https://bit.ly/2KEmt1f');	
  }
});

//WELCOME
client.on('guildMemberAdd' , member => {               //You can Change The Name
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
 channel.send(`Hey ${member}, welcome to server :tada::hugging: !`);
});

//SUPPORT
client.on('message', msg => {
  if (msg.content === '^^support') {	  
    msg.channel.send('**Support EzeBot. »** https://discord.gg/VNCcTrZ');	
  }
});

client.login('NDQzODcxOTMyNDkyODA4MTk0.DeVQ6g.ouX-2V6mOCqhNcN8XZ99KYUDu6Q');