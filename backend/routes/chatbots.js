const router = require('express').Router();
const Discord = require('discord.js');
//const { prefix, token } = require('./config.json');
const bot = new Discord.Client();
const token =  "Nzc1NzUyODYyNzc2MTY0NDUz.X6q6Jw.j3XxrZ7cS0-kl0ETMR4q3XyatWk";
const prefix = "!";
const chatbot ={
  name: "alleene",
  nickname: "bambi"
}



router.route('/loginbot').get((req, res) => {
  res.send({client : chatbot});
});

router.route('/respond-to-message').get((req, res) => {
  res.send({client : chatbot});
});





bot.on('ready', () => {
  //var generalChannel = client.channel.fetch(); // Replace with known channel ID
  //generalChannel.send("Hello, world! from my web app");
  //client.user.setStatus('idle');
  console.log("bot is ready");
  bot.channels.fetch('764039626368614420')
  .then(channel => channel.send("hello from web app server with target general"));
  bot.users.fetch('541298418719653908')
  .then((user) => {
    user.send('heloo testing private message from web app');
   })
  .catch(message => console.log((message)));

});

bot.on('message', message => {
	if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send('Pong.');
    } else if (message.content.startsWith(`${prefix}beep`)) {
        message.channel.send(`Boop. and created at: ${message.createdAT}`);
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