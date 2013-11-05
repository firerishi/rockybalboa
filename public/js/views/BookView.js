define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  '../models/BookModel',
  '../collections/BookCollection',
  'text!tpl/books.html',
  'masonry/masonry'
], function($, _, Backbone, Handlebars, BookModel, BookColl, bookHB, Masonry){

  var BookView = Backbone.View.extend({
    el: "#main-content",
    banner: "#banner-image",
    bannerName: "#banner-name",

    render: function(){
      
      var that = this
        , book = new BookColl();

      $(that.el).addClass('books');

      var template = Handlebars.compile(bookHB);
      $(that.el).html(template({book: null}));

      setTimeout(function() {

      book.fetch({
        success: function() {
          $(that.el).html(template({book: book.toJSON()}));

          // var container = document.querySelector('#booksContainer')
          //   , msnry = new Masonry( container, {
          //     columnWidth: 100,
          //     gutter: 10,
          //     itemSelector: '.item'
          //   });
      new AnimOnScroll( document.getElementById( 'grid' ), {
              minDuration : 0.4,
              maxDuration : 0.7,
              viewportFactor : 0.2
          } );
        }
      });

      }, 2000);

      $(this.banner).removeClass();

    }
  });

  return BookView;
});
