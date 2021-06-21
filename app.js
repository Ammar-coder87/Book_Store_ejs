const express = require("express");
const app = express();
//const bodyparser = require("body-parser")

const filter_indexRoute = require("./routes/filter_indexRoute")
const detailsRoute = require("./routes/detailsRoute")
const personal_dataRoute = require("./routes/personal_dataRoute")
const queried_dataRoute = require("./routes/queried_dataRoute")
const signUpRoute = require("./routes/signUpRoute")
const signUp_queryRoute = require("./routes/signUp_queryRoute")
const path = require('path');
const port = 5000;

app.use(detailsRoute)
app.use(filter_indexRoute)
app.use(personal_dataRoute)
app.use(queried_dataRoute)
app.use(signUpRoute)
app.use(signUp_queryRoute)
app.use(express.urlencoded({extended : true}));

//View Engine Setup
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

// Serve Static Files from /statics
app.use("/statics", express.static(path.join(__dirname, "/statics")))




//Start the Server
app.listen(port, ()=>{
    console.log('listening to the server')
    });









    

    //this is another way to render data.

    /*app.get("/details", (req, res, next)=>{
    const pic = "/statics/images/IT.jpg"
    const data = {
        title: "HELLO WORLD",
        category: "IT",
        Describtion: "For Begeners",
        pic: pic
    };
    res.render('details', 
        data)
    
});*/


//app.get("/details/:id", (req, res, next)=>{
    /*using function that let us to filter all objects and 
    choose a specific object and render it*/
     /*function filterValue(obj, key, value) {
        return obj.filter(function(v){ return v[key] === value});
        
      }
      
      const fstBook = filterValue(books, "id", "1");
      
     res.render('details', {data: fstBook})
    })*/

    //res.render('details', books[0])