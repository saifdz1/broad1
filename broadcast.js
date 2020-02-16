
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

Client.on('message', async message => {
    const devs = "647116113146150913" //اي دي ليقدرو يقبلوا او يرفضوا تقديمات
    let cha = Client.channels.get('678698044635611262')//اي دي روم القبول او الرفض
    let channel = Client.channels.get('678698105100828691')//اي دي روم عرض التقديمات
    let role = message.guild.roles.find(`name`,'Buyer') // اسم رتبة الادارة
if(message.content.startsWith(prefix + "apply")) {

  let name = '';

  let age = '';

  let coun = '';
  
  let act = '';
        
  let help = '';


  let fillter = m => m.author.id === message.author.id

  await message.channel.send(`**:pencil2: ما اسمك**`).then(e => {

 message.channel.awaitMessages(fillter, { time: 60000, max: 1 })

 .then(co => {

   name = co.first().content;

    co.first().delete();


   e.edit(`**:pencil2: كم عمرك**`)

   message.channel.awaitMessages(fillter, { time: 60000, max: 1 })

   .then(col => {

     age = col.first().content;

      col.first().delete();

        e.edit(`**:pencil2: من وين**`)

        message.channel.awaitMessages(fillter, { time: 60000, max: 1 })

        .then(coll => {

          coun = coll.first().content;

           coll.first().delete();


        e.edit(`**:pencil2: مدة ساعات التفاعل**`)

        message.channel.awaitMessages(fillter, { time: 60000, max: 1 })

        .then(colll => {

          act = colll.first().content;

           colll.first().delete();
           
           e.edit(`**:pencil2: كيف رح تساعدنا؟**`)
           
           message.channel.awaitMessages(fillter, { time: 60000, max: 1 })
           
           .then(kingg => {
               
                help = kingg.first().content;
                kingg.first().delete();
                
                e.edit(`**:pencil2: ...جاري التقديم**`)

          setTimeout(() => {

            e.edit(`**:white_check_mark: ...تم التقديم**`)

          }, 3000)
      let embed = new Discord.RichEmbed()
                    .setColor('RANDOM')
                    .setTitle(`[**${message.guild.name}**] **تقديم ادارة**`)
                    .setThumbnail(`${message.author.avatarURL}`)
                    .addField('**`» الاسم`**', `${name}`)
                    .addField('**`» العمر`**', `${age}`)
                    .addField('**`» البلد`**',`${coun}`)
                    .addField('**`» ساعات التفاعل`**',`${act}`)
                    .addField('**`» مساعدة`**',`${help}`)
                    .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                    channel.send(embed).then(m => {
          
    m.react(`👍`).then(() => m.react(`👎`));
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === devs;
    };	
           m.awaitReactions(filter, { max: 1})
        .then(collected => {
    const reaction = collected.first();
    if (reaction.emoji.name === '👍'){
        message.member.addRole(role);
        cha.send(`**لقد تم قبولك <@${message.author.id}> **`);
    
    } else if (reaction.emoji.name === '👎')
        cha.send(`**لقد تم رفضك <@${message.author.id}>**`)
    });
           })
           
   })
 })
})  
})
})
 })
}

});



Client.on("message", async message => { 
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (!message.channel.guild) return;
    var args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (command == "bc") {  // للونلاين و الاوفلاين
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");
      }
      if (!args) {
        return message.reply("**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**");
      }
      message.channel
        .send(
          `**هل أنت متأكد من إرسالك البرودكاست؟nمحتوى البرودكاست: **` 
        )
        .then(m => {
          m.react("✅").then(() => m.react("❌"));
  
          let yesFilter = (reaction, user) =>
            reaction.emoji.name == "✅" && user.id == message.author.id;
          let noFiler = (reaction, user) =>
            reaction.emoji.name == "❌" && user.id == message.author.id;
  
          let yes = m.createReactionCollector(yesFilter);
          let no = m.createReactionCollector(noFiler);
  
          yes.on("collect", v => {
            m.delete();
            message.channel
              .send(
                `:ballot_box_with_check: | Done ... The Broadcast Message Has Been Sent For ${message.guild.memberCount} Members`
              )
              .then(msg => msg.delete(5000));
            message.guild.members.forEach(member => {
              let bc = new Discord.RichEmbed()
                .setColor("#0984e3")
                .setThumbnail(member.user.avatarURL)
                .setTitle("Broadcast")
                .addField("Server", message.guild.name)
                .addField("your name", `<@${member.id}>`)
                .addField("Massage", args);
              message.delete();
              member.sendEmbed(bc);
            });
          });
          no.on("collect", v => {
            m.delete();
            message.channel
              .send("**Broadcast Canceled.**")
              .then(msg => msg.delete(3000));
          });
        });
    }
    if (command == "bco") { //للونلاين فقط
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");
      }
      if (!args) {
        return message.reply("**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**");
      }
      message.channel
        .send(
          `**هل أنت متأكد من إرسالك محتوى البرودكاست؟ **`
        )
        .then(m => {
          m.react("✅").then(() => m.react("❌"));
  
          let yesFilter = (reaction, user) =>
            reaction.emoji.name == "✅" && user.id == message.author.id;
          let noFiler = (reaction, user) =>
            reaction.emoji.name == "❌" && user.id == message.author.id;
  
          let yes = m.createReactionCollector(yesFilter);
          let no = m.createReactionCollector(noFiler);
  
          yes.on("collect", v => {
            m.delete();
            message.channel
              .send(
                `:ballot_box_with_check: | Done ... The Broadcast Message Has Been Sent For ${
                  message.guild.members.filter(
                    r => r.presence.status !== "offline"
                  ).size
                } Members`
              )
              .then(msg => msg.delete(5000));
            message.guild.members
              .filter(r => r.presence.status !== "offline")
              .forEach(member => {
                let bco = new Discord.RichEmbed()
                  .setColor("#0984e3")
                  .setThumbnail(member.user.avatarURL)
                  .setTitle("Broadcast")
                  .addField("Server", message.guild.name)
                  .addField("your name", `<@${member.id}>`)
                  .addField("Massage", args);
                message.delete();
  
                member.sendEmbed(bco);
              });
          });
          no.on("collect", v => {
            m.delete();
            message.channel
              .send("**Broadcast Canceled.**")
              .then(msg => msg.delete(3000));
          });
        });
    }
  });
  //Alpha codes CopyRight 2020
