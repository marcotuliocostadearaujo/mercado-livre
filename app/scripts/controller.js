define( [
    "jquery",
    "backbone",
    "backbone.marionette",
    "model",
    "views/top",
    "views/search",
    "views/product"
], function( $, Backbone, Marionette, Model, TopView, SearchView, ProductView ) {

	var AppController = Marionette.Object.extend( {

        regions: {
            top: "#top",
            main: "#main"          
        },

		initialize: function() {
			var self = this;

            this.model = new Model();
            this.model.fetch();
		},

        renderTop: function() {
            var topView = new TopView( {
                el: this.regions.top,
                model: this.model
            } );
        },

		renderSearch: function() {
			var searchView = new SearchView( {
                el: this.regions.main,
                model: this.model
            } );
		},

        renderProduct: function() {
            var productView = new ProductView( {
                el: this.regions.main,
                model: this.model
            } );
        },

        defaultRoute: function() {
            this.renderTop();
        },

        goToSearch: function( query ) {
            console.log( query );
            this.renderTop();
            this.renderSearch();
        },

		goToProduct: function( id ) {
            console.log( id );
            this.renderTop();
            this.renderProduct();
        }

	} );

	return AppController;

} );