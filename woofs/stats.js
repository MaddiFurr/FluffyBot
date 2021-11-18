//Calls the 011Data mining pool API for current mining stats
//Thanks to https://github.com/HiddenKitten for helping with this one as I'm still new to node.js
const request=require('request');
const prompt = require('prompt-sync')({sigint: true});
const api="https://raptorna.011data.com/api/worker_stats?"
const { MessageEmbed } = require('discord.js');


module.exports= {
    name: 'stats',
    description: "Fetch mining data from 011DATA RTM Pool",
    execute(message, args){
        request({url:api+args[0]},(error,response,body)=>
    { 
        const result=JSON.parse(body);
        stats = Object.entries(result);
        console.log(`Data requested for address:  ${args[0]}`)
        var fullmessage = ""
        fullmessage += (`\nCurrent Total Hash: ${result.totalHash} H/s \nTotal Shares: ${result.totalShares} \nCurrent Balance: ${result.balance} RTM/100 RTM \nTotal Paid: ${result.paid} RTM`)
            message.reply({
                content: ("Check your DMs for your current worker stats!")
            })
            message.author.send({
                content: (`**MINING ADDRESS: ** ${args[0]}`) + "```" + fullmessage + "```"
            })
        console.log("Data sent to user!")

            });
    }
}