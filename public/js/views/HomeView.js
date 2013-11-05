define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!tpl/home.html'
], function($, _, Backbone, Handlebars, homeHB){

  var BookView = Backbone.View.extend({
    el: "#main-content",

    // events: {
    //     'click .menu-bar'              : 'toggle_menu'
    // },

    // toggle_menu: function() {
    //   console.log('toggle time');
    // },

    render: function(){

      $(this.el).removeClass();

      var template = Handlebars.compile(homeHB);
      $(this.el).html(template());

    }
  });

  return BookView;
});
