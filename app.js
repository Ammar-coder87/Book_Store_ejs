const express = require("express");
const app = express();
//const router = express.Router();
//const querystring = require('querystring');
const bodyparser = require("body-parser")
app.use(express.urlencoded({extended : true}));
//app.use("/details", router); 
const path = require('path');
const port = 5000;

//View Engine Setup
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

// Serve Static Files from /statics
app.use("/statics", express.static(path.join(__dirname, "/statics")))

// Rendering and getting data to 'filter_index.ejs' page when typing localhost: 5000 in URL.
app.get("/",(req, res, next)=>{
    
    res.render('filter_index', {books: books})
});

// Rendering "signUp.ejs" page
app.get("/signUp", (req, res, next)=>{
   
    res.render('signUp')
});

/* 1- Rendering "personal_data.ejs" page using req.body when clicking on 
"Creat Account" button is existing insid "signUp.ejs" page. pay attintion: method="POST" insid <form> */

app.post("/register", (req, res, next)=>{
    
    console.log("req.body: ", req.body);
    
    res.render('personal_data',{data: req.body});
    
});

/* 2- Rendering "queried_data.ejs" page using req.query when clicking on 
"Creat Account" button is existing insid "signUp.ejs" page.
 pay attintion: method="GET" insid <form> */

/*app.get("/register", (req, res, next)=>{
    console.log("req.query: ", req.query);
    console.log("req.body: ", req.body);
    console.log("req.params: ", req.params);

// let all = {username:req.body.username, email:req.body.email, pwd:req.body.pwd}
    // res.render('queried_data', {queries: all});
    res.render('queried_data', {
        username:req.query.username,
        email:req.query.email,
        pwd:req.query.pwd
    })
});*/


// Declaring Array of Object that contain all data(all books we have).
let books = [{
    id: "1",
    name: "Hello World",
    category: "IT",
    price: "$70",
    picture: "/statics/images/IT.jpg"
}, {
    id: "2",
    name: "ORGANIC Chemistry",
    category: "Chemistry",
    price: "$60",
    picture: "/statics/images/chry.jpg" 
}, {
    id: "3",
    name: "Advanced Physics",
    category: "Physics",
    price: "$45",
    picture: "/statics/images/phcs.jpg"  
}, {
    id: "4",
    name: "JavaScript: The Good Parts",
    category: "IT",
    price: "$45",
    picture: "/statics/images/IT2.jpg" 
}];


/* When we click on "Filter" button, we select one book or all of books from category of 
selections based on "category" key insid Array of data which must matches
 "category" name in <form><option> */
app.get("/fltr", (req, res, next)=>{
    let oneCard = [];

    if (Object.keys(req.query).length == 0) {
res.render ('filter_index', {
    books: books
})
    }else{
        for(let i=0; i<Object.keys(books).length; i++){
            if(books[i]["category"]==req.query.category){
            oneCard.push(books[i])
        }
        }
        res.render('filter_index', {
            books: oneCard
        });
    }
});






/*let books = [{
    id: "1",
    name: "Hello World",
    category: "IT",
    price: "$70",
    picture: "/statics/images/IT.jpg"
}, {
    id: "2",
    name: "ORGANIC Chemistry",
    category: "Chemistry",
    price: "$60",
    picture: "/statics/images/chry.jpg" 
}, {
    id: "3",
    name: "Advanced Physics",
    category: "Physics",
    price: "$45",
    picture: "/statics/images/phcs.jpg"  
}, {
    id: "4",
    name: "JavaScript: The Good Parts",
    category: "IT",
    price: "$45",
    picture: "/statics/images/IT2.jpg" 
}];*/



app.get("/details/:id", (req, res, next)=>{

    let id = req.params.id;
    let anyBook = [];

    let books = [{
        id: "1",
        name: "Hello World",
        category: "IT",
        price: "$70",
        picture: "/statics/images/IT.jpg"
    }, {
        id: "2",
        name: "ORGANIC Chemistry",
        category: "Chemistry",
        price: "$60",
        picture: "/statics/images/chry.jpg" 
    }, {
        id: "3",
        name: "Advanced Physics",
        category: "Physics",
        price: "$45",
        picture: "/statics/images/phcs.jpg"  
    }, {
        id: "4",
        name: "JavaScript: The Good Parts",
        category: "IT",
        price: "$45",
        picture: "/statics/images/IT2.jpg" 
    }];
    

for (let i = 0; i < Object.keys(books).length; i++) {

    if (books[i]["id"] === id) {
anyBook.push(books[i])
    };
};
console.log("req.params: ", req.params);
res.render('details', {data: anyBook});

});

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