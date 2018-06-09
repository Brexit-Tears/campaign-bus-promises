const _Promise = global.Promise;

global.Promise = function () {
    return new _Promise((_, reject) => {
        const twoYears = 1000 * 60 * 60 * 24 * 365 * 2;

        waitUntil(twoYears, () => {
            reject("Do you believe everything you see on busses?");
        });
    });
}

const maxTimeout = 2147483647;

function waitUntil(time, handler) {
    setTimeout(() => {
        if (time - maxTimeout <= 0) {
            handler();
        } else {
            const randomBranch = Math.random() * 100;
            if (randomBranch <= 40) {
                console.log('Cabinet split');
            } else {
                console.log('Re-negotiating');
            }
            waitUntil(time - maxTimeout, handler);
        }
    }, maxTimeout);
}