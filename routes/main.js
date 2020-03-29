var express = require('express');
var router = express.Router();

router.post('/login', function(req, res){
   res.redirect('/customer');
});

//export this router to use in our index.js
module.exports = router;