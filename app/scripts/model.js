define( [
    "jquery",
    "backbone"
], function( $, Backbone ) {

	var MainModel = Backbone.Model.extend( {

		url: "/api/items"

	} );

    return MainModel;

} );