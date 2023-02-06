const express = require('express');
const router = express.Router();
const {join} = require("path");
const {PROJECT_TYPES, PROJECT_ADDONS, PROJECT_PHASES} = require("../data/projects-data");

router.post('/', async (req, res) => {
    console.log(req.body)
    const response = JSON.stringify({
    success: true,
    })

    const sendResponse = ()=> {
        res.end(response)
    }

    setTimeout(sendResponse, 3*1000)

});


module.exports = router;

