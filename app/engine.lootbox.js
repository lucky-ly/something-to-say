engine.lootbox = {
    clear: function () {
        $('#lootbox-chosen').first().html('');
    },

    getQualityName: function (quality) {
        return engine.game.lootbox.qualities[quality].name;
    },

    getColor: function (quality) {
        return engine.game.lootbox.qualities[quality].textColor;
    },

    getReactionTimeout: function (quality) {
        return engine.game.lootbox.qualities[quality].thinkingTime;
    },

    showAnimation: async function (lootboxes, chosenId) {
        const self = engine.lootbox;

        const rand = function (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        const $currChosen = $('#lootbox-chosen').first();

        const turn = function (turnsCount, resolve) {
            let chosen = rand(0, lootboxes.length - 1);

            if (turnsCount <= 10) {
                setTimeout(() => turn(++turnsCount, resolve), turnsCount * 50);
            } else {
                chosen = chosenId;
                resolve();
            }

            let currBox = lootboxes[chosen];
            const qualityName = self.getQualityName(currBox.quality);
            $currChosen.html(qualityName).css('color', self.getColor(currBox.quality));
        };

        let promise = new Promise((resolve, reject) => {
            turn(1, resolve);
        });

        return promise;
    },
};
