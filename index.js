
const express = require('express');
const port = 9000;
const app = express();

//Requiring mongoose config
const db = require('./config/mongoose');


//Adding parser to decode form data from string to an JSON object
app.use(express.urlencoded());

//Setting Express Router
app.use('/', require('./routes'));


//serving statis files like css,js or images
app.use(express.static('assets'));

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