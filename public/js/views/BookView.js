define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  '../models/BookModel',
  '../collections/BookCollection',
  'text!tpl/books.html'
], function($, _, Backbone, Handlebars, BookModel, BookColl, bookHB){

  var BookView = Backbone.View.extend({
    el: "#main-content",
    banner: "#banner-image",
    bannerName: "#banner-name",

    render: function(){
      
      var that = this
        , book = new BookColl();

      var template = Handlebars.compile(bookHB);
      $(that.el).html(template({book: null}));
      
      book.fetch({
        success: function() {
          $(that.el).html(template({book: book.toJSON()}));
        }
      });

      $(this.banner).removeClass().addClass('books-banner');

    }
  });

  return BookView;
});
