const express = require('express');
const router = express.Router();
const Character = require('../models/characterModel')


// read
router.get("/",async(req,res)=>{
    const character = await Character.find()
    res.json(character)
})
router.get("/:name",async(req,res)=>{
    console.log(req.body)
    const characterName = req.params.name
    const character = await Character.findOne({name :characterName})
    res.json(character)
})
// create
router.post("/",async(req,res)=>{
    const character = await Character.create(req.body)
    // console.log(req.body)
    res.json(character)
})
//update
router.put("/:name",async(req,res)=>{
    const characterName = req.params.name
    const {health,mana} = req.body

    const character = await Character.findOne({name :characterName})
    const updatedCharacter = await Character.findOneAndUpdate(
        {name:characterName},
        {
            health: health,
            mana: mana
        }
    )
    console.log(req.body)
    res.json(character)
})
//delete
router.delete("/deleteAll",async(req,res)=>{
    console.log(req.body)
    const character = await Character.deleteMany({})
    res.json(character)
})
router.delete("/delete/:name",async(req,res)=>{
    const characterName = req.params.name
    const characterid = req.params.id
    await Character.deleteOne({
      name: characterName
    })
    await Character.deleteOne({
        id: characterid
    })
    res.json({success: "Record has been deleted successfully"})
})

module.exports = router