//Calls inspirobot.me api and makes you feel better about your life
const request = require("node-fetch");
const { MessageEmbed } = require('discord.js');






module.exports= {
    name: 'inspire',
    description: "Feeling down? Get inspired and be the best you possible!",
    async request('http://inspirobot.me/api?generate=true', function (error, response, image) {

    },
    execute(message, args){
        const embed = new MessageEmbed()
	    .setColor('#beff0a')
	    .setTitle('Get Inspired!')
	    .setURL(image)
	    .setAuthor('Fluffy Feels OwO', image, image)
	    .setImage(image)
	    .setTimestamp()
	    .setFooter('Courtesy of Inspirobot.me', image);

    message.channel.send({ embeds: [embed] });
        //console.log("Someone Booped The Bot")
    }
}
