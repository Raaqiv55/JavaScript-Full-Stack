let bodyParser = require('body-parser');
let urlencoded = bodyParser.urlencoded({ extended: false });

module.exports = function(app){
    
    app.get('/', function(req, res){
        res.render('index');
     });
     app.get('/person/:id', function(req, res){
         res.render('person', {ID: req.params.id, Qutr: req.query.qutr});
     });
     
     app.post('/person', urlencoded, function(req, res){
         res.send('Thank your');
         console.log(req.body.firstname);
         console.log(req.body.lastname);
     } );
     
}