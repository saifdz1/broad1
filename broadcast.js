
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


client.on("message", async message => { 
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
        `**هل أنت متأكد من إرسالك البرودكاست؟nمحتوى البرودكاست **`  
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
