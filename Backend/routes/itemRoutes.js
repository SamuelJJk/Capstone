const express = require('express')
const router = express.Router();
const Item = require('../models/itemModel')


// Items route
// read
router.get("/",async(req,res)=>{
    const item = await Item.find()
    res.json(item)
})
router.get("/:name",async(req,res)=>{
    const itemName = req.params.name
    const item = await Item.findOne({name :itemName})
    res.json(item)
})
//create
router.post("/",async(req,res)=>{
    const item = await Item.create(req.body)
    console.log(req.body)
    res.json(item)
})
router.delete("/:name", async(req, res) => {
    const itemName = req.params.name;
    const itemId = req.params.id;

    await Item.deleteOne({ itemId });
    res.json({ success: "Record has been deleted successfully" });
});

module.exports = router;