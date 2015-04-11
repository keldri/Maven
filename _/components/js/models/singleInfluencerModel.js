// Namespace out app
var app = app || {};

app.singleInfluencer = Backbone.Model.extend({
	
	defaults: {
		color: "pink",
		img: "images/placeholder.jpg"
	},

	initialize: function() {
		console.log("model instance named" + this.get("name") + "has been created and it costs " + this.get("price"));
		
		this.on('change', function(){
			console.log("Something in our model has changed");
		});
		
		this.on('change:price',function(){
			console.log("the price for the" +
			this.get("name") + "model just changed to $" + this.get("price") + " dollars");
		})
	}
})
