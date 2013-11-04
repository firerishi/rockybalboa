define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!tpl/home.html'
], function($, _, Backbone, Handlebars, homeHB){

  var BookView = Backbone.View.extend({
    el: "#main-content",
    banner: "#banner-image",
    bannerName: "#banner-name",

    // events: {
    //     'click .menu-bar'              : 'toggle_menu'
    // },

    // toggle_menu: function() {
    //   console.log('toggle time');
    // },

    render: function(){

      var template = Handlebars.compile(homeHB);
      $(this.el).html(template());

      $(this.banner).removeClass().addClass('home-banner');
      $(this.bannerName).html('');

    }
  });

  return BookView;
});
