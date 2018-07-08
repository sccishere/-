const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //!coins
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins;


  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setColor("#00FF00")
  .addField("[💸 في رصيدك]", `${uCoins} ريال`);

  message.channel.send(coinEmbed);

}

module.exports.help = {
  name: "رصيدي"
}