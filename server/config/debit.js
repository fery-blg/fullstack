const mongoose = require('mongoose')



module.exports= async function db_connect(URL){
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("mongodb connected"))
  .catch((e) => console.log("error connection the database",e));

}



