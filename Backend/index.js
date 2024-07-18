const express = require("express");
const bookShop = express();
require("dotenv").config();
const cors = require("cors");
const bookRoute = require("./route/book.route.js");
const userRoute = require("./route/user.route.js");

//define cors
bookShop.use(cors());

//parse data into json format 
bookShop.use(express.json());

//define port
const port = process.env.PORT || 5000

//database connection
require("./database").dbconnect();

//default response
bookShop.get('/', (req, res) => {
    res.send("THE BOOK SHOP WELCOME YOU")
});

//define routes
bookShop.use("/book", bookRoute)
bookShop.use("/book/user", userRoute)


//server start
bookShop.listen(port, () => {
    console.log(`App listening on port ${port}`)
});