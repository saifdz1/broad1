
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



client.login(process.env.BOT_TOKEN);



Client.on('message', message => {
    if(!message.channel.guild) return;
  if(message.content.startsWith('b.bc')) {
  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
  let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
  let copy = "Galaxy";
  let request = `Requested By ${message.author.username}`;
  if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
  msS.react('✅')
  .then(() => msS.react('❌'))
  .then(() =>msS.react('✅'))
  
  let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
  let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
  let reaction1 = msS.createReactionCollector(reaction1Filter, { time: 12000 });
  let reaction2 = msS.createReactionCollector(reaction2Filter, { time: 12000 });
  reaction1.on("collect", r => {
  message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
  message.guild.members.forEach(m => {
  var bc = new
  Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('Broadcast')
  .addField('Server', message.guild.name)
  .addField('Sender', message.author.username)
  .addField('Message', args)
  .setThumbnail(message.author.avatarURL)
  .setFooter(copy, Client.user.avatarURL);
  m.send({ embed: bc })
  msS.delete();
  })
  })
  reaction2.on("collect", r => {
  message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
  msS.delete();
  })
  })
  }
  });
  Client.on('message', message => {
     if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'bk')) {
  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
  let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
  let BcList = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setAuthor(`محتوى الرساله ${args}`)
  .setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست`)
  if (!args) return message.reply('**يجب عليك كتابة كلمة او ��ملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
  msS.react('📝')
  .then(() => msS.react('✏'))
  .then(() =>msS.react('📝'))
   
  let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
  let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
   
  let EmbedBc = msS.createReactionCollector(EmbedBcFilter, { time: 60000 });
  let NormalBc = msS.createReactionCollector(NormalBcFilter, { time: 60000 });
   
  EmbedBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
  message.guild.members.forEach(m => {
  var bc = new
  Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`Message : ${args}`)
  .setAuthor(`Server : ${message.guild.name}`)
  .setFooter(`Sender : ${message.author.username}`)
  .setThumbnail(message.author.avatarURL)
  m.send({ embed: bc })
  msS.delete();
  })
  })
  NormalBc.on("collect", r => {
    message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
  message.guild.members.forEach(m => {
  m.send(args);
  msS.delete();
  })
  })
  })
  }
  });
  Client.on('message' , message => {
        if(message.author.bot) return;
       
        if(message.content.startsWith(prefix + "rolebc")) {
          if (!message.member.hasPermission("ADMINISTRATOR"))  return;
          let args = message.content.split(" ").slice(2);
       var codes = args.join(' ')
         
          if(!codes) {
            message.channel.send("قم بكتابة الرسالة | !rolebc @everyone message")
              return;
          }
       
       
                var role = message.mentions.roles.first();
                  if(!role) {
                    message.reply("لا توجد رتبة بهذا الاسم")
                      return;
                  }
              message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
                n.send(
                "**" + "السيرفر :" + "\n" +
                `${message.guild.name}` + "\n" +
                "المرسل :" + "\n" +
                `${message.author.tag}` + "\n" +
                "الرسالة :" + "\n" +
                `${codes}` + "**"
                )
              })
              message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
          }
      });
