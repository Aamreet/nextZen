var express = require('express');
var router = express.Router();
const userModel = require("./users");
const passport = require('passport');
const localStrategy = require("passport-local");

passport.use(new localStrategy(userModel.authenticate()));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/orders', function(req, res, next) {
  res.render('orders');
});
router.get('/checkout', function(req, res, next) {
  res.render('checkout');
});
router.get('/tracking', function(req, res, next) {
  res.render('tracking');
});

router.get('/register', (req, res, next)=>{
  res.render('register');
});

router.get('/login', (req, res, next)=>{
    res.render('login', {error: req.flash('error')});
});

router.get('/logout', function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});



router.post('/register', function(req, res, next) {
    const { username, email, fullname } = req.body;
    const userData = new userModel({ username, email, fullname });
    
    userModel.register(userData, req.body.password)
    .then(function(){
        passport.authenticate("local")(req, res, function(){
          res.redirect("/");
        })
    })
    .catch((error)=>{
         console.log("This is the error -> ", error);
    });
});

router.post('/login', passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true //It means if login credentials are wrong failed message can be shown

}),function(req, res, next) {
});

function isLoggedIn(req, res, next){
     if(req.isAuthenticated()) return next();
     res.redirect("/");
}

module.exports = router;
