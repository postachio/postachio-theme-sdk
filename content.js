var swig = require('swig');

swig.setFilter('format_tag', function(input, id) {
  return input[id];
});

swig.setFilter('format_date', function(input, id) {
  return '2014-11-10';
});

swig.setFilter('format_tag', function(input, id) {
  return 'tag';
});

module.exports = function(type) {
  
  var global = {
    assets: function(location) {
      return '/assets/' + location;
    },
    static: function(location) {
      return 'http://postach.io/static/' + location;
    },
    set_active: function(location) {
      return 'active';
    },
    header_meta: '',
    footer_meta: '',
    login_form: '',
    is_login: false,
    is_home: false,
    is_tag: false,
    site: {
      avatar: '',
      author: '',
      name: '',
      analytics: false,
      cover_photo: '',
      facebook: '',
      twitter: '',
      googleplus: '',
      linkedin: '',
      atom_url: '',
      disqus: '',
      base_url: '/'
    },
    post: {
      title: ''
    },
    posts: [{
      permalink: '',
      title: '',
      content: '',
      created_at: '',
      type: 'post',
      url: '',
      tags: ['tag-one', 'another-tag', 'content']
    }],
    tag: {
      name: ''
    },
    page: {
      permalink: '',
      title: ''    
    },
    pages: [{
      _id: '',
      permalink: '',
      title: '',
      content: ''
    }],
    pagination: {
      prev: '',
      next: ''
    }
  };

  var data = {
    page: global,
    post: global,
    tag: global,
    home: global
  }
  
  return data[type];

};