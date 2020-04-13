const Discord = require('discord.js')
const moment = require('moment')

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    //if(!members) return message.channel.send(`Veuillez mentionner un utilisateur !`)

    message.channel.send({
        embed: {
            color: 0xff0000,
            title: `Statistique de l'utilisateur **${membre.user.tag}**`,
            thumbnail: {
                url: membre.user.distplayAvatareURL
            },
            fields: [
                {
                name: "> ID :",
                value: membre.id
                },
                {
                    name:  "Compte créer le :",
                    value: moment.utc(membre.user.createdAt).format("LL"), 
                },
                {
                    name: "Jeu :",
                    value: `${membre.user.presence.game ? `${membre.user.presence.game.name}` : "Ne joue pas"}`
                },
                {
                    name: "Rejoin le :",
                    value: moment.utc(membre.joinedAt).format("LL")
                }
            ],
            footer: {
                text: `Informations de l'utilisateur ${membre.user.username}`
            }
        }
    })

};

module.exports.help = {
    name: "stats"
}