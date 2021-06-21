

exports.getDeatailsPage = (req, res, next) =>{
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
res.render("details", {data: anyBook});
}