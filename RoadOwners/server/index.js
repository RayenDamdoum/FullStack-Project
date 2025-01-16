const express = require("express");
var cors = require('cors')
let app = express();
require("./models/index")
const routers=require("./routes/products.route")
const uRoute=require("./routes/user.route")


app.use(express.json());
app.use(cors())

//app.use(express.static(__dirname + "/../client/dist"));
app.use("/api/prods",routers)
app.use("/api",uRoute)
let port = 3000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
