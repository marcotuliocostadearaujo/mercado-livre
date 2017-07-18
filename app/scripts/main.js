require.config( {

	baseUrl: "/scripts/",

	paths: {
		"jquery": "vendor/jquery",
		"underscore": "vendor/underscore",
		"backbone": "vendor/backbone",
		"backbone.marionette": "vendor/backbone.marionette",
		"backbone.radio": "vendor/backbone.radio",
		"handlebars": "vendor/handlebars",
		"text": "vendor/text",
		"model": "model",
		"router": "router",
		"controller": "controller"
	},

	shim: {
        "underscore": {
            exports: "_"
        },
        "backbone": {
            deps: [ "jquery", "underscore" ],
            exports: "Backbone"
        },
		"handlebars": {
			exports: "Handlebars"
		},
		"backbone.marionette": {
            deps: [ "backbone" ],
            exports: "Backbone.Marionette"
        },
        "backbone.radio": {
            deps: [ "backbone" ],
            exports: "Backbone.Radio"
        }
	}

} );

require( [ "app" ], function( App ) {
	var self = this,
		app;
		
	app = new App();
	app.start();
});