const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

const User = require('../model/user');  
const Friendship = require('../model/friendship');

router.post('/users', (req, res) => {
  User.create({
          name: req.body.name,
          gender: req.body.gender,
          age: req.body.age
      }, 
       (err, user) =>{
          if (err) return res.status(500).send(
            { code: 500,
              message:"There was a problem adding the information to the database.",
              error: err
            });
          res.status(200).send(
            {
              code: 200,
              message: "User added succesfully"
            });
      });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/',(req, res) => {
  User.find({},(err, users) => {
      if (err) return res.status(500).send(
        {
          code: 500,
          message:"There was a problem retrieving users from the database.",
          error: err
        });
      res.status(200).send(
        {
        code: 200,
        message: "Users retrieved succesfully."
        });
    });
});

router.post('/friendships', (req, res) => {
  Friendship.create({
          name : req.body.name,
          gender : req.body.gender,
          age : req.body.age
      }, 
       (err, user) =>{
          if (err) return res.status(500).send(
            { code: 500,
              message:"There was a problem adding the information to the database.",
              error: "Server Error"
            });
          res.status(200).send(
            {
              code: 200,
              message: "User added succesfully"
            });
      });
});

// RETURNS ALL THE FRIENDSHIPS IN THE DATABASE
router.get('/friendships',(req, res) => {
  Friendship.find({},(err, users) => {
      if (err) return res.status(500).send(
        {
          code: 500,
          message:"There was a problem retrieving friendships from the database.",
          error: err
        });
      res.status(200).send(
        {
        code: 200,
        message: "Friendships retrieved succesfully."
        });
    });
});

module.exports = router;