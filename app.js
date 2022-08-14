//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");  // for LODASH

var homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
var aboutContent = "About us";
var contactContent = "";
var investorsContent ="Funding refers to the money required to start and run a business. It is a financial investment in a company for product development, manufacturing, expansion, sales and marketing, office spaces, and inventory.";
var resourcesContent ="";
var tipsContent ="";
var stratergiesContent="";
var similarContent="";

const search_topics = ["blogs","courses","ebooks"];
var s_top="";

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/",function(req,res){
  res.render("home",{
    key_1: homeStartingContent,
  });
})

app.get("/about",function(req,res){
  res.render("about",{key_2: aboutContent});
})

app.get("/blogs",function(req,res){
  res.render("blogs");
})
app.get("/courses",function(req,res){
  res.render("courses");
})
app.get("/ebooks",function(req,res){
  res.render("ebooks");
})

app.get("/contact",function(req,res){
  res.render("contact",{key_3: contactContent});
})


var flag=0;

app.post("/search",function(req,res){
  s_top = req.body.search_input
  search_topics.forEach(function(el){
    if (_.lowerCase(el) === s_top){
      flag+=1;
      // res.redirect("/"+s_top)
    }
  });
  if(flag===1){
    res.redirect("/"+s_top);
    flag=0;
  }
  else{
    res.render("err");
  }
})


app.get("/investor",function(req,res){
  res.render("investor",{key_4:investorsContent});
})

app.get("/resources",function(req,res){
  res.render("resources",{key_5:resourcesContent});
})

app.get("/tips",function(req,res){
  res.render("tips",{key_6:tipsContent});
})

app.get("/stratergies",function(req,res){
  res.render("stratergies",{key_7:stratergiesContent});
})

app.get("/similar",function(req,res){
  res.render("similar",{key_8:similarContent});
})


app.listen(process.env.PORT || 2000, function() {
  console.log("Server started on port 2000");
});
