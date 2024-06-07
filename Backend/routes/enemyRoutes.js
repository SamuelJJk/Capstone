const express = require('express');
const router = express.Router();
const Enemy = require("../models/enemyModel");

//enemy
// read
router.get("/",async(req,res)=>{
    const enemies = await Enemy.find();
    res.json(enemies)
})
router.get("/:name",async(req,res)=>{
    const enemyName = req.params.name
    const enemy = Enemy.findOne({name:enemyName});
    res.json(enemy)
})
// create
router.post("/", async(req,res)=>{
    const enemy = await Enemy.create(req.body)
    console.log(req.body)
    res.json(enemy)
})

//update
router.put("/:name",async(req,res)=>{
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
router.delete("/delete/:name",async(req,res)=>{
    const enemyName = req.params.name
    await Enemy.deleteOne({
      name: enemyName
    })
    res.json({success: "Record has been deleted successfully"})
})
module.exports = router;