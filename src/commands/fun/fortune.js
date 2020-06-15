
const Discord = require('discord.js');
const fortune = require('../../../assets/fortuneCookies.json');
const { Message } = require('discord.js');
const Client = require('../../classes/Unicron');
const BaseCommand = require('../../classes/BaseCommand');

module.exports = class extends BaseCommand {
    constructor() {
        super({
            config: {
                name: 'fortune',
                description: 'Shows you a fortune from a fortune cookie.',
                permission: 'User',
            },
            options: {
                aliases: ['cookie'],
                cooldown: 15,
            }
        });
    }
    /**
     * @returns {Promise<Message|Boolean>}
     * @param {Client} client 
     * @param {Message} message 
     * @param {Array<String>} args 
     */
    async run(client, message, args) {
        return message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Your fortune says...')
            .setDescription(fortune.random())
        );
    }
}