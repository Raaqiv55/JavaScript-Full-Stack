let express = require("express");
let ourApp = express();

ourApp.use(express.urlencoded({extended: false})); 

ourApp.get('/', function(req, res){
    res.send(`
        <form action="/answer" method="POST">
            <p>What color is the sky a clear and sunny day?</p>
            <input name="skyColor" autocomplete="off">
            <button>Sumbit Answer</button>
        </form>
    `);
});

ourApp.post('/answer', function(req, res){
    if(req.body.skyColor.toUpperCase() == 'BLUE'){
        res.send(`   
            <p>Congration! The is answer is correct</p>
            <a href="/">Back_to_Home</a>
        `);
    }else{
        res.send(`The answer is worng`);
    }
});

ourApp.get('/answer', function(req, res){
    res.send('Are you lost!');
});

ourApp.listen('3000');