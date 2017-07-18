define( [
    "jquery",
    "backbone",
    "backbone.marionette",
    "handlebars",
    "text!templates/top.html",
], function( $, Backbone, Marionette, Handlebars, Template ) {

    var TopView = Marionette.View.extend( {

        template: Handlebars.compile( Template ),

        initialize: function() {
            var self = this;

            this.render();
        }

    } );

    return TopView;

} );