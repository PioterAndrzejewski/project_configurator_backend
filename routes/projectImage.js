const express = require('express');
const router = express.Router();
const {join} = require("path");

const handImageURL = (usedType, usedScope) => {
    if (usedType === undefined) {
        return "dummy.png"
    }
    let phase;
    if (usedScope.findIndex(scope => scope===true) === -1) {
        phase = 3;
    } else if (usedScope[2] === true || usedScope[3] === true) {
        phase = 2;
    } else if (usedScope[1] === true) {
        phase = 1
    } else {
        phase = 0
    }

    return `${usedType}_${phase}.png`
}

router.get('/:fileName', async (req, res) => {
    const requestedFileName = req.params.fileName;
    const requestedImgFilePath = `./building/${requestedFileName}`;

    res.sendFile(requestedImgFilePath, {
        root: join(__dirname, '../icons')
    })

});

router.post('/', async (req, res) => {
    const {usedType, usedScope} = req.body;

    const imageURL = handImageURL(usedType, usedScope);

    const response = {
        imageURL,
    }

    res.send(JSON.stringify(response))

});


module.exports = router;
