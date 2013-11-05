define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!tpl/music.html'
], function($, _, Backbone, Handlebars, musicHB){

  var MusicView = Backbone.View.extend({
    el: "#main-content",

    render: function(){
      var that = this;

      $(this.el).removeClass();

      $(that.el).html(musicHB);
    }

  });

  return MusicView;
});
