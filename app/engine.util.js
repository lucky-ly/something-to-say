engine.util = {
    getRandomNumber: function () {
        return 4; // chosen by fair dice roll.
                  // guaranteed to be random.
    },
    delayedExecution: function (method, delay) {
        return function () {
            setTimeout(method, delay);
        };
    },
};
