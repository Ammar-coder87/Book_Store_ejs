
// Rendering and getting data to 'filter_index.ejs' page when typing localhost: 5000 in URL.
exports.getFilter_IndexPage = (req, res, next) =>{

    res.render('filter_index', {books: books})
}


// Declaring Array of Object that contain all data(all books we have).
/* When we click on "Filter" button, we select one book or all of books from category of 
selections based on "category" key insid Array of data which must matches
 "category" name in <form><option> */

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

exports.getFilter_IndexPage = (req, res, next) =>{

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
}