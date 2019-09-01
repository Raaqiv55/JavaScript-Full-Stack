function greet(callback){
    console.log('Hello');
    let data = {
        name: 'John Doe' 
    };
    callback(data);
}

greet(function(data){
    console.log('The callback function is invoke');
    console.log(data);
});

greet(function(data){
    console.log('The different function is invoke');
    console.log(data.name);
});
