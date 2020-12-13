// const express = require('express')
// const config = require('config')
// const mongoose = require('mongoose')


// const app = express()

// const PORT = config.get('port') || 5000

// app.use(express.json({ extended: true }))

// // app.use('/api/auth', require('./routes/auth.routes'))
// // app.use('/api/link', require('./routes/link.routes'))
// // app.use('/t', require('./routes/redirect.routes'))

// app.use('/', require('./routes/auth.products'))


// // if (process.env.NODE_ENV === 'production') {
// //   app.use('/', express.static(path.join(__dirname, 'client', 'build')))

// //   app.get('*', (req, res) => {
// //     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
// //   })
// // }

// async function start(){
//     try{
//         await mongoose.connect(config.get("mongoUrl"),{
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true,
//         })
       
//         app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
//         app.use('/', require('./routes/auth.products'))

//     }
//     catch (e){
//         console.log('Server Error', e.message)
//         process.exit(1)
//     }

// }

// // router.get('/', async (req, res) => {
// //     try {
// //       const products = await Product.find({})
// //       res.json(products)
// //     } catch (e) {
// //       res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
// //     }
// //   })

// start()


const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require('config')

// const mongoose = require("mongoose");
// mongoose
//   .connect(config.mongoURI, { useNewUrlParser: true })
//   .then(() => console.log("DB connected"))
//   .catch(err => console.error(err));

const mongoose = require("mongoose");
const connect = mongoose.connect(config.get("mongoUrl"), { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//app.use('/api/users', require('./routes/users'));
app.use('/api/product', require('./routes/product'));


//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
//app.use('/uploads', express.static('uploads'));

// // Serve static assets if in production
// if (process.env.NODE_ENV === "production") {

//   // Set static folder
//   app.use(express.static("client/build"));

//   // index.html for all page routes
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
//   });
// }

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});

