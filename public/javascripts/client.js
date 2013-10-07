var Book = Backbone.Model.extend({
	idAttribute: '_id'
});

var BookCollection = Backbone.Collection.extend({
	url: '/books',
	model: Book
});