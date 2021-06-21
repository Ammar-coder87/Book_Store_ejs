/* 2- Rendering "queried_data.ejs" page using req.query when clicking on 
"Creat Account" button is existing insid "signUp.ejs" page.
 pay attintion: method="GET" insid <form> */

exports.getQueried_DataPage = (req, res, next)=>{
    console.log("req.query: ", req.query);
    res.render('queried_data', {
        username:req.query.username,
        email:req.query.email,
        pwd:req.query.pwd
    })
}