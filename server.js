var application_root = "mercado-livre",
	express = require( "express" ),
    bodyParser = require( "body-parser" ),
    request = require( "request" );
    path = require( "path" );

var app = express();

app.use( express.static( path.join( application_root,"../", "app") ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );

var port = 8888;

app.get("/api/items", function( apiRequest, apiResponse ) {
	request( "https://api.mercadolibre.com/sites/MLA/search?q=" + apiRequest.query.q, function( error, response, body ) {
		apiResponse.send( JSON.parse( body ) );
	} );
});

app.get("/api/items/:id", function( apiRequest, apiResponse ) {
	request( "https://api.mercadolibre.com/items/" + apiRequest.params.id, function( error, response, body ) {
		apiResponse.send( JSON.parse( body ) );
	} );
});

app.get("/api/items/:id/description", function( apiRequest, apiResponse ) {
	request( "https://api.mercadolibre.com/items/" + apiRequest.params.id + "/description", function( error, response, body ) {
		apiResponse.send( JSON.parse( body ) );
	} );
});

app.listen( port, function() {
    console.log( "Express server listening on port %d in %s mode", port, app.settings.env );
} );