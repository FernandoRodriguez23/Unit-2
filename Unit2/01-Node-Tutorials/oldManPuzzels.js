const http = require('http');

http
    .createServer()
    .on('request', (req, res) => {
        if(req.url === '/'){
            res.end(
                `
                <h1 style="text-align: center">Welcome to the Vagary</h1>

                <h3 style="text-align: center">Your memories might be a bit hazy, however, this is to protect my identity</h3>

                <h3 style="text-align: center">Do you want to play a game with me?</h3>

                <h3 style="text-align: center"><em>"Do I have too? What is Vagary?"</em></h3>

                <h3 style="text-align: center">You have no choice, the Vagary has no door or windows.</h3>

                <h3 style="text-align: center">If you desire to play then your answer is here</h3>

                <h3 style="text-align: center">Each answer will build off the next, /answer1/answer2 , etc.</h3>

                <h3 style="text-align: center">Help is provided at /hint</h3>

                `
                // Vagary - wandering journey
            )
        } else if (req.url === '/hint') {
            res.end(
                `

                <h1 style="text-align: center">Our Game has just started, however if you need help, wood cutting is a great hobby</h1>

                <h3 style="text-align: center"><em>"Why can't I remeber anything...Who am I?..."</em></h3>

                `
            )
        } else if (req.url === '/saw'){
            res.end(
                `
                <h1 style="text-align: center">Congratulations on passing your first game!</h1>

                <h3 style="text-align: center">The fun has just start, your next game will be a Riddle</h3>

                <h3 style="text-align: center">Look in my face and I am someone</h3>
                <h3 style="text-align: center">Look in my back I am no one</h3>
                <h3 style="text-align: center">Who am I?</h3>

                `
            )
        } else if (req.url === '/saw/hint') {
            res.end(
                `
                <h1 style="text-align: center">Hints will sometimes reflect upon seeing the light</h1>

                <h3 style="text-align: center"><em>"My hands are covered in dirt...what was I doing?..."</em></h3>
                `
            )
        } else if (req.url === '/saw/yourself') {
            res.end(
                `
                <h1 style="text-align: center">Congratulations on finding Yourself</h1>

                <h3 style="text-align: center">Some of your memories will comeback each time you complete a game. The next game will be a hunt.</h3>
                <h3 style="text-align: center">To your left is a shovel, a bow, and a map with the titled "One Piece"</h3>

                <h3 style="text-align: center">Happy hunting...</h3>
                `
            )
        } else if (req.url === '/saw/yourself/hint') {
            res.end(
                `
                <h1 style="text-align: center">The X always marks the spot</h1>

                <h3 style="text-align: center"><em>"That right, I was looking for what the old man had left me...but why am I playing a game..."</em></h3>
                `
            )
        } else if (req.url === '/saw/yourself/treasure') {
            res.end(
                `
                <h1 style="text-align: center">Congratulation on finding the Treasure</h1>

                <h3 style="text-align: center">Your old man was a cunning, but as the saying goes, "Dead man tell no tales" Your next game will be another riddle</h3>

                <h3 style="text-align: center">Only one color, but not one size</h3>
                <h3 style="text-align: center">Stuck at the bottom, yet I easily fly</h3>
                <h3 style="text-align: center">Present in sun, but not in rain</h3>
                <h3 style="text-align: center">Doing no harm, and feeling no pain</h3>
                <h3 style="text-align: center">What am I?</h3>
                `
            )
        } else if (req.url === '/saw/yourself/treasure/hint') {
            res.end(
                `
                <h1 style="text-align: center">I am something that follows you, I am the alternate you, the one who doesn't show his face </h1>

                <h3 style="text-align: center"><em>"Thats right I opened the box...the man...what was he?"</em></h3>
                `
            )
        } else if (req.url === '/saw/yourself/treasure/shadow') {
            res.end(
                `
                <h1 style="text-align: center">Congradutalation on finging your shadow</h1>

                <h3 style="text-align: center">The next game will be the hardest</h3>

                <h3 style="text-align: center">You will find yourself in a room with the walls covered in mirrors</h3>

                <h3 style="text-align: center">The following items are in this room, a shovel from the previous game, a barrel with a nuclear waste label, and
                a model airplane from WWII</h3>

                <h3 style="text-align: center">Who is the Enemy?</h3>

                `
            )
        } else if (req.url === '/saw/yourself/treasure/shadow/hint'){
            res.end(
                `
                <h1 style="text-align: center">A wise man once said, "Mans greatest enemy is his fellow man"</h1>

                <h3 style="text-align: center"><em>"Who was the Shadowy Figure...? Could my eyes be playing games on me...? I should be forming the secret society right now..."</em></h3>
                `
            )
        }
         else if (req.url === '/saw/yourself/treasure/shadow/man') {
            res.end(
                `
                <h1 style="text-align: center">Congratulation my future servent on making it this far</h1>

                <h3 style="text-align: center">This is your last game, it was truly a pleasure meeting you. The final game is Guess Who?</h3>

                <h3 style="text-align: center">Everything will be clear, you will wake to reality. The last step to enter the secret society, and finding the truth.</h3>
                `
            )
        } else if (req.url === '/saw/yourself/treasure/shadow/man/hint') {
            res.end(
                `
                <h1 style="text-align: center">Who are you? Are you really you? What happened to the Shawdowy Figure...?</h1>

                <h3 style="text-align: center"><em>"Who am I? Should I have open the treasure? Who is he?"</em></h3>
                `
            )
        }
        else if (req.url === '/saw/yourself/treasure/shadow/man/shadowyFigure') {
            res.end(
                `
                <h1 style="text-align: center">That's right! You thought the Old Man was up to something but it was I, The Showdowy Figure</h1>

                <h3 style="text-align: center">After digging up the Old Man's tresure, you undid the seal, releasing me. Yes you, you are the player of this game, 
                nothing more than you trapped in an alternate reality.</h3>

                <h3 style="text-align: center"><em>"What...What happen to me? Im losing control over my body..."</em></h3>

                <h3 style="text-align: center">You will make for a fine vessel, now my wandering sould, once sealed away by the old man, can wander once more.
                 Thank you for playing this game. I hope your stay at the Vagary was enjoyable...</h3>
                `
            )
        }
        
        
        else {
            res.end(
                `
                <h1 style="text-align: center"><em>"It's dark...cold...but I feel like im awake."</em></h1>

                `
            )
        }
    })
    .listen(3000, () => {
        console.log(`Welcome`);
    })