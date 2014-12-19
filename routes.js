var content = require('./content');

module.exports = function(app) {

  app.route('/')
  .get(function(req, res) {
    res.render('theme', content('home'));  
  });

  app.route('/:slug')
  .get(function(req, res){
    console.log('Called post route: /:slug');  
    res.render('theme', content('post'));      
  });                    
  
  app.route('/tag/:tag')
  .get(function(req, res){
    console.log('Called tag route: /tag/:tag');
    res.render('theme', content('tag'));
  });

  app.route('/page/:slug')
  .get(function(req, res){
    console.log('Called page route: /page/:slug');
    res.render('theme', content('page'));
  });
  
};