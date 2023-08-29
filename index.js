// const path = require('path');
// const fs = require('fs');
// const express = require('express');
// const mongoose = require('mongoose');
// const cookieparsers = require('cookie-parser');
// const jwt = require('jsonwebtoken');
// const pathname = path.join(__dirname, 'example');

// //Backend from 

// const url = 'mongodb://0.0.0.0:27017/' //monogodb server url
// mongoose.connect(url, {
//     dbname: 'NodejsBackend',  //This is database name /name is some
// }).then((e) => console.log("Database connection established" ))
//     .catch((e) => console.log(e))


// //Scheame for name and email 

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
// })

// //Model 

// const User = mongoose.model('Newschema', userSchema)

// //Backend to 



// const app = express();

// //Middleware Setup
// app.use(express.static(pathname));
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieparsers())


// //Setting up engine options
// app.set("view engine", "ejs")
// const isAuthenticated = async(req, res,next) => {
//     const {token}=req.cookies;
//     if(token){
//         //Check 
//         const decode = jwt.verify(token,"abcdefghi")
//         console.log(decode)
//         req.user = await User.findById(decode._id);
//         next();
//     }
//     else{
//         res.render('login');
//     }
// }


// //Routes
// app.get('/', isAuthenticated ,(req,res,next) => {
//     console.log(req.user)
//     res.render('logout',{name:req.user.name})
// })

// app.get('/success', (req, res) => {
//     res.render('success')
// })

// app.post('/login', async(req, res) => {

//     const {name,email} = req.body;
//     let user = await User.findOne({email})
//     if(!user){
//         return console.log('Reginster First')
//     }
//     else{
//      user = await User.create({name,email})
//     const token = jwt.sign({_id: user._id},'abcdefghi')
//     console.log(token)
//     res.cookie('token',token,{ 
//         httpOnly:true, expires: new Date(Date.now()+69*900)
//     })
//     res.redirect('/')
// }
// })


// app.get('/logout', (req, res) => {
//     res.cookie('token',null,{
//         httpOnly:true, expires: new Date(Date.now())
//     })
//     res.redirect('/')
// })





// app.listen(3000, () => {
//     console.log('listening on port ' + 3000);
// })






//Deleted desktop:
//require is here 

// const express = require('express');
// const path = require('path');
// const fs = require('fs');
// const mongoose = require('mongoose');
// const cookieParsers = require('cookie-parser');
// const jwt = require('jsonwebtoken');
// const app = express();

// //db is here 

// //connection to mongoose  to mongodb database
// const url = 'mongodb://0.0.0.0:27017/'

// mongoose.connect(url, {
//     dbName: 'mongodb',
// }).then(() => console.log("Connection is established"))
//     .catch((error) => console.log(error))

// // create a Scheama 
// const schema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
// })

// const modelname = mongoose.model('Nodeserver', schema)



// //path is here
// const pathname = path.join(__dirname, 'example')


// //middleware is here
// app.use(express.static(pathname));
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParsers())

// //Setting up engine 
// app.set('view engine', 'ejs')


// //function is here
// const isAuthentication = async(req, res, next) => {
//     const { token } = req.cookies;
//     if (token) {
//         const decode = jwt.verify(token,'abcsecret');
//         req.user =await modelname.findById(decode._id);
//         next()
//     }
//     else {
//         res.redirect('/login')
//     }
// }
// //routes is here
// app.get('/', isAuthentication, (req, res) => {
//     res.render('logout',{name:req.user.name})
// })


// app.get('/logout', (req, res) => {
//     res.cookie('token', null, {
//         expires: new Date(Date.now())
//     });
//     res.redirect('/')
// })

// app.post('/login',async (req, res) => {
//     const {email,password} = req.body;
//     let user = await modelname.findOne({email});
//     if(!user){
//         res.redirect('/register')
//     }
//     const isMatch =await user.password === password;
//     if(!isMatch) return res.render('login',{messege:"Incorrect password"})

//     const token = await jwt.sign({_id:user._id},'abcsecret');

//     res.cookie('token',token, {
//         httpOnly: true,
//         maxAge: 3000000,
//     })
//     res.redirect('/logout');
// })

// app.get('/register', (req, res) =>{
//     res.render('register')
// })

// app.get('/login', (req, res) =>{
//     res.render('login')
// })

// app.post('/register', async (req, res) => {

//     const { name, email,password } = req.body;
//     let user =await modelname.findOne({email});
//     if(user){
//         return res.redirect('/login')
//     }
//     user = await modelname.create({ name, email, password });
//     const token = await jwt.sign({_id:user._id},'abcsecret');

//     res.cookie('token',token, {
//         httpOnly: true,
//         maxAge: 3000000,
//     })
//     res.redirect('/');
// })



// app.listen(3000, () => {
//     console.log('listening on port ' + 3000);
// })




const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const app = express();

app.set('view engine', 'ejs')
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
const mongoose = require('mongoose');

//db.connect
const link = 'mongodb://0.0.0.0:27017/'
mongoose.connect(link, ({
    dbName: "mongoose",
})).then(() => console.log('database successfully connected'))
    .catch((error) => console.log(error))

const Scheama = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const model = mongoose.model('collection', Scheama)

//cheack authentication
const isAuthentication = async(req, res, next) => {
    const { token } = req.cookies;
    if (token) {
        const decode = jwt.verify(token,'abcsecret');
        req.cheack =await model.findById(decode._id);
        next()
    }
    else {
        res.redirect('/login')
    }
}
app.get('/',isAuthentication, (req, res) => {
    
    res.render('logout',{name:req.cheack.name})
})


// <----------------------------Registraition form submission----------------------->
app.get('/register', (req, res) => {
    res.render('register')
})

// app.post('/register', async (req, res) => {
//     const { name, password, email } = req.body;

//     let cheack = await model.findOne({ email});
//     if(cheack){
//         res.redirect('/login');
//     }
//     else{
//     const user = await model.create({ name, email, password })
//     const token = await jwt.sign({ _id: user._id }, 'abcsecret');
//     res.cookie('token', token, {
//         httpOnly: true,
//         expires: new Date(Date.now() + 6000 * 100)
//     })
//     res.redirect('/')
// }})

// chatgpt post 


app.post('/register', async (req, res) => {
    const { name, password, email } = req.body;

    let user = await model.findOne({ email });
    if (user) {
        return res.redirect('/login');
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    user = await model.create({ name, email, password: hashedPassword });
    const token = jwt.sign({ _id: user._id }, 'abcsecret');
    res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + 6000 * 100)
    });
    res.redirect('/');
});


// <------------------------------login form submission----------------------->
app.get('/login', (req, res) => {
    res.render('login')
})

// MY POST /login ->
// app.post('/login',async(req, res) => {
//     const {email,password} = req.body;
//     let user = await model.findOne({ email});
//     let Checkpass = await model.findOne({password})

    
//     // CHEACK ONLY RIGHT OR WRONG
//     /* if(cheack && Checkpass){
//         const token = await jwt.sign({ _id: cheack._id }, 'abcsecret');
//         res.cookie('token', token, {
//             httpOnly: true,
//             expires: new Date(Date.now() + 6000 * 100)
//         })

//         res.redirect('/');
//     } */

//      // SECOND CONDITION BECOUSE SEND MESSEGE  =====
//      if(!user) return res.redirect('/register');

//     const isMatch = user.password === password 

//     if(!isMatch) return res.render('login',{match:"Incorrect Password",email})
//     const token = jwt.sign({ _id: user._id }, 'abcsecret');
//         res.cookie('token', token, {
//             httpOnly: true,
//             expires: new Date(Date.now() + 6000 * 100)
//         })

//         res.redirect('/');    
// })


// CHAT GPT BCRYT CONDITONS
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await model.findOne({ email });

    if (!user) {
        return res.redirect('/register');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.render('login', { match: "Password is not correct", email });
    }

    const token = jwt.sign({ _id: user._id }, 'abcsecret');
    res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + 6000 * 100)
    });
    res.redirect('/');
});


// <------------------------------logout form submission----------------------->
app.get('/logout',(req,res)=>{
    res.render('logout')
})
app.post('/logout',(req,res)=>{
    res.cookie('token',null)
    res.redirect('/login')
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})