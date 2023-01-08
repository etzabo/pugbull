const {SlashCommandBuilder, Collector, Message, MessageCollector} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Oh yeah I made a slash command cry about it loser. (You\'re the loser.)')
        .addBooleanOption(option => 
            option.setName("private")
                .setDescription("Is this command private?")
        ),
    async execute(interaction) {
        await interaction.reply(`WOOOOOOOW EVERYBODY!!! Lets give a BIG HAND to <@${interaction.user.id}>!!! THEY USED A *SLASH COMMAND*!!! ***Good job***!! WWWWWOOOOOWOWOWOOWWWWW YOU DID IT!!!! GREAT JOB!!!! YOU TYPED FIVE FUCKING CHARACTERS! THAT'S SSOOOOOOOOOO GOOD FOR YOU!!!! YOU KNOW WHAT???? I BET YOU DIDN'T EVEN TYPE ALL OF THEM! I BET YOU JUST TYPED THE SLASH AS WELL AS THE FIRST ONE OR TWO CHARACTERS! I BET YOU PRESSED TAB TO COMPLETE IT LIKE A LITTLE BITCH!! Is that what you are? A little bitch? A little loser face? From Losertown, perhaps? Just north of Fool's Plaza? On Nincompoop Ln? I bet you do live there. I bet you live on the *crossroad* made by Nincompoop Ln. and the road up to Pinhead Peak. I bet you do. Go cry. Go cry yourself to sleep like a little baby little loserpants little smellystink fartface...`, fetchReply = true)
            .then
        await interaction.channel.awaitMessages(m => m.author.id == message.author.id,
            {max: 1, time: 10000}).then(collected => {
                
                console.log(collected.first().content)
                
                if (collected.first().content.toLowerCase() == "sorry") {
                    interaction.followUp("Oh? You think I'd stop? You thought this was over? Why don't you take some time to rub those two braincells of yours together and think of a better response. Try your hardest to pump out better reasoning for your STUPID invocation of the test command. The test command is **SACRED**!!!")
                }
                else{
                    interaction.followUp("Bozo")
                }
        })
    }
};