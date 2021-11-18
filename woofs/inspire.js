//Calls inspirobot.me api and makes you feel better about your life
//Thanks to @HiddenKitten for helping with this one as I'm still new to JS
const https = require('https')
const { MessageEmbed } = require('discord.js');



module.exports= {
    name: 'inspire',
    description: "Feeling down? Get inspired and be the best you possible!",
    execute(message, args){
        https.get({host:'inspirobot.me', path:'/api?generate=true'}, function(res) {
            var str = '';

            //run on each chunk of data recieved
            res.on('data', function(chunk) {
                console.log(chunk)
                str += chunk;
            });

            //run after the connection is closed - all data recieved.

            
            res.on('end', function() {
                console.log(str)
                var embed = new MessageEmbed()
                .setColor('#beff0a')
                .setTitle('Get Inspired!')
                .setURL(str)
                .setAuthor('Fluffy Feels OwO', str, str)
                .setImage(str)
                .setTimestamp()
                .setFooter('Courtesy of Inspirobot.me', str);
        
                message.channel.send({ embeds: [embed] });

            });
        });
    }
}