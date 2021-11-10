const Discord = require('discord.js');
const token = require("./token.js")
const client = new Discord.Client({

    allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: true,
    },
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_PRESENCES",
        "GUILD_MEMBERS",
        "GUILD_MESSAGE_REACTIONS"
    ],
});

const prefix = 'fluff ';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./woofs/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./woofs/${file}`);

    client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}! OwO`);
})


client.on('messageCreate', (message) =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (fs.existsSync(`./woofs/${command}.js`)) {  
        client.commands.get(command).execute(message, args);
    } else {
        console.log(`Command ${command} doe not exist. Informing user.`)
        message.reply({
            content: "You're funny That command doesn't exist UwU",
        })
    }

});

client.login(token);