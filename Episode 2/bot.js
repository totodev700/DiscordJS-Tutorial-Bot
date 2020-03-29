

const Discord = require('discord.js'); 
const ravi = new Discord.Client();
const config = require('./botconfig.json'); //Declaring the configuration files
const {MessageEmbed} = require('discord.js');

ravi.on('ready', () => {
  console.log(`Logged in as ${ravi.user.tag}!`);
});

ravi.on('message', msg => {
  if (msg.content === `${config.prefix}ping`) {
    msg.reply('Pong!');
  }

});

/*
Message Embeds Goes Down 
*/
ravi.on('message' , msg => {
  if(msg.content.startsWith(`${config.prefix}avatar`)) {
    let user = msg.mentions.users.first(); //This is a special method to find the first user mentioned if any
  //What if the user was not mentioned it would throw an error so we have to add an exception also
   if(!user) {
     user = msg.author; //(!user) means if there is nothing declared to the variable user which means if it is null then user will be defined as the author
   }
   
   //Main Section
   const avatar = new MessageEmbed() //You can also do new Discord.MessageEmbed();
   .setTitle(`Avatar Command`) // This line defines the title 
   .setColor('#7289da') //This color line defines the color means the side bar of the embed 
   .setImage(user.displayAvatarURL()) //This line attaches an image to our beautiful embed
   .setFooter(`Command Executed by ${msg.author.tag}`); //This line defines the footer 
   // A Bonus Tip : Do not add ; after each line as it will break your constructor over there
    msg.channel.send(avatar);
  }/
}
)
ravi.login(config.token);