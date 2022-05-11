(function () {
    "use strict";

    // Forbiddance
    document.ondragstart = noSelect;
    document.oncontextmenu = noSelect;
    document.onselectstart = noSelect;

    function noSelect() {
        return false
    }

    /* STATS */

    // Page load time
    window.onload = function () {
        let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        console.log('Page initialized');
        console.log('Page loaded time: ' + loadTime + ' ms');
    };

})()
