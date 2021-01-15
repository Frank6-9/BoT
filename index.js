const Discord = requrired("discord.js")
const clinet = new Discord.client();
const perfix = "Fy!";
Clinet.on("ready", message => {
    console.log("I am ready to go");
    
});
    
    
    client.on("message", message => {
        if(message.content === `${perfix}ping`){
            message.channel.send(`🏓pong - ${client.ws.ping}`)
        }
})

client.login("NzYwODgxMTQ5NTM0MDExMzk0.X3Sfyg.swXrqzn_H-guqwpCD90-Bs20mI8") //paste your token 