var express = require('express');
var router = express.Router();
var _ = require('lodash');
var db = require("../../configuration/db");

router.post('/admin/job/post', function (req, res) {
    processFunction();

    async function processFunction() {
        var hardcodedCompany = [
            {
                companyID: 1,
                companyName: 'Company A'
            },
            {
                companyID: 2,
                companyName: 'My Company'
            },
            {
                companyID: 3,
                companyName: 'FZ Company '
            },
            {
                companyID: 4,
                companyName: '123 Corp'
            },
        ];

        var hardCodedMyID = 1;

        var getCompany = _.find(hardcodedCompany, { companyID: parseInt(req.body.organization) });

        var jobDetails = {
            id: Date.now(),
            ...getCompany,
            jobTitle: req.body.jobTitle,
            location: req.body.location,
            jobDesc: req.body.jobDesc,
            datePosted: formatDate(new Date()),
            dateClosed: formatDate(req.body.dateClosed),
            jobStatus: 1,
            postedBy: hardCodedMyID
        }

        await db.storeJobs(jobDetails);
        res.send('Success');
    }
});

router.get('/jobs/view/:view', function (req, res) {
    processFunction();

    async function processFunction() {

        var myID = 1;
        var jobs = await db.jobs();
        // _.matchesProperty(postedBy, myID)
        // var getCompany = _.find(jobs, _.matchesProperty('postedBy', myID));
        if (req.params.view === 'all') {
            var getCompany = findByMatchingProperties(jobs, { postedBy: myID });
            res.send(getCompany);
        }
        else {
            var getCompany = findByMatchingProperties(jobs, { id: parseInt(req.params.view) });
            res.send(getCompany[0]);
        }
    }
});

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [day, month, year].join('/');
}

function findByMatchingProperties(set, properties) {
    return set.filter(function (entry) {
        return Object.keys(properties).every(function (key) {
            return entry[key] === properties[key];
        });
    });
}


module.exports = router;