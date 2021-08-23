let date= new Date();

let currentHour= date.getHours();

let currentDay = date.getDay();
const logger = (req,res,next)=>{
    if (currentHour > 9 && currentHour < 17 && currentDay > 0 && currentDay < 6){
        next()
}else{res.send("<h1> Sorry, come later <h1>")}
}
module.exports= logger