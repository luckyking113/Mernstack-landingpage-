const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
var request = require('superagent');

var mailchimpInstance   = 'us6',
    listUniqueId        = '6824111615',
    mailchimpApiKey     = '605981c9511c99614bb7034413e6c98d-us15';
    
mongoose.connect('mongodb://localhost/mpdbb');
// const db = mongoose.connection;

Model = require('../models/model');

router.get('/', (rep, res) => {
  res.send('api works!');
})

// router.get('*', function(req, res) {
//     res.sendfile('./public/views/index.html');
// })

router.get('/storybook', function(req, res) {
    Model.getModels(function(err, models) {
        if (err) {
            throw err;
        }
        res.json(models);
    });
});

router.get('/storybook:_id', function(req, res) {
    Model.getModelById(req.params._id, function(err, model) {
        if (err) {
            throw err;
        }
        res.json(model);
    });
});


router.put('/storybook:_id', function(req, res) {
    const id = req.params._id;
    const model = req.body;
    Model.updateModel(id, model, {}, function(err, model) {
        if (err) {
            throw err;
        }
        res.json(model);
    });
});

router.delete('/storybook:_id', function(req, res) {
    const id = req.params._id;
    Model.removeModel(id, function(err, model) {
        if (err) {
            throw err;
        }
        res.json(model);
    });
});

router.post('/signup', (req, res) => {
    const model = req.body;
    Model.addModel(model, function(err, model) {
        if(err) {
            res.status(404);
        }
        res.status(200).json(model);
    });
})


module.exports = router;