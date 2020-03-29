var express = require('express');
var router = express.Router();
var data = require("../configuration/db");
const fs = require('fs');

router.get('/jobs', function (req, res) {
    getJob()

    async function getJob(){
        var jobs = await data.jobs();
        res.send(jobs);
    }
});

module.exports = router;