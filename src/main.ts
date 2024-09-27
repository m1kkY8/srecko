import { Client, Events, Message } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const TOKEN = process.env.TOKEN || "";
const PREFIX = process.env.PREFIX || "";

console.log(TOKEN);
console.log(PREFIX);

import { partials, intents } from "./intents";

const client = new Client({ intents, partials });

client.once(Events.ClientReady, () => {
  console.log("Srecko online");
  console.log(`Prefix: ${PREFIX}`);
});

client.on(Events.Error, (error) => {
  console.log(`Error ${error}`);
});

client.on(Events.MessageCreate, (messgae: Message) => {
  if (messgae.content == "!ping") {
    messgae.reply("amogus");
  }
});

client.login(TOKEN);
