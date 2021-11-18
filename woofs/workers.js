//Calls the 011Data mining pool API for current mining stats
//Thanks to https://github.com/HiddenKitten for helping with this one as I'm still new to node.js
const request=require('request');
const prompt = require('prompt-sync')({sigint: true});
const api="https://raptorna.011data.com/api/stats"
const { MessageEmbed } = require('discord.js');


module.exports= {
    name: 'workers',
    description: "Fetch mining data from 011DATA RTM Pool",
    execute(message, args){
        request({url:api},(error,response,body)=>
    { 
        const result=JSON.parse(body);
        workers = Object.entries(result.pools.raptoreum.workers);
        console.log(`Data requested for address:  ${args[0]}`)
        filtered = workers.filter(([key, value]) => key.startsWith(args[0]));
        relevant = Object.fromEntries(filtered);
        var fullmessage = ""
        for (const worker in relevant) {
            const [ addr, name ] = worker.split('.')
            fullmessage += (`\n\nWorker: ${name} \nShares: ${relevant[worker].shares} \nDifficulty: ${relevant[worker].diff} \nInvalid Shares: ${relevant[worker].invalidshares} \nCurrent Round Shares: ${relevant[worker].currRoundShares} \nHash Rate: ${relevant[worker].hashrateString}`)
        }
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