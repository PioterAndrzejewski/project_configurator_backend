class Verification {
    constructor () {
        this.usedTypeOk = false;
        this.usedScopeOk = false;
        this.usedAddonsOk = false;
        this.usedBudgetOk = false;
        this.message = "";
    }

    verifyUsedType (usedType, projectTypes) {
        const verification = projectTypes.findIndex(type => type.id === parseInt(usedType));
        if (verification === -1) {
            this.usedTypeOK = false;
            this.message = "Please specify correct Project Type."
            return;
        }
        this.usedTypeOk = true;
    }

    verifyUsedScope (usedScope, projectScopes) {
        let verification = usedScope.length === projectScopes.length;
        if (verification === false) {
            this.usedScopeOk = false;
            this.message = "Please specify correct Project Scope"
            return;
        }

        if ((usedScope[3] === true) &&
            (usedScope[0] === true
                || usedScope[1] === true
                || usedScope[2] === true)) {
            this.usedScopeOk = false;
            this.message = "A comprehensive range and individual ranges cannot be selected at the same time."
            return;
        }

        if (usedScope.findIndex(scope => scope === true) === -1) {
            this.usedScopeOk = false;
            this.message = "Please specify project scope"
        }



        this.usedScopeOk = true;
    }

    verifyUsedAddons (usedAddons, projectAddons) {
        let lengthVerification = usedAddons.length === projectAddons.length;
        if (lengthVerification === false) {
            console.log('addons pierwszy nie przeszedl')
            this.usedAddonsOk = false;
            this.message = "Something went wrong with used addons. Please try again"
            return;
        }

        this.usedAddonsOk = true;
    }

    verifyUsedBudget (usedBudget) {
        if (usedBudget === '') {
            this.usedBudgetOk = false;
            this.message = "Please specify estimated construction budget."
        }
        if (usedBudget < 10000) {
            this.usedBudgetOk = false;
            this.message = "Estimated budget is too low."
            return;
        }
        if (usedBudget > 1000000 * 1000) {
            this.usedBudgetOk = false;
            this.message = "Estimated budget is too high."
            return;
        }


        this.usedBudgetOk = true;
    }
}

module.exports = Verification;