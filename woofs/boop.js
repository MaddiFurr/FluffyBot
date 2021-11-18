//Fluffy Bot's version of "Ping"
module.exports= {
    name: 'boop',
    description: "Boop Fluffy's snoot",
    execute(message, args){
        message.reply({
            content: "*giggles* nooo you can't boop my nose, silly!",
        })
        //console.log("Someone Booped The Bot")
    }
}
