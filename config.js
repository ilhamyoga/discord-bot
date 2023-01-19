"use strict";
require("dotenv").config();

const CONFIG = {}

CONFIG.discord_token = process.env.DISCORD_TOKEN
CONFIG.openai_api_key = process.env.OPENAI_API_KEY

module.exports = CONFIG;