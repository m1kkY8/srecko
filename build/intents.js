"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partials = exports.intents = void 0;
const discord_js_1 = require("discord.js");
exports.intents = [
    discord_js_1.GatewayIntentBits.Guilds,
    discord_js_1.GatewayIntentBits.GuildVoiceStates,
    discord_js_1.GatewayIntentBits.GuildMessages,
    discord_js_1.GatewayIntentBits.DirectMessages,
    discord_js_1.GatewayIntentBits.MessageContent,
];
exports.partials = [discord_js_1.Partials.Channel, discord_js_1.Partials.Message];
