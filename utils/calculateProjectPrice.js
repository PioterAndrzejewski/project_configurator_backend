
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


module.exports = calculateProjectPrice;
