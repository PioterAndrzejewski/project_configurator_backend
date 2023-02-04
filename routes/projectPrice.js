const express = require('express');
const router = express.Router();

const {PROJECT_TYPES, PROJECT_ADDONS, PROJECT_PHASES, PERCENTAGE_INDICATORS} = require("../data/projects-data");
const Verification = require('../utils/verification')


const calculateProjectPrice = (usedType, usedScope, usedAddons, usedBudget, projectTypes, projectAddons, projectPhases, percentageIndicators) => {
    const projectTypeIndex = projectTypes.findIndex(type => type.id === parseInt(usedType));
    const complexityCategory = projectTypes[projectTypeIndex].complexityCategory
    const indicatorGroupIndex = percentageIndicators.findIndex(group => {
        if (group.min <= usedBudget && group.max >= usedBudget)
        { return true}
    })
    const baseIndicator = percentageIndicators[indicatorGroupIndex].indicators[complexityCategory];
    const basePrice = usedBudget * baseIndicator / 100;
    let addonIndicator = 1;
    usedAddons.map((value, index) => {
        if (value === true) {
            addonIndicator += projectAddons[index].priceFactor;
        }
    })
    const priceWithAddons = basePrice * addonIndicator;
    let scopeIndicator = 0;
    usedScope.map((value, index) => {
        if (value === true) {
            scopeIndicator += projectPhases[index].priceFactor;
        }
    })
    const totalPrice = priceWithAddons * scopeIndicator;
    const totalPriceRounded = Math.floor(totalPrice / 100)*100
    console.log({basePrice, addonIndicator, scopeIndicator, totalPrice, totalPriceRounded})
    return totalPriceRounded
}

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