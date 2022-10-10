var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const name1 = {
    myName: 'Adekunle Oduneye',
    missionStatement: "My mission is to add value to any task or project I am part of in a way that would benefit the world immensely." 
  }
  res.render('index', { title: 'Home', names:name1});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  const name1 = {
    myName: 'Adekunle Oduneye',
    missionStatement: "My mission is to add value to any task or project I am part of in a way that would benefit the world immensely." 
  }
  res.render('index', { title: 'Home', names:name1});
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  const name1 = {
    myName: 'Adekunle Oduneye',
    missionStatement: "My mission is to add value to any task or project I am part of in a way that would benefit the world immensely." 
  }
  res.render('about', { title: 'About Me',  names:name1});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('project', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('service', { title: 'Services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us'});
});

module.exports = router;
