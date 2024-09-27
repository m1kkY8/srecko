"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const TOKEN = process.env.TOKEN || "";
const PREFIX = process.env.PREFIX || "";
console.log(TOKEN);
console.log(PREFIX);
const intents_1 = require("./intents");
const client = new discord_js_1.Client({ intents: intents_1.intents, partials: intents_1.partials });
client.once(discord_js_1.Events.ClientReady, () => {
    console.log("Srecko online");
    console.log(`Prefix: ${PREFIX}`);
});
client.on(discord_js_1.Events.Error, (error) => {
    console.log(`Error ${error}`);
});
client.on(discord_js_1.Events.MessageCreate, (messgae) => {
    if (messgae.content == "!ping") {
        messgae.reply("amogus");
    }
});
client.login(TOKEN);
