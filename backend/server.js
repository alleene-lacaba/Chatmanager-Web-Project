const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
/*const Discord = require('discord.js');
//const { prefix, token } = require('./config.json');
const bot = new Discord.Client();
const token =  "Nzc1NzUyODYyNzc2MTY0NDUz.X6q6Jw.j3XxrZ7cS0-kl0ETMR4q3XyatWk"; */



require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//const exercisesRouter = require('./routes/exercises');
const chatBotRouter = require('./routes/chatbots');

//app.use('/exercises', exercisesRouter);
app.use('/chatbots', chatBotRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
/*
bot.on('ready', () => {
  //var generalChannel = client.channel.fetch(); // Replace with known channel ID
  //generalChannel.send("Hello, world! from my web app");
  //client.user.setStatus('idle');
  console.log("bot is ready");
  bot.channels.fetch('750421483339251775')
  .then(channel => channel.send("hello from web app server with target general"));


});

bot.login(token);*/

