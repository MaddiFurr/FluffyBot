//Gets some very basic server info and puts it in chat

module.exports= {
    name: 'server',
    description: "Get some information about the server",
    execute(message, args){
        message.reply({
            content: `**Server name:** ${message.guild.name}\n**Total members:** ${message.guild.memberCount}`,
        })
        //console.log("Someone Booped The Bot")
    }
}
