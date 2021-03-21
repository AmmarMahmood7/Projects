let express =  require("express")

let bodyParser = require("body-parser");


app = express();

app.use(bodyParser.urlencoded({extended:true}));//

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")
})
app.post("/",function(req,res){

    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result  = num1 + num2//if the values are not converted to Number then the result would return as text

    res.send("The result is " + result);
})

app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator",function(req,res){

    let height = parseFloat(req.body.height);
    let weight = parseFloat(req.body.weight);
    console.log(req.body.weight)

    let bmi = weight/(height*height);

    res.send("your bmi is " + bmi);
})

app.listen(3000,function(){
    console.log("the server has started listening at port 3000 @" + Date());
});
