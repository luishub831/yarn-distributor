console.log("B2B hooks")
window.bssB2BHooks = window.bssB2BHooks || {
    actions: {},
    filters: {},
};

window.BSS_B2B = window.BSS_B2B || {};

window.BSS_B2B.addAction = (tag, callback) => {
    window.bssB2BHooks.actions[tag] = callback;
}
window.BSS_B2B.addFilter = (tag,  value) => {
    window.bssB2BHooks.filters[tag] = value;
}

function handleDuplicateCheckoutButton() {
    const defaultBtnCheckout = $('.bss-hide-checkout')
    if (defaultBtnCheckout.length > 0) {
        defaultBtnCheckout.css("display", "none")
        $("#bss-checkout").css("display", "block")
    }
    BSS_B2B.isAppliedCheckoutBSS = true;
}
window.BSS_B2B.addAction('handle_duplicate_checkout', handleDuplicateCheckoutButton);