import { GatewayIntentBits, Partials } from "discord.js";

export const intents = [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildVoiceStates,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.MessageContent,
];

export const partials = [Partials.Channel, Partials.Message];
