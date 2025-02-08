//Import All Package's

const express =require('express');
const router =require('./routes/api.js');

const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');

const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');
const cookieParser = require('cookie-parser');
const mongoose =require('mongoose');
const path = require("path");
const {MONGODB_CONNECTION,PORT,MAX_JSON_SIZE,URL_ENCODED,WEB_CACHE,REQUEST_LIMIT_NUMBER,REQUEST_LIMIT_TIME} = require('./app/config/config.js');




//Instance Of Express JS
const app = express();



//Global Application's Middleware
app.use(cors())
app.use(express.json({limit: MAX_JSON_SIZE}))
app.use(express.urlencoded({ extended: URL_ENCODED }))
app.use(hpp())
app.use(helmet())
app.use(cookieParser())






//rateLimiter
const limiter = rateLimit({windowMs: REQUEST_LIMIT_TIME, max: REQUEST_LIMIT_NUMBER})
app.use(limiter)




//Web Caching
app.set('etag', WEB_CACHE);



//MongoDB Connection
mongoose.connect(MONGODB_CONNECTION, {autoIndex:true}).then(()=>{
    console.log("MongoDB Connect SuccessFully")
}).catch(err=>{
    console.log("MongoDB Connect Fail, Something Went Wrong!");
})




//Set Api Route's
app.use('/api', router)

app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Add React Front End Routing
app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
    // FrontEnd Directory Name
})

//Set Application Storage
app.use(express.static('storage'))





//Run The Application
app.listen(PORT, () => {
    console.log(`App is running on port:- ${PORT}`);
})




