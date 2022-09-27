const express= require('express');
const cookieParser= require('cookie-parser')
const path=require('path');
const app= express();
app.set('view engine', 'ejs');

app.use(cookieParser());
app.set('views', path.join(__dirname, 'templates/views'))

app.get('/add', function(req,res,next){
    if(req.cookies.StudentId){
        console.log("i remember you");
    }else{
        res.cookie("student",21664, {maxAge:600000})
        console.log('Cookie added')
    }
    res.render('form.ejs');
});
app.post('/add', (req,res,next)=> {
    let cookies= req.body.cookie;
    res.redirect('/');
});
app.listen(3000);
