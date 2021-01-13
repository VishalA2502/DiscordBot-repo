const { rejects } = require('assert');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();
let allowRes = false;
let playerGameStart = false;
let TTTBoard = [[0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]]
let replyList = ["You are indubitably correct", "You are mistaken", "Only an idiot would believe this", "Your assumptions are accurate", "Hell no idiot", "Yes!", "No!", "I must say, I do not know!"]
console.log(client);
client.on('ready', () => 
{
    console.log(`Logged in as ${client.user.tag}!`);
});
// This function handles an incoming "request"
// And sends back out a "response";
let handleRequest = function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
  };
  
  // HTTP module
  let http = require('http');
  
  // Create a server with the handleRequest callback
  let server = http.createServer(handleRequest);
  // Listen on port 8080
  server.listen(8080);
  // IS PUSH WORKING?
  
console.log('Server started on port 8080');
client.on('message', botReply)
async function botReply(msg) {
    if(msg.channel.id === '795082985095299113'){
        if(msg.content === '^ping')
        {
            msg.reply('Pong!');
        }
        if(msg.content === 'hello')
        {
            msg.reply(`Hello! How are you ${msg.author.username}?`);
            allowRes = true;
        }
        //let reply = msg.content.split("");
        //console.log(reply[0]);
        //console.log(allowRes);
        if(msg.content.startsWith('I') && allowRes)
        {
            msg.reply('Thats great, have a nice day!');
            allowRes = false;
        }
        if(msg.content.startsWith('^gif'))
        {
            let keyword = msg.content.split(' ')[1];
            if(keyword === null)
            {
                keyword = 'excited';
            }
            let url = `https://api.tenor.com/v1/search?q=${keyword}&key=DKW2V327RX8J&limit=8`
            let response = await fetch(url);
            let json = await response.json();
            const index = Math.floor(Math.random() * json.results.length);
            msg.channel.send(json.results[index].url);
            //msg.channel.send("GIF from Tenor: " + keyword);
        }
       /* if(msg.content.startsWith('^give'))
        {
            let person = msg.content.split(' ')[1];
            let role = msg.content.split(' ')[2];
            if(person === null || role === null)
            {
                msg.channel.send('^give command requires user and role desired, if you would like a role, \"me\" is applicable');
                msg.channel.send('Try, ^give [username] [role]');
            }
            else
            {
                
            }
        }
        */
        if(msg.content.startsWith('^8ball'))
        {
            let messageRec = msg.content.substring(7);
            console.log(messageRec);
            
            //let replyList = ["You are indubitably correct", "You are mistaken", "Only an idiot would believe this", "Your assumptions are accurate", "Hell no idiot", "Yes!", "No!", "I must say, I do not know!"]
            let selectedReply = replyList[Math.floor(Math.random()*replyList.length)]
            console.log(selectedReply);
            msg.channel.send("You asked: " + messageRec + ", My reply is: " + selectedReply);    
        }
        if(msg.content.startsWith('^TTTp'))
        {
            if(playerGameStart === true)
            {
                msg.channel.send("There is still a game running, please complete the game, or enter ^TTTpEnd, before starting another one!");
            }
            playerGameStart = true;
            msg.channel.send("You are playing Tic Tac Toe \n Player 1 will be X, Player 2 will be O \n To make a move, enter ^X [1-9], where 1-9 represent the squares on a tic tac toe board.")
            let player1 = msg.content.author;
            let p2 = msg.content.substring(6);
            msg.channel.send(player1 + " make the first move!");


        }
        if(msg.content.startsWith('^TTTpEnd') && playerGameStart === true)
        {
            playerGameStart = false;
            msg.channel.send("Your current game has ended, you may start another!");
        }
        else if(msg.content.startsWith('^TTTpEnd') && playerGameStart === false)
        {
            msg.channel.send('There is no game running currently, you can start one with the command ^TTTp [Player 2 tag]');
        }
        if(playerGameStart === true)
        if(msg.content.startsWith('^8=D'))
        {
            let personP = msg.content.substring(5);
            if(personP === null || personP ==='')
            personP = msg.author.username;
            let length = Math.floor(Math.random()*12);
            let penRes = '8'
            for(let i = 0; i < length; i++)
            {
                penRes +='=';
            }
            penRes +='D';
            msg.channel.send(personP + "'s penis looks like \n" + penRes);
        }
        
    }
}

client.login('NzkyNjIwODUxNDkyMjkwNTkx.X-gXsQ.mp2ivRJiVvgDFKQJh8gqt1d09HI');