//Namespace our influencers app
var app = app || {};

app.Influencers = Backbone.Collection.extend({
	
	model: app.singleInfluencer
});
