// Snipe bot source
// Originally from DankMemer/Sniper, but thoroughly revised
// Last revised September 2023

const {Client, Intents, MessageEmbed} = require("discord.js");
const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
	],
	partials:["MESSAGE", "USER"],
});
const {token, application_id} = require("../config.json");

const snipes = {};
var snipesChannelId = {};
var snipesChannelName = {};
const editSnipes = {};
var editSnipesChannelId = {};
var editSnipesChannelName = {};

process.on("unhandledRejection", console.error);

client.on("ready", () => {
	console.log(`[sniper] :: Logged in as ${client.user.tag}.`);
});

client.on("messageDelete", async(message) => {
	if (message.partial) return;
	snipes[message.channel.id] = {
		author: message.author.tag,
		content: message.content,
		embeds: message.embeds,
		attachments: [...message.attachments.values()].map((a) => a.proxyURL),
		createdAt: message.createdTimestamp,
	};
    snipesChannelId = message.channel.id;
    snipesChannelName = message.channel.name;
    console.log("---DELETION---");
    console.log(snipes[message.channel.id]);
    console.log("--------------");
});

client.on("messageUpdate", async(oldMessage, newMessage) => {
    if (oldMessage.content === newMessage.content) return;
	editSnipes[oldMessage.channel.id] = {
		author: oldMessage.author.tag,
		content: oldMessage.content,
		embeds: oldMessage.embeds,
		attachments: [...oldMessage.attachments.values()].map((a) => a.proxyURL),
		createdAt: oldMessage.createdTimestamp,
	};
    editSnipesChannelId = oldMessage.channel.id;
    editSnipesChannelName = oldMessage.channel.name;
    console.log("---EDIT---");
    console.log(oldMessage);
    console.log("----------");
});

client.on("messageCreate", async(message) => {
	if (message.content.toLowerCase() === "s") {
		const snipe = snipes[snipesChannelId];
		if (!snipe) {
            message.reply("There's nothing to snipe!");
            return;
        }
		const embed = new MessageEmbed()
			.setAuthor(snipe.author)
			.setFooter(snipesChannelName)
			.setTimestamp(snipe.createdAt);
		if (snipe.content) embed.setDescription(snipe.content);
		if (snipe.attachments.length) embed.setImage(snipe.attachments[0]);
		message.reply({embeds: [embed]});
        snipes[snipesChannelId] = 0;
    }
	if (message.content.toLowerCase() === "es") {
		const editSnipe = editSnipes[editSnipesChannelId];
		if (!editSnipe) {
            message.reply("There's nothing to editsnipe!");
            return;
        }
		const embed = new MessageEmbed()
			.setAuthor(editSnipe.author)
			.setFooter(editSnipesChannelName)
			.setTimestamp(editSnipe.createdAt);
		if (editSnipe.content) embed.setDescription(editSnipe.content);
		if (editSnipe.attachments.length) embed.setImage(editSnipe.attachments[0]);
		message.reply({embeds: [embed]});
        editSnipes[editSnipesChannelId] = 0;
    }
    if (message.reference && message.content.toLowerCase() === "mock" && message.author.id != application_id) {
        repliedMessage = await message.fetchReference();
        newMessage = "";
        for (let i = 0; i < repliedMessage.content.length; i++) {
            if (i % 2 === 0) {
                newMessage += repliedMessage.content[i].toLowerCase();
            }
            else {
                newMessage += repliedMessage.content[i].toUpperCase();
            }
        }
        newMessage += " :nerd:";
        message.reply(newMessage);
    }
});

client.login (token);

