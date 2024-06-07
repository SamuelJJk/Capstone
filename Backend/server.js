const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDB = require('./config')
//routes
const characterRoute = require('./routes/characterRoutes')
const itemRoute = require ('./routes/itemRoutes')
const enemyRoute = require('./routes/enemyRoutes')
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//starting connecting to mongo
connectToDB();

app.get("/",(req,res)=>{
    res.send("index page")
})

//Calling all routes
app.use('/character', characterRoute);
app.use('/item', itemRoute);
app.use('/enemy', enemyRoute);

//starting up Server
app.listen(PORT,()=>{
    console.log(`Server has listening on port ${PORT}`)
})