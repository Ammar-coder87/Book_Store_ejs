
/* 1- Rendering "personal_data.ejs" page using req.body when clicking on 
"Creat Account" button is existing insid "signUp.ejs" page.
 pay attintion: method="POST" insid <form> */
exports.getPersonal_DataPage = (req, res, next)=>{
    console.log("req.body: ", req.body);
    
    res.render('personal_data',{data: req.body});
    
}