var express = require('express');
var router = express.Router();

router.get('/customer', function(req, res){
   res.sendFile('/pages/customer/index.html', {root: './'});
});

module.exports = router;