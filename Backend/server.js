const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDB = require('./config')
//routes
const characterRoute = require('./routes/characterRoutes')
const itemRoute = require ('./routes/itemRoutes')
//models
const Enemy = require('./models/enemyModel')
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


connectToDB();
app.get("/",(req,res)=>{
    res.send("index page")
})

//Calling all routes
app.use('/character', characterRoute);
app.use('/item', itemRoute);









//enemy
// read
app.get("/enemy",async(req,res)=>{
    const enemies = await Enemy.find();
    res.json(enemies)
})
app.get("/enemy/:name",async(req,res)=>{
    const enemyName = req.params.name
    const enemy = Enemy.findOne({name:enemyName});
    res.json(enemy)
})
// create
app.post("/enemy", async(req,res)=>{
    const enemy = await Enemy.create(req.body)
    console.log(req.body)
    res.json(enemy)
})

//update
app.put("/enemy/:name",async(req,res)=>{
    const enemyName = req.params.name
    const {health,mana} = req.body

    const enemy = await Enemy.findOne({name :enemyName})
    const updatedEnemy = await Enemy.findOneAndUpdate(
        {name:enemyName},
        {
            health: health,
            mana: mana
        }
    )
    console.log(req.body)
    res.json(enemy)
})
//delete
app.delete("/enemy/delete/:name",async(req,res)=>{
    const enemyName = req.params.name
    await Enemy.deleteOne({
      name: enemyName
    })
    res.json({success: "Record has been deleted successfully"})
})





app.listen(PORT,()=>{
    console.log(`Server has listening on port ${PORT}`)
})