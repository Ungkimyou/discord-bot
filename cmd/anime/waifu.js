const got = require("got");
const newEmbed = require("../../embed");
const commando = require("@iceprod/discord.js-commando");

module.exports = class Waifu extends commando.Command {
    constructor(client) {
        super(client, {
            name: "waifu",
            memberName: "waifu",
            group: "anime",
            description: "Shows random non-existent waifu generated by AI"
        });
    }

    async run(msg) {
        var total = 200000;
        var totalTexts = 125254;

        var id = Math.floor(Math.random() * total);
        var tid = Math.floor(Math.random() * totalTexts);

        var img = "https://www.thiswaifudoesnotexist.net/example-" + id + ".jpg";
        var text = "https://www.thiswaifudoesnotexist.net/snippet-" + tid + ".txt";

        var embed = newEmbed();

        embed.setTitle("Waifu");
        got(text).then(res => {
            var body = res.body.substr(0, 1997) + "...";
            embed.setDescription(body);
            embed.setImage(img);
            embed.setFooter("By thiswaifudoesnotexist.net");

            msg.channel.send(embed);
        }).catch(e => {
            console.warn(e);
            msg.channel.send("An error occured while fetching image. Contact TechmandanCZ#0135.");
        });
    }
};
