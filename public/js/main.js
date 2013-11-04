// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
      jquery: 'libs/jquery/jquery-min'
    , underscore: 'libs/underscore/underscore-min'
    , backbone: 'libs/backbone/backbone-min'
    , bootstrap: 'libs/bootstrap/js/bootstrap.min'
    , text: 'text'
    , handlebars: 'libs/handlebars/handlebars'
    , tpl: '../handlebars'

    , eventie: 'libs/bower_components/eventie'
    , 'doc-ready': 'libs/bower_components/doc-ready'
    , eventEmitter: 'libs/bower_components/eventEmitter'
    , 'get-style-property': 'libs/bower_components/get-style-property'
    , 'get-size': 'libs/bower_components/get-size'
    , 'matches-selector': 'libs/bower_components/matches-selector'
    , outlayer: 'libs/bower_components/outlayer'
    , masonry: 'libs/bower_components/masonry'

    , stroll: 'libs/bower_components/stroll'

    // , modernizr: 'libs/modernizr.custom'
    // , msnry: 'libs/masonry.pkgd.min'
    // , imagesLoaded: 'libs/imagesLoaded'
    // , classie: 'libs/classie'
    // , animOnScroll: 'libs/AnimOnScroll'
  }
});

require([
  // Load our app module and pass it to our definition function
  'app',

], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});
