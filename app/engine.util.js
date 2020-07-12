engine.util = {
    delayedExecution: function (method, delay) {
        return function () {
            setTimeout(method, delay);
        }
    }
};