const express = require('express');
const app = express();
const ejs = require('ejs');
const router = express.Router();
const body = require("body-parser");
app.use(body.urlencoded({extended:false}));
const path = require('path');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
//app.set('views',path.join(__dirname,'views'));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render('index');
});
app.get("/about", (req, res)=>{
    res.render('about');
});
app.get("/weather", (req, res)=>{
    res.render('weather');
});
app.get("*", (req, res)=>{
    res.send("404 error page does not exists");
});
app.listen(port, ()=>{
    console.log(`Listening to port no. ${port}`)
});
module.exports = router;