const router = require('express').Router();
const Discord = require('discord.js');
//const chatBotManager = require('chat_manager_library');
//const { prefix, token } = require('./config.json');
const bot = new Discord.Client();
const token =  "Nzc1NzUyODYyNzc2MTY0NDUz.X6q6Jw.HNsr3hX8RHDnp4ItzBNsAxhH2Qg";
const prefix = "!";
var text = "";
var tempArr = [];
var resToMessage = "";

router.route('/loginbot').get((req, res) => {
  res.send({client : bot});
});



router.route('/respond-to-message').post((req, res) => {
  resToMessage = req.body.message;
  bot.on('message', message => {
    if (message.content.startsWith(`${prefix}help`)) {
          message.channel.send(resToMessage);
      } 
  });
  res.send({client : bot});
});
/*
router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
}); */





bot.on('ready', () => {
  //client.user.setStatus('idle');
  console.log("bot is ready");
  bot.channels.fetch('764039626368614420')
  .then(channel => channel.send("hello from web app server with target general"));
  bot.users.fetch('541298418719653908')
  .then((user) => {
    user.send('heloo testing private message from web app');
   })
  .catch(message => console.log((message)));
   
  var channels = bot.channels.cache.forEach(logMapElements);
  //console.log(channels);
  parseChannels(tempArr);
  //console.log(channels.type);
  //parseChannels(arra);


});

bot.on('message', message => {
	if (message.content.startsWith(`${prefix}help`)) {
        message.channel.send('Thank for visiting our website, please check documentation from our Github page for installation and usage of every functions at: https://github.com/CSCI-49900-Fall-2020/project-chatmanager');
    } else if (message.content.startsWith(`${prefix}ListChannels`)) {
        message.channel.send(`Channels are: ${text}`);
    }
    else if (message.content === `${prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
        console.log(message.guild.members);
    }
    else if (message.content === `${prefix}user-info`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
});

bot.login(token);
function logMapElements(value, key, map) {
  tempArr.push(value.name);
}

function parseChannels(tempArr){
  
  var x;
  for (x in tempArr) {
    text += tempArr[x] + ", ";
  }
  console.log(text);
}
/*
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
}); */

module.exports = router;