define( [
    "jquery",
    "backbone",
    "backbone.marionette",
    "handlebars",
    "text!templates/search.html",
], function( $, Backbone, Marionette, Handlebars, Template ) {

    var SearchView = Marionette.View.extend( {

        template: Handlebars.compile( Template ),

        initialize: function() {
            var self = this;

            this.render();
        }

    } );

    return SearchView;

} );