const express = require('express');
const port = 9000;
const app = express();


//Setting app to listen at thr port
app.listen(port,function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
})