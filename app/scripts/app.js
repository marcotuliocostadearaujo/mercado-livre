define( [
    "jquery",
    "backbone",
    "backbone.marionette",
    "router"
], function( $, Backbone, Marionette, Router ) {

    var App,
        appRouter;

    App = Marionette.Application.extend( {

        onStart: function() {
            appRouter = new Router();
            Backbone.history.start();
        }

    } );

    return App;

} );