const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name:String,
    charClass:String,
    health:Number,
    mana:Number,
    strength:Number,
    intelligence:Number,
    image:String,
    money:{type:Number,default:100},
    inventory:[{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}]
});

const Character = mongoose.model("Character",characterSchema);

module.exports = Character;