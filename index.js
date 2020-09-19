const express = require('express');
const port = 9000;
const app = express();

//Setting Express Router
app.use('/', require('./routes'));

//installing ejs and setting view engine
app.set('view engine','ejs');
app.set('views','./views');

//Setting app to listen at the port
app.listen(port,function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
})