define( [
    "jquery",
    "backbone",
    "backbone.marionette",
    "controller"
], function( $, Backbone, Marionette, Controller ) {

	var AppRouter = Marionette.AppRouter.extend( {

		controller: new Controller(),

		appRoutes: {
			"items?search=:query": "goToSearch",
			"items/:id": "goToProduct",
			"*actions": "defaultRoute"
		}

	} );
	
	return AppRouter;

} );