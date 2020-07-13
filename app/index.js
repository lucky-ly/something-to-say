const data = {
    characters: {
        firstGirl: {
            name: "First Girl",
            image: "img/char/first_girl.png",
        },
        secondGirl: {
            name: "Second Girl",
            image: "img/char/second-girl.png",
        },
        bestGirl: {
            name: "Best Girl",
            image: "img/char/best-girl.png",
        },
    },
    backgrounds: {
        bar: {
            image: "img/bg/bar.png"
        },
    },
    lootbox: {
        qualities: {
            epic: {
                name: 'Epic',
                thinkingTime: 2000,
                textColor: '#cc8b56',
            },
            nice: {
                name: 'Nice',
                thinkingTime: 1800,
                textColor: '#6db674',
            },
            creepy: {
                name: 'Creepy',
                thinkingTime: 1000,
                textColor: '#ad1e2a',
            },
            bland: {
                name: 'Bland',
                thinkingTime: 1300,
                textColor: '#fefefe',
            },
            awkward: {
                name: 'Awkward',
                thinkingTime: 1500,
                textColor: '#ff0',
            },
        },
    },
    scenes: {
        start: {
            nextScene: "secondGirl",
            character: "firstGirl",
            background: "bar",
            chat: {
                messages: [
                    {
                        text: "Hey Jack, nice to meet you.<br>Are you visiting these kind of places often?",
                        lootboxes: [
                            {
                                reply: "I'm not just visiting, I'm friends with the owner of the place so drinks are on her.<br> I should introduce you sometime later, you'll like her!",
                                reaction: "😏<br>Really? That sounds amazing!! Now I can safely order the best liquor this place has and enjoy your company way more!",
                                quality: "epic",
                                chance: 0.02
                            },
                            {
                                reply: "Well, sometimes. I have made friends in several bars across the city, I like to travel and meet new people",
                                reaction: "🙂<br>That's pretty cool. I hope you're traveling to different cities, not only bars",
                                quality: "nice",
                                chance: 0.04
                            },
                            {
                                reply: "I do visit occasionally. It's just a place like any other",
                                reaction: "🤨<br>I've only visited two bars in my entire life and even those two were pretty different",
                                quality: "bland",
                                chance: 0.75
                            },
                            {
                                reply: "I'm going to such places every time I get bored with my hunt for pussy!",
                                reaction: "😧<br>This is so disgusting!<br>Why would you even say such a thing!",
                                quality: "creepy",
                                chance: 0.05
                            },
                            {
                                reply: "No, me? I was just swinging by, five more minutes and I'm outta here!",
                                reaction: "🤨<br>What, you don't like my company? I don't visit such places often, but I've met some good people here",
                                quality: "awkward",
                                chance: 0.14
                            }
                        ],
                    },
                    {
                        text: "I guess a place isn't defined by people.<br>What hobbies do you have?",
                        lootboxes: [
                            {
                                reply: "I draw portraits of my friends. I've studied in an art school when I was young and I stuck to it since then",
                                reaction: "🥰<br>Wow! Could you draw me as well? That's very cool!",
                                quality: "epic",
                                chance: 0.02
                            },
                            {
                                reply: "I play board games with my friends. I especially love playing D&D. I know it's not the most mainstream thing, but I love it.",
                                reaction: "🙂<br>That's pretty good, you must have good friends to play it with, so it's a good sign you do",
                                quality: "nice",
                                chance: 0.04
                            },
                            {
                                reply: "I collect panties of girls I've had sex with.",
                                reaction: "😧<br>Eww! How is that a hobby? That's awful!",
                                quality: "creepy",
                                chance: 0.05
                            },
                            {
                                reply: "My hobbies are quite boring. I photograph mailboxes, giving special attention to unusual ones.<br>Will you follow me on instagram?",
                                reaction: "🥱<br>No, I don't feel like it. My feed is a work of beauty and I don't want it to be filled with mailboxes!",
                                quality: "awkward",
                                chance: 0.14
                            },
                            {
                                reply: "I have a pretty default hobby. I'm playing video games and tabletop games and print their artwork to use as a replacement for my wallpaper at home",
                                reaction: "🤨<br>That's weird, actually. Do you have a lot of places left on your wall?<br>You know what, don't answer that. I don't really want to know",
                                quality: "bland",
                                chance: 0.75
                            },
                        ],
                    },
                    {
                        text: "Is there something that you’ve dreamed of doing for a long time? Why haven’t you done it?",
                        lootboxes: [
                            {
                                reply: "I want to have my own gallery, even if it's just for a week. I feel like my art deserves to be seen.",
                                reaction: "🤩<br>That's inspiring! I might help you with your dream, I have a friend who works in an art gallery and she could talk to her boss about that!<br>Let's talk about that somewhere else.",
                                quality: "epic",
                                chance: 0.02
                            },
                            {
                                reply: "I want to move to another country and work as a teacher. I never felt quiet at home here, but leaving my friends seems scary",
                                reaction: "🙂<br>I think there's a chance you'll meet new people and connect with them. But I don't feel like this is for me, I'm doing great here.<br>Goodbye, Jack",
                                quality: "nice",
                                chance: 0.04
                            },
                            {
                                reply: "I can't say I do have <i>a dream</i>. I have things that work out for me, but planning ahead was never my strong suit.",
                                reaction: "🤨<br>That's very strange. Everyone has dreams. I feel like you were not loved enough by your parents to have <i>bold</i> dreams, but it's not my job to fix that.<br>Goodbye, Jack.",
                                quality: "bland",
                                chance: 0.75
                            },
                            {
                                reply: "I feel like my life is a cringe comedy, so I want to write one for the next generation as a cautinary tale",
                                reaction: "😕<br>I feel like all you do is complain, you should make something out of your life.<br>Goodbye",
                                quality: "awkward",
                                chance: 0.14
                            },
                            {
                                reply: "I'm planning to try psychodelics. I was afraid for a long time but I feel like this will open my mind to lots of opportunities that I'm not seeing",
                                reaction: "😬<br>Can't you enjoy life without taking drugs? You're pathetic!<br>Farewell Jack. I hope I won't see your face again!",
                                quality: "creepy",
                                chance: 0.05
                            },
                        ],
                    }
                ],
            },
        },
        secondGirl: {
            nextScene: "bestGirl",
            character: "secondGirl",
            background: "bar",
            chat: {
                messages: [
                    {
                        text: "Hello. If I heard you right, your name is Jack.<br>I want to start with a personal question, those tend to show character more than anything else.<br>Are you close with your family?",
                        lootboxes: [
                            {
                                reply: "I can proudy say that my parents are the best! They support my hobbies and work projects, we spend time together and I hang out with their friends' children of my age, thanks to that I have a huge number of close friends.",
                                reaction: "☺<br>Wow, they sound like a pretty cool people. And having lots of friends is great too.",
                                quality: "epic",
                                chance: 0.02
                            },
                            {
                                reply: "I have a full family which I'm happy about. We play tabletop games with my dad from time to time, mom and I are working on some science projects. The fact that she's a pharmacist helps a lot.",
                                reaction: "🙂<br>This is so wholesome! I often feel like we're not spending enough time with my dad. But mom is always there for me despite the fact that she had me early in her life, and what's best - she's willing to learn to be a better parent even now!",
                                quality: "nice",
                                chance: 0.04
                            },
                            {
                                reply: "I ran off from my parents after they found my stash of girls' panties in my room. I don't have to explain anythyng to them.",
                                reaction: "😧<br>That's freaky! I wouldn't support my son if he had such a collection, so I'm fully on their side here.",
                                quality: "creepy",
                                chance: 0.05
                            },
                            {
                                reply: "I try not to communicate with my parents when I can. They judge my way of life and I don't want to change it just to please them.",
                                reaction: "🤨<br>That sounds weird. It has to be quite a life to displease <i>both</i> parents.",
                                quality: "awkward",
                                chance: 0.14
                            },
                            {
                                reply: "I have a pretty normal family. My dad is working in a dean's office in a university, making a schedule for teachers and students, mom is a pharmacist.<br>I wouldn't say we're too close. Dad is busy a lot of the time, mom is judging me for not studying hard enough. I'm going to rent apartment the first chance I'll get.",
                                reaction: "🤨<br>Have you tried talking to them, connecting to them? It usually helps",
                                quality: "bland",
                                chance: 0.75
                            }
                        ],
                    },
                    {
                        text: "A person is more than where he came from.<br>What do you value most in a friendship?",
                        lootboxes: [
                            {
                                reply: "I value honesty the most. Friends are the only people who care about me apart from my parents and me, so if I'm doing something wrong they are the ones to point it out and help me through it.",
                                reaction: "😃<br>That's impressive and really shows your self-awareness. I hope it helps you with ",
                                quality: "epic",
                                chance: 0.02
                            },
                            {
                                reply: "I feel like male friends are great to hang out with while female friends are a great prospect for romantic relationships, since everyone knows there's no such thing as friendship between sexes.",
                                reaction: "🤔<br>Have you ever truly <i>listened</i> to any of your female friends or were you just keeping the conversation and hoping to get in the bed with them? This make you seem like a terrible person",
                                quality: "creepy",
                                chance: 0.05
                            },
                            {
                                reply: "It's honestly hard to say. I tend to drive people away, so I guess I appreciate dependency the most.",
                                reaction: "🤨<br>If you characterize people as «ones that you drive away», there's no wonder you don't value actual human qualities that people display.",
                                quality: "awkward",
                                chance: 0.14
                            },
                            {
                                reply: "Just being good friends, I guess. I was never good with words, so I don't know what to say here.",
                                reaction: "😐<br>Could have been worse",
                                quality: "bland",
                                chance: 0.75
                            },
                            {
                                reply: "Friends are a great support when I'm in a tough spot — they help me when I need it and I help them when they need it. Hangin out and playing tabletop games is just an cherry on top of that.",
                                reaction: "🙂<br>That sounds great. Thankfully, I don't often get into tough situations, so my friends and I are hanging out most of the time, discussing philosophy, life and hobbies.",
                                quality: "nice",
                                chance: 0.04
                            },
                        ],
                    },
                    {
                        text: "And where do you usually go on the Internet? Any favorite communities, youtube channels?",
                        lootboxes: [
                            {
                                reply: "I ofen go to a Discord channel called «The Hemmster Wheel», it's very wholesome and nice. It used to be called Sidcord, but now I mostly go to the #creative channel there to share my art and see works of others. It's been a part of my routine for years now.",
                                reaction: "🤭<br>Never head of it, but it sounds pretty nice. You should tell me more about it sometime.<br>Anyways, I gotta go. Will chat later?",
                                quality: "epic",
                                chance: 0.02
                            },
                            {
                                reply: "I tend to watch lots of educational videos about movies, editing and the creative process behind them. I feel like those skills translate to other creative endeavors.",
                                reaction: "🙂<br>That's curious, but not my cup of tea.<br>It was nice meeting you, Jack, but I feel like my life is better off without you anyways. I'm sorry. Bye.",
                                quality: "nice",
                                chance: 0.04
                            },
                            {
                                reply: "I just scroll my youtube feed, watching videos here and there. Was never a fan of Facebook or Instagram, so I don't have a presence there.",
                                reaction: "😒<br>Alright. I feel like this is where we should part.<br>Goodbye, Jack.",
                                quality: "bland",
                                chance: 0.75
                            },
                            {
                                reply: "I usually scroll through subreddits with lewd content between watching and discussing my favorite ecci anime.",
                                reaction: "😕<br>I'm disappointed with you, Jack. Anime is about so many things and all you care about is lewdness.<br>Goodbye, Jack.",
                                quality: "awkward",
                                chance: 0.14
                            },
                            {
                                reply: "I used to love posting bigoted memes in a subreddit «I'm going to hell for this», but it was closed some time ago. Now I have lots of memes that expose the humanity for what it is and no good place to post it.",
                                reaction: "😬<br>You <i>loved</i> it?! That's appalling!<br>Go find a place to post your horrible memes and live your miserable life!<br>Get out of here!",
                                quality: "creepy",
                                chance: 0.05
                            },
                        ],
                    }
                ],
            },
        },
        bestGirl: {
            character: "bestGirl",
            background: "bar",
            chat: {
                messages: [
                    {
                        text: "Hi there, Jack. The bartender seems to know you. That is either a sign of you being sociable or a drunk. Thankfully you don't look like the latter.<br>What brings you here today?",
                        lootboxes: [
                            {
                                reply: "Curiocity. I wanted to see what new people came to my favorite bar. I hang out here once a week and have heard quite a few stories!",
                                reaction: "🙂<br>That's wonderful. I wonder if my story will be as fascinating to you.",
                                quality: "nice",
                                chance: 0.04
                            },
                            {
                                reply: "I'm just here to meet women. I feel like this place is a foundation for my romantic life.",
                                reaction: "☺<br>You're funny! I like that. Personally I would choose another avenue to meet people, but we're still here, so let's enjoy it",
                                quality: "creepy",
                                chance: 0.05
                            },
                            {
                                reply: "My apartment is very close, so I've confused the door and entered a bar. That's why people know me here.",
                                reaction: "☺<br>I see you're a joker! Is your apartment building as flashy as the bar entrance?",
                                quality: "awkward",
                                chance: 0.14
                            },
                            {
                                reply: "Just got bored with my life. Felt like drinking wouldn't make it worse.",
                                reaction: "🙃<br>Come on, Jack. Cheer up! You're in a good company now and it's definitely better than sitting alone at home!",
                                quality: "bland",
                                chance: 0.75
                            },
                            {
                                reply: "I'm here to have a great evening. Meet new people, check up on good acquaintances and enjoy the drinks.",
                                reaction: "🙂<br>That's pretty cool. I feel like you know quite a lot of people around here and you do seem like you enjoy youself.",
                                quality: "epic",
                                chance: 0.02
                            },

                        ],
                    },
                    {
                        text: "So what kind of person you were before? What's the most treasured memory you have?",
                        lootboxes: [
                            {
                                reply: "Selling my first art peace! It was such a great feeling to get appreciation for my craft and to feel that I'm needed",
                                reaction: "😊<br>That's very nice! Usually people have difficulties with selling their art and you are so enthusiastic about it all.",
                                quality: "epic",
                                chance: 0.02
                            },
                            {
                                reply: "I remember my parents' faces when I graduated. They were so happy for me. The work after that was satisfying, but I'm yet to experience somethign as profound.",
                                reaction: "🙂<br>That's great! I'm sure you'll find lots of ways to have even more memorable moments in your life and career",
                                quality: "nice",
                                chance: 0.04
                            },
                            {
                                reply: "Sneaking up on my classmate. It was a hunt like no other, I followed her after school and asked her out. She said yes. Sadly, we fell apart after that, but the start was rock solid!",
                                reaction: "🤣<br>If that is the story of your first love, no wonder it went downhill from there on! A girl didn't even berate you for stalking her. Hopefully, you found better ways of making friends after that!",
                                quality: "creepy",
                                chance: 0.05
                            },
                            {
                                reply: "My favorite memory was when I discovered tabletop role-playing games. Endless possibilities along with socializing.",
                                reaction: "🙂<br>That's cool. I should join your table to play and meet your friends.",
                                quality: "bland",
                                chance: 0.75
                            },
                            {
                                reply: "I once did a really stupid thing and everyone found out. People made fun of me, so when it stopped I was very happy.",
                                reaction: "🤨<br>What would you have to do to earn such a reputation that you had to actively wait for it to stop?<br>🙂 You gotta tell me the story behind this one later.",
                                quality: "awkward",
                                chance: 0.14
                            }
                        ],
                    },
                    {
                        text: "If you could wake up tomorrow having gained any one quality or ability, what would it be?",
                        lootboxes: [
                            {
                                reply: "I'd love to write music to go along with my art. I feel like good music would really multiply the effect of my drawings",
                                reaction: "☺<br>That's curious. I know how music can help games, movies and books, but music with drawings? That's gotta be new!",
                                quality: "epic",
                                chance: 0.02
                            },
                            {
                                reply: "I'd like to learn to read and write in a fast and efficient way. That would save me time learning new skills.",
                                reaction: "🙂<br>Hmm, very ambitious! That's not a skill that can be learned <i>overnight</i>, but after several months that's quite possible!",
                                quality: "nice",
                                chance: 0.04
                            },
                            {
                                reply: "I'd like to learn invisibility to observe people when they don't know I'm there!",
                                reaction: "🙄<br>You already have movies for that. I know that this would improve your art, but this will get you nowhere on its own, you gotta pay attention to people around you as is.",
                                quality: "creepy",
                                chance: 0.05
                            },
                            {
                                reply: "I want to learn to speak another language. It takes so long to learn, but getting it after a good night sleep is dreamlike!",
                                reaction: "🙂<br>That's one way to put it. A dream where you're taught another language. I don't even know which one I would pick.",
                                quality: "bland",
                                chance: 0.75
                            },
                            {
                                reply: "I would love to learn telepathy that could be taught to others so I could have private chats with others while sitting in a room full of people",
                                reaction: "😂<br>You're so silly! You don't have to learn telepathy for that, you just need to be closer friends and have things that mean the same exact ideas to both of you!",
                                quality: "awkward",
                                chance: 0.14
                            }
                        ],
                    },
                    {
                        text: "You seem like a great guy. I wanna hang out with you more! I hope you like the fact that I'm so straightfoward?",
                        lootboxes: [
                            {
                                reply: "You seem amazing! You don't even worry about my weirdness. Thank you!",
                                reaction: "☺<br>Thanks! I just try to read between the lines",
                                quality: "epic",
                                chance: 0.02
                            },
                            {
                                reply: "I can't say that I'm not slightly alarmed. It feels like you're up to something since no one was <i>that</i> nice to me. But I like being around you.",
                                reaction: "🤭<br>That's sweet of you to say!",
                                quality: "epic",
                                chance: 0.02
                            },
                            {
                                reply: "I'm glad we met. I feel like I'll be able to grow with you simply because of your honesty and acceptance.",
                                reaction: "☺<br>You can count on me!<br>Let's go someplace else? 😉",
                                quality: "epic",
                                chance: 0.02
                            },
                            {
                                reply: "I do like it. I hope more people were like you.",
                                reaction: "☺<br>For starters I could gradually teach you to be a bit more like me. But there's no rush!",
                                quality: "epic",
                                chance: 0.02
                            },
                            {
                                reply: "You're definitely one of a kind! I feel seen when I'm with you.",
                                reaction: "☺<br>Thank you! You're so nice!",
                                quality: "epic",
                                chance: 0.02
                            },
                        ],
                    }
                ],
            },
        },
    },
};

$(function() {
    engine.init(data);
    engine.startScene('start');
});















// for those who cared to inspect our code
let girl = {
    name: "who cares",
    position: "free",
    prelude : function(){girl.prepared = true; console.log('ohm yes, i want it so badly!')},
    fuck: function() {
        if (girl.prepared) {
            console.log('oh, yes, yes, yes, aaaah, god, i\'m cumming!');
        } else {
            if (girl.position == "fixed") {
                console.log('ok then...');
            }
        }
    }
};

girl.position = "fixed";
girl.fuck();

