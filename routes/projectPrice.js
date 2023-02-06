const express = require('express');
const router = express.Router();

const {PROJECT_TYPES, PROJECT_ADDONS, PROJECT_PHASES, PERCENTAGE_INDICATORS} = require("../data/projects-data");
const Verification = require('../utils/verification')
const calculateProjectPrice = require('../utils/calculateProjectPrice')


router.post('/', async (req, res) => {
    const {usedType, usedScope, usedAddons, usedBudget} = req.body;

    const verification = new Verification();
    verification.verifyUsedType(usedType, PROJECT_TYPES)
    verification.verifyUsedScope(usedScope, PROJECT_PHASES)
    verification.verifyUsedAddons(usedAddons, PROJECT_ADDONS)
    verification.verifyUsedBudget(usedBudget)
    let verificationOk = true;
    Object.values(verification).map(value => {
        if (value === false) {
            verificationOk = false
        }
    })
    if (!verificationOk) {
      const response =  JSON.stringify({
          success: false,
          message: verification.message
      });
      res.end(response);
        return;
      }

    const projectPrice = calculateProjectPrice(usedType, usedScope, usedAddons, parseInt(usedBudget), PROJECT_TYPES, PROJECT_ADDONS, PROJECT_PHASES, PERCENTAGE_INDICATORS)

    const dummyPrice = 8000;
    const response = JSON.stringify({
        success: true,
        price: projectPrice,
    })

    res.end(response)
});

module.exports = router;