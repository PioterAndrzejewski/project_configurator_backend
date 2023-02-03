const express = require('express');
const router = express.Router();




router.post('/', async (req, res) => {


    const response = JSON.stringify({
        creationSuccess: true,
        projectId: newProjectId,
        projectName: req.body.projectName,
    })
    res.end(response)
});

module.exports = router;