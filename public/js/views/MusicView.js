define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!tpl/music.html',
  'stroll/js/stroll'
], function($, _, Backbone, Handlebars, musicHB){

  var MusicView = Backbone.View.extend({
    el: "#main-content",
    banner: "#banner-image",
    bannerName: "#banner-name",

    render: function(){
      
      var that = this;

      $(this.el).removeClass();

      var template = Handlebars.compile(musicHB);
      $(that.el).html(template());

      stroll.bind('ul#gridList');

      $(this.banner).removeClass();

    }
  });

  return MusicView;
});
