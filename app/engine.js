const engine = {
    loading: null, // see engine.loading.js
    chat: null, // see engine.chat.js
    screen: {
        ui: null,
        char: null,
        background: null,
        aclions: null,
    },

    game: null,
    currentScene: null,

    init: function(game) {
        engine.screen.background = $('#main');
        engine.screen.ui = $('#ui');
        engine.screen.chat = $('#chat');
        engine.screen.char = $('#char');
        engine.screen.actions = $('#actions');
        engine.game = game;
    },

    setBackgroundImage: function(backgroundName) {
        const background = engine.game.backgrounds[backgroundName];
        engine.screen.background.css('background-image', `url("${background.image}")`);
    },

    setCharacter: function(charName) {
        const char = engine.game.characters[charName];

        $('img', engine.screen.char).attr('src', char.image);
    },

    startScene: function(sceneName) {
        engine.loading.show();
        const scene = engine.game.scenes[sceneName];
        engine.currentScene = scene;
        
        engine.screen.actions.html('');
        engine.screen.chat.html('');

        engine.setBackgroundImage(scene.background);
        engine.setCharacter(scene.character);
        engine.chat.startChat(scene.chat);
        engine.loading.hide();
    },

    nextScene: function() {
        engine.startScene(engine.currentScene.nextScene);
    }
}