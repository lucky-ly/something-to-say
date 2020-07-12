engine.chat = {
    currentChat: null,
    currentMessageIndex: 0,
    currentLootboxIndex: 0,

    startChat: function(chat) {
        const self = engine.chat;
        self.currentChat = chat;
        self.currentMessageIndex = 0;
        self.showMessage();
    },

    _renderMessage: function($message, callback) {
        const self = engine.chat;
        const $chat = $('#chat', engine.screen.ui);
        const $shownMessages = $('.message', $chat);

        if ($shownMessages.length >=3) {
            const $firstMessage = $shownMessages.first();
            $firstMessage.fadeOut(function(){
                $firstMessage.remove();
            });
        }

        $chat.append($message);
        $message.fadeIn(callback);
    },

    showMessage: function() {
        const self = engine.chat;
        const message = self.currentChat.messages[self.currentMessageIndex];

        engine.lootbox.clear();

        if (!message) {
            debugger;
            const $nextSceneBtn = $('<div>').addClass('action-btn').css('display','none').html('Next');
            $nextSceneBtn.click(engine.nextScene);
            engine.screen.actions.append($nextSceneBtn);
            $nextSceneBtn.fadeIn();
            return;
        }

        const $message = self._createMessage(message.text).addClass('message-in');

        $replyButton = self._createReplyButton();
        $message.find('.message-text').addClass('message-text-active');
        $message.append($replyButton);

        self._renderMessage($message);
    },

    showReply: async function(e) {
        const self = engine.chat;
        const message = self.currentChat.messages[self.currentMessageIndex];
        self.currentLootboxIndex = engine.lootbox.getRandomNumber();

        await engine.lootbox.showAnimation(message.lootboxes, self.currentLootboxIndex);

        const $message = self._createMessage(message.lootboxes[self.currentLootboxIndex].reply).addClass('message-out');
        $(e.target).fadeOut(function(){
            $(e.target).parent().find('.message-text-active').removeClass('message-text-active');
            $(e.target).remove()
        });

        const delay = engine.lootbox.getReactionTimeout(message.lootboxes[self.currentLootboxIndex].quality);
        self._renderMessage($message, engine.util.delayedExecution(self.showReaction, delay));
    },

    showReaction: function() {
        const self = engine.chat;
        const message = self.currentChat.messages[self.currentMessageIndex];

        const $message = self._createMessage(message.lootboxes[self.currentLootboxIndex].reaction).addClass('message-in');
        self._renderMessage($message, engine.util.delayedExecution(self.nextMessage, 1000));
    },

    nextMessage: function() {
        const self = engine.chat;
        self.currentMessageIndex++;
        self.showMessage();
    },

    _createMessage: function(text) {
        return $('<div>')
            .addClass('message')
            .append($('<div>')
                .addClass('message-text')
                .html(text)
            );
    },

    _createReplyButton: function() {
        const $btn = $('<div>').addClass('message-reply-button').click(engine.chat.showReply);
        $btn.html('🔑');
        return $btn;
    },
}
