define( [
    "jquery",
    "backbone",
    "backbone.marionette",
    "handlebars",
    "text!templates/product.html",
], function( $, Backbone, Marionette, Handlebars, Template ) {

    var ProductView = Marionette.View.extend( {

        template: Handlebars.compile( Template ),

        initialize: function() {
            var self = this;

            this.render();
        }

    } );

    return ProductView;

} );