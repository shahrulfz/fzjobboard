var express = require('express');
var router = express.Router();

router.post('/admin/login', function(req, res){
   res.redirect('/admindashboard');
});

router.get('/admindashboard', function(req, res){
   res.sendFile('/pages/admin/index.html', {root: './'});
});

module.exports = router;