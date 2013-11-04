define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!tpl/nav.html'
], function($, _, Backbone, Handlebars, navHB){

  return Backbone.View.extend({

    el: "#nav-shelf",
    
    events: {
        'click #menu-bar'              : 'toggle_menu'
    },

    toggle_menu: function() {
      $('#main-content, #nav-shelf, #menu-bar').toggleClass('show-menu-shelf');
      // if ($('#menu-bar').hasClass('show-menu-shelf')) {
      //   $('#banner-image').toggleClass('shadow');
      // }
    },

    render: function(){

      var template = Handlebars.compile(navHB);
      $(this.el).html(template());

    }


  });

});
