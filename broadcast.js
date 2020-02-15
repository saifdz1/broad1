
const Discord = require('discord.js');
const Client = new Discord.Client();
var prefix = 'b.';


Client.on('ready', () => {
  console.log(`Logged in as ${Client.user.tag}!`);
Client.user.setGame(`SaifDz`,"http://twitch.tv/SaifDz")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${Client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${Client.guilds.size} " ]`);
  console.log(`Users! [ " ${Client.users.size} " ]`);
  console.log(`channels! [ " ${Client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



Client.login(process.env.BOT_TOKEN);


Client.on("message", async message => { 
  if(message.content.startsWith(prefix + "bc")) { 
    const args = message.content.split(" ").slice(1).join(" "); 
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('لا تمتلك الصلاحيات الكافية');
    if(!args) return message.channel.send('يجب عليك  الرسالة'); 
 
      let help = new Discord.RichEmbed() 
          .setColor("RANDOM") 
          .setThumbnail(message.author.avatarURL) 
          .setDescription(`**انوع البرودكاست

          1- للكل بدون امبيد
          2- للكل بامبيد
          3- اونلاين بدون امبيد
          4- للالغاء
          **`);
         let typesMSG = await  message.channel.sendEmbed(help)
         var numbers = ["u0030u20E3", "u0031u20E3", "u0032u20E3", "u0033u20E3", "u0034u20E3", "u0035u20E3", "u0036u20E3", "u0037u20E3", "u0038u20E3", "u0039u20E3"]


       let r1 = await typesMSG.react(numbers[1]); 
       let r2 = await typesMSG.react(numbers[2]); 
       let r3 = await typesMSG.react(numbers[3]); 
       let r4 = await typesMSG.react("❌"); 




 let filter1 = (reaction, user) => reaction.emoji.name == numbers[1] && user.id == message.author.id;
 let filter2 = (reaction, user) => reaction.emoji.name == numbers[2] && user.id == message.author.id;
 let filter3 = (reaction, user) => reaction.emoji.name == numbers[3] && user.id == message.author.id;
 let filter4 = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;
 if (!typesMSG) return;

 let f1 = typesMSG.createReactionCollector(filter1, { 
     time: 18000 
 });
 let f2 = typesMSG.createReactionCollector(filter2, { 
     time: 18000
 }); 
 let f3 = typesMSG.createReactionCollector(filter3, { 
     time: 18000
 });
 let f4 = typesMSG.createReactionCollector(filter4, { 
     time: 18000
 });


  

f1.on('collect', async r => { 
  await typesMSG.delete();
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
    m.send(`${args}n ${m}`);
    })
    message.channel.send(`تم الارسال`); 
  
}); 

f2.on('collect', async r => {
await typesMSG.delete();
message.guild.members.forEach(m => {
  var bc = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .addField('# | الراسل', message.author) 
  .addField('# | الرسالة ', args)
  .addField('# | السيرفر', message.guild.name) 
  .setColor('RANDOM')
  m.sendMessage(bc)
});
message.channel.send(`تم الارسال`)
}); 

f3.on('collect', async r => {
await typesMSG.delete();
message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
  m.send(`${args}n ${m}`); 
  })
  message.channel.send(``${message.guild.members.filter(m => m.presence.status !== 'online').size}` : عدد الاعضاء المستلمين`); 
});
 
f4.on('collect', async r => {
await typesMSG.delete();
message.channel.send('تم الالغاء بنجاح') 
}); 


  } 

}); 
f4.on('collect', async r => {
await typesMSG.delete();
message.channel.send('تم الالغاء بنجاح') //OMAR#6356
}); //OMAR#6356


  } //OMAR#6356

}); //OMAR#6356
