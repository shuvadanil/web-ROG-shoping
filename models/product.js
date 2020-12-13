const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    _id: String,
    name: String,
    proccesor: String,
    memory: String,
    graphics: String,
    img: String,
    img_2: String,
    img_3: String,
    price: Number,
    inBkt: Boolean
})

const Product = model('laptop', schema);

module.exports = { Product }

//module.exports = model('laptop', schema)