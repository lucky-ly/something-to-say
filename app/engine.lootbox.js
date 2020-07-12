engine.lootbox = {
    getRandomNumber: function () {
        return 4;
    },

    clear: function () {
        $('#lootbox-chosen').first().html('');
    },

    getColor: function (quality) {
        switch (quality) {
            case 'Epic':
                return '#cc8b56';
            case 'Nice':
                return '#6db674';
            case 'Creepy':
                return '#ad1e2a';
            case 'Bland':
                return '#fefefe';
            case 'Awkward':
                return '#ff0';
            default:
                console.log('unknown quality!', quality);
                return '#f00';
        }
    },

    getReactionTimeout: function (quality) {
        console.log('quality is:', quality);
        switch (quality) {
            case 'Epic':
                return 2000;
            case 'Nice':
                return 1800;
            case 'Creepy':
                return 1000;
            case 'Bland':
                return 1300;
            case 'Awkward':
                return 1500;
            default:
                console.log('unknown quality!', quality);
                return 1500;
        }
    },

    showAnimation: async function (lootboxes, chosenId) {
        const self = engine.lootbox;

        const rand = function (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

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
            $currChosen.html(currBox.quality).css('color', self.getColor(currBox.quality));
        }

        let promise = new Promise((resolve, reject) => {
            turn(1, resolve);
        });

        return promise;
    },
}
