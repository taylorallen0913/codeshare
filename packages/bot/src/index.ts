import Discord from 'discord.js';
import { TOKEN } from './config';

const client = new Discord.Client();

client.on('ready', () => {
  console.log('Ready');
});

client.login(TOKEN);
