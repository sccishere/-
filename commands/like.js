let likes = require("../likes.json");
const fs = require("fs");
  const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    
    let pUser = message.mentions.users.first();
    let LUser  = likes[pUser.id].likes;
    if(message.mentions.users.size > 1) return message.reply("خطأ بالأمر");

    likes[pUser.id] = {
        likes: LUser + 1}
    fs.writeFile("./likes.json", JSON.stringify(likes), (err) => {
        if (err) console.log(err)
    });

    return message.reply("تم الإعجاب");
}

module.exports.help = {
  name:"لايك"
}
