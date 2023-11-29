const Discord = require("discord-user-bots");
const ps = require('ps-node');
const client = new Discord.Client("token here");

let main = async () => {
    client.on.ready = function () {
        console.log("Client online!");
    };
}

let checkOsu = async () => {
    ps.lookup({command: 'osu!'}, (err, resultList )=>{
        if (err) {
            throw new Error( err );
        }
        let isProcess = false;
        resultList.forEach((process)=>{
            if(process){
                isProcess = true;
                client.change_status('dnd');
            }
        });
        if(!isProcess){
            client.change_status('online');
        }
    });
};

setTimeout(main, 0);
setInterval(checkOsu, 500);