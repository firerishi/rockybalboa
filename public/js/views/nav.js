define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!tpl/navlist.html'
], function($, _, Backbone, Handlebars, navListHB){

  return Backbone.View.extend({

    el: "#nav-area",
    
    events: {
        'click #main-nav > li'              : 'navigate'
    },

    navigate: function(e) {
      e.preventDefault();
      var target = $(e.currentTarget)
        , link = target.children().attr('href');

      window.location.href = link;

      $('#main-content, #nav-shelf, #menu-bar').toggleClass('show-menu-shelf');
      // if ($('#menu-bar').hasClass('show-menu-shelf')) {
      //   $('#banner-image').toggleClass('shadow');
      // }

      $('#main-nav li').removeClass('active');

      target.addClass('active');
    },

    render: function(){

      var template = Handlebars.compile(navListHB);
      $(this.el).html(template());

    }


  });

});
