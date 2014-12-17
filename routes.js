var content = require('./content');

module.exports = function(app) {

  app.route('/')
  .get(function(req, res) {
    res.render('index', content('home'));  
  });

  app.route('/:slug')
  .get(function(req, res){
    console.log('Called post route.');  
    res.render('index', content('post'));      
  });                    
  
  app.route('/tag/:tag')
  .get(function(req, res){
    console.log('Called /tag/ route.');
    res.render('index', content('tag'));
  });

  app.route('/page/:slug')
  .get(function(req, res){
    console.log('Called /page/ route.');  
    res.render('index', content('page'));
  });
  
};