// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 1337;

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var fs = require( 'fs' );

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/uploads', express.static('uploads'))
var buildImagesPath = function( filename ) {
    return 'http://localhost:' + port + '/uploads/' + filename;
}
// routes will go here
app.get( '/api/images', function(req, res, next) {
    var images = [];
    var reg = /\.(?:jpg|gif|png)$/
    fs.readdir( 'uploads/', function( err, files ) {
        files.forEach( function( file ) {
            if (file.match( reg )) {
                images.push( buildImagesPath( file ) );
            }
        } )
        res.send( { data: images } );
    } );
} );
app.post( '/api/images', upload.single( 'image' ), function(req, res, next) {
    console.log(req.image);
    res.send( req.files );
} );

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
