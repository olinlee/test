const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/f65",{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on("connected",function(){
    console.log("mongoose已经成功链接上 localhost/f65 了");
})


require("./models/usersModel")