var express = require("express"),
    router  = express.Router();
    
    
//Index route
router.get("/", function(req,res) {
    res.render("landing");
});

router.get("/programs", function(req,res) {
    res.render("programs");
});

router.get("/courses", function (req, res) {
    res.render("courses");
});

router.get("/impressum", function(req, res) {
    res.render("impressum");
});


//Exporting Module
module.exports = router;