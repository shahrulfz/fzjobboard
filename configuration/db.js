const fs = require('fs');

module.exports = {
    jobs: function () {
        var promise = new Promise(function (resolve, reject) {
            fs.readFile('./configuration/jobs.json', (err, data) => {
                if (err) console.log(err);
                let jobs = JSON.parse(data);
                resolve(jobs);
            });
        });
        return promise;
    },
    storeJobs: function (job) {
        var promise = new Promise(function (resolve, reject) {
            fs.readFile('./configuration/jobs.json', (err, data) => {
                if (err) console.log(err);
                let jobs = JSON.parse(data);
                jobs.push(job)
                fs.writeFile('./configuration/jobs.json', JSON.stringify(jobs), (err) => {
                    if (err) throw err;
                    console.log('The file has been saved!');
                    
                    resolve("scucess");
                });
            });
        });
        return promise;
    },
}