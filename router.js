var express = require('express')
var router = express.Router()

router.get('/all', function(req, res){
    res.send('hello mrj')
})

exports = router