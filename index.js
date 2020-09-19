const express = require('express');
const port = 9000;
const app = express();

//Setting Express Router
app.use('/', require('./routes'));

//Setting app to listen at the port
app.listen(port,function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
})