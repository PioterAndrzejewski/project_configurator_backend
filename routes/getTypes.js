const express = require('express');
const router = express.Router();

const {PROJECT_TYPES, PROJECT_ADDONS, PROJECT_PHASES} = require("../data/projects-data");

router.post('/', async (req, res) => {
    const response = JSON.stringify({
        projectTypes: PROJECT_TYPES,
        projectAddons: PROJECT_ADDONS,
        projectPhases: PROJECT_PHASES,
    })

    res.end(response)
});

module.exports = router;