var express = require('express')
var router = express.Router()

router.get('/all', function(req, res){
    res.send('hello mrj')
})

// module.exports = router
exports.router = router