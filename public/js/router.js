// Filename: router.js
define([
    'jquery'
  , 'underscore'
  , 'backbone'
  , 'views/HomeView'
  , 'views/BookView'
  , 'views/ui'
  , 'views/nav'
], function($, _, Backbone, HomeView, BookView, UIView, NavView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {

        'books': 'showBooks'
      , '*actions': 'defaultAction'

    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter
      , uiView = new UIView()
      , navView = new NavView();

    uiView.render(); 
    navView.render();

    app_router.on('route:showBooks', function (actions) { 
      var bookView = new BookView();
      bookView.render();
    });   

    app_router.on('route:defaultAction', function (actions) { 
      var homeView = new HomeView();
      homeView.render();
    });   

    Backbone.history.start();
  };
 
  return { 
    initialize: initialize
  };
});
