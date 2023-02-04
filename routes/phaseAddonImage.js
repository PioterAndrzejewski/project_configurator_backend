const express = require('express');
const router = express.Router();
const {join} = require("path");

router.get('/:fileName', async (req, res) => {
    const requestedFileName = req.params.fileName;
    const requestedImgFilePath = `./phasesandaddons/${requestedFileName}`;

    res.sendFile(requestedImgFilePath, {
        root: join(__dirname, '../icons')
    })

});


module.exports = router;
