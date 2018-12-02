const Discord = require('discord.js');
const PREFIX = "-"

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
//Welcome Embed list       
        case "Welcomepic":
            var embed = new Discord.RichEmbed()
                .setImage("https://media.discordapp.net/attachments/496868002768093184/496868726839312388/welcome1.png")
                .setColor("#FFFF00")
            message.channel.send(embed);
            break;
        case "WelcomeEmbed1":
            var embed = new Discord.RichEmbed() 
                .setTitle("Welcome to **Candy Squad**")
                .setColor("#FFFF00")
                .setDescription("We are a family friendly server with a main purpose to have a friendly gaming community and a place for members to chill. If you respect the Staffs, we will give you respect in return. Follow the server rules and you will surely enjoy the server!")
            message.channel.send(embed);
            break;
        case "WelcomeEmbed2":
            var embed = new Discord.RichEmbed()   
                .setTitle("LINKS")
                .setFooter("Candy God", bot.user.avatarURL)
                .setColor("#FFFF00")
                .setDescription("<:discordlogo:517984538605912076>[permanent Server Invite](https://discord.gg/A6S5rnd)<:discordlogo:517984538605912076> \n<:youtubelogo:517984492552454154>[Youtube](https://www.youtube.com/channel/UCEnGiCF_IVriANqS9SDtkpQ)<:youtubelogo:517984492552454154> \n<:twitchlogo:517984957025484862>[Twitch](https://www.twitch.tv/candypietea)<:twitchlogo:517984957025484862> \n\n\n <a:lollipopgif:517996418917728256>**ENJOY YOUR STAY HERE**<a:lollipopgif:517996418917728256>")
            message.channel.send(embed);
            break;
//Rules Embed list              
        case "Rulespic":
            var embed = new Discord.RichEmbed()
                .setImage("https://media.discordapp.net/attachments/481995268741529601/482008646075809823/rules2.png")
                .setColor("#FF69B4") 
            message.channel.send(embed);
            break;
        case "RulesEmbed":
            var embed = new Discord.RichEmbed()
                .setTitle("RULES")
                .setDescription("<a:rightarrowgif:517889978152386580> `1` **Be respectful to each other** \nKeep your manners in check and treat others how you want to be treated back, this also includes staffs and owner. Toxicity, harassment, bullying, racism, sexism, or any sort of discrimination will not be tolerated. \n\n<a:arrowgif:517889978152386580> `2` **Respect all channels** \nEvery channel exist for individual reasons and have set guidelines. If you are unsure what content belongs in a channel, use common sense or ask any staff for assistance. \n<a:arrowgif:517889978152386580> `3` **Bad behavior** \nAfter continuous negative behavior and warnings, you will be kicked, muted or banned depending on the severity of your actions. \n\n<a:arrowgif:517889978152386580> `4` **Personal information** \nIf you wish to post personally identifiable information (i.e. name, address, email,  etc.) of others, do it with their prior consent. Remember, we are not responsible for anything you tell others. It's best to keep personal informations to yourself or to DM for private or confidential matters. \n\n<a:arrowgif:517889978152386580> `5` **No NSFW content** \nDo not post any kind of NSFW content. This is a family friendly server so please refrain from contradicting this motto. If this rule is broken, there would be a consequence for your actions from posting such contents. \n\n<a:rightarrowgif:517889978152386580> `6` **No spamming** \nSpamming in any form (i.e. text, emoji, links, or files) is unnecessary. Also, do not spam bot commands in any channel (<@213466096718708737> to be specific) \n\n\n***Keep in mind, just because some prohibitions are not mentioned in the rules does NOT mean you are allowed to do them.***")
                .setFooter("Candy God", bot.user.avatarURL)
                .setColor("#FF69B4")           
            message.channel.send(embed);
            break;
//profile roles             
        case "GenderEmbed":
            var embed = new Discord.RichEmbed()
                .setTitle("__Gender__")
                .setDescription("<:malechitoge:518283163726905344> : `Male` \n\n<:femalechitoge:518282500020109342> : `Female`")
                .setColor("#39FF14")
            message.channel.send(embed);
            break;
        case "AgeEmbed":
            var embed = new Discord.RichEmbed()
                .setTitle("__Age__")
                .setDescription("<:loli:518287139662856212> : `Age : 13-15` \n\n<:teen:518287197213032449> : `Age : 16-18` \n\n<:legal:518287226833207296> : `Age: 19-21` \n\n<:adult:518287255127851039> : `Age: 22+`")
                .setColor("#39FF14")
            message.channel.send(embed);
//Color roles
            break;
        case "ColorEmbed":
            var embed = new Discord.RichEmbed()
                .setTitle("__Color__")
                .setDescription("<:white:518278015000772608> : `White` \n\n<:silver:518278014878875659> : `Silver` \n\n<:gray:518278014728142849> : `Gray` \n\n<:black:518278015000641547> : `Black` \n\n <:red:518278015034327041> : `Red` \n\n<:maroon:518278015000510464> : `Maroon` \n\n<:yellow:518278015017287711> : `Yellow` \n\n<:olive:518278014824349728> : `Olive` \n\n<:lime:518278014996447262> : `Lime` \n\n<:green:518278014807703563> : `Green` \n\n<:aqua:518278014816092161> : `Aqua` \n\n<:teal:518278014694457348> : `Teal` \n\n<:blue:518278015063425024> : `Blue` \n\n<:navy:518278015009161236> : `Navy` \n\n<:fuchsia:518278014992252928> : `Fuchsia` \n\n<:purple:518278014988189696> : `Purple`")
                .setColor("#00FFFF")
            message.channel.send(embed);
            break;
    } 
});

bot.login(process.env.BOT_TOKEN);
