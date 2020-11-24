const router = require('express').Router();
let Channel = require('../models/channel.model');

router.route('/').get((req, res) => {
    Channel.find()
    .then(channels => res.json(channels))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const id = req.body.id;

  const newChannel = new Channel({
    name,
    id
  });

  newChannel.save()
  .then(() => res.json('Channel added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Channel.findById(req.params.id)
    .then(channel => res.json(channel))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Channel.findByIdAndDelete(req.params.id)
    .then(() => res.json('Channel deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Channel.findById(req.params.id)
    .then(channel => {
        channel.name = req.body.username;
        channel.id = req.body.description;
        channel.save()
        .then(() => res.json('Channel updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;