// ===================================
// Jokes Database
// ===================================
const jokesDatabase = {
    programming: [
        { type: 'single', joke: "Why do programmers prefer dark mode? Because light attracts bugs!" },
        { type: 'twopart', setup: "Why do Java developers wear glasses?", punchline: "Because they don't C#!" },
        { type: 'single', joke: "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'" },
        { type: 'twopart', setup: "How many programmers does it take to change a light bulb?", punchline: "None. It's a hardware problem!" },
        { type: 'single', joke: "There are only 10 types of people in the world: those who understand binary and those who don't." },
        { type: 'twopart', setup: "Why did the programmer quit his job?", punchline: "Because he didn't get arrays!" },
        { type: 'single', joke: "Programming is 10% writing code and 90% understanding why it doesn't work." },
        { type: 'twopart', setup: "What's a programmer's favorite hangout place?", punchline: "Foo Bar!" },
        { type: 'single', joke: "Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25!" },
        { type: 'twopart', setup: "What's a programmer's favorite song?", punchline: "Hello World!" },
        { type: 'single', joke: "I would tell you a UDP joke, but you might not get it." },
        { type: 'twopart', setup: "Why did the developer go broke?", punchline: "Because he used up all his cache!" },
        { type: 'single', joke: "Why don't programmers like nature? It has too many bugs." },
        { type: 'twopart', setup: "What do you call a programmer from Finland?", punchline: "Nerdic!" },
        { type: 'single', joke: "A programmer's wife tells him: 'Go to the store and buy a loaf of bread. If they have eggs, buy a dozen.' He comes back with 12 loaves of bread." },
        { type: 'twopart', setup: "Why did the functions stop calling each other?", punchline: "Because they had constant arguments!" },
        { type: 'single', joke: "There's no place like 127.0.0.1." },
        { type: 'twopart', setup: "Why do programmers hate nature documentaries?", punchline: "Too many bugs and not enough debugging!" },
        { type: 'single', joke: "To understand what recursion is, you must first understand recursion." },
        { type: 'twopart', setup: "What's a pirate's favorite programming language?", punchline: "You'd think it's R, but it's actually the C!" },
        { type: 'single', joke: "Algorithm: A word used by programmers when they don't want to explain what they did." },
        { type: 'twopart', setup: "Why did the database administrator leave his wife?", punchline: "She had one-to-many relationships!" },
        { type: 'single', joke: "I have a joke about Stack Overflow, but it would be a duplicate." },
        { type: 'twopart', setup: "What did the router say to the doctor?", punchline: "It hurts when IP!" },
        { type: 'single', joke: "Why do Python programmers have low self-esteem? They're constantly comparing themselves to others." },
        { type: 'twopart', setup: "How do you comfort a JavaScript bug?", punchline: "You console it!" },
        { type: 'single', joke: "A QA engineer walks into a bar. Orders a beer. Orders 0 beers. Orders 99999 beers. Orders a lizard." },
        { type: 'twopart', setup: "Why was the computer cold?", punchline: "It left its Windows open!" },
        { type: 'single', joke: "Real programmers count from 0." },
        { type: 'twopart', setup: "What do you call a group of 8 hobbits?", punchline: "A hobbyte!" },
        { type: 'single', joke: "I'd tell you a joke about REST APIs, but you wouldn't GET it." },
        { type: 'twopart', setup: "Why do programmers prefer iOS development?", punchline: "Because they can't C#!" },
        { type: 'single', joke: "Code never lies, comments sometimes do." },
        { type: 'twopart', setup: "What's the object-oriented way to become wealthy?", punchline: "Inheritance!" },
        { type: 'single', joke: "Debugging: Being the detective in a crime movie where you are also the murderer." },
        { type: 'twopart', setup: "Why did the programmer get stuck in the shower?", punchline: "The shampoo bottle said: Lather, Rinse, Repeat!" },
        { type: 'single', joke: "It works on my machine!" },
        { type: 'twopart', setup: "What do you call a programmer who doesn't comment their code?", punchline: "A job security specialist!" },
        { type: 'single', joke: "In theory, theory and practice are the same. In practice, they're not." },
        { type: 'twopart', setup: "Why did the programmer die in the shower?", punchline: "They read the shampoo bottle instructions: Lather, Rinse, Repeat!" },
        { type: 'single', joke: "Always code as if the person who ends up maintaining your code is a violent psychopath who knows where you live." },
        { type: 'twopart', setup: "How do you tell HTML from HTML5?", punchline: "Try it out in Internet Explorer. Did it work? No? It's HTML5!" },
        { type: 'single', joke: "ASCII stupid question, get a stupid ANSI." },
        { type: 'twopart', setup: "Why do Java programmers have to wear glasses?", punchline: "Because they don't see sharp!" },
        { type: 'single', joke: "The best thing about a Boolean is even if you are wrong, you are only off by a bit." },
        { type: 'twopart', setup: "Why did the web developer walk out of a restaurant?", punchline: "Because of the table layout!" },
        { type: 'single', joke: "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors." },
        { type: 'twopart', setup: "What's the best way to generate a random string?", punchline: "Put a new developer in front of VI and ask them to quit!" },
        { type: 'single', joke: "Why did the semicolon break up with the colon? It wanted to see other punctuation." },
        { type: 'twopart', setup: "What do computers and air conditioners have in common?", punchline: "They both become useless when you open Windows!" },
        { type: 'single', joke: "Why do programmers prefer dark chocolate? Because they can't C the white chocolate!" },
        { type: 'twopart', setup: "What's a programmer's favorite exercise?", punchline: "Code crunches!" },
        { type: 'single', joke: "I have a programming joke, but it only works on my machine." },
        { type: 'twopart', setup: "Why did the web developer leave the restaurant?", punchline: "Because he didn't like the table layout!" },
        { type: 'single', joke: "Programmer: A machine that turns coffee into code." },
        { type: 'twopart', setup: "What do you call a programmer who doesn't like coffee?", punchline: "Unemployed!" },
        { type: 'single', joke: "My code doesn't work and I don't know why. My code works and I don't know why." },
        { type: 'twopart', setup: "Why did the agile team bring a ladder to work?", punchline: "To reach the next sprint!" },
        { type: 'single', joke: "There are two types of people: those who can extrapolate from incomplete data." },
        { type: 'twopart', setup: "What did the Python say to the JavaScript?", punchline: "Don't be so dynamic!" },
        { type: 'single', joke: "Git commit -m 'Fixed a bug'. Git commit -m 'Fixed the fix'." },
        { type: 'twopart', setup: "Why do programmers hate the sun?", punchline: "Too many rays and it causes light pollution!" },
        { type: 'single', joke: "Documentation: The novel that nobody reads but everybody needs." },
        { type: 'twopart', setup: "What's a developer's least favorite place?", punchline: "The edge... of the internet!" },
        { type: 'single', joke: "I'm not lazy, I'm just in power-saving mode." },
        { type: 'twopart', setup: "Why did the computer go to therapy?", punchline: "It had too many tabs open!" },
        { type: 'single', joke: "Software testing is like driving: Everyone thinks they can do it." },
        { type: 'twopart', setup: "What's a programmer's favorite dance move?", punchline: "The algorithm!" },
        { type: 'single', joke: "Behind every good developer is a substantial amount of coffee." },
        { type: 'twopart', setup: "Why don't programmers like to go outside?", punchline: "The sunlight causes too many reflections!" },
        { type: 'single', joke: "My software never has bugs. It just develops random features." },
        { type: 'twopart', setup: "What do you call a developer who doesn't use Stack Overflow?", punchline: "A liar!" },
        { type: 'single', joke: "I would love to change the world, but they won't give me the source code." },
        { type: 'twopart', setup: "Why was the JavaScript developer sad?", punchline: "Because he didn't Node how to Express himself!" },
        { type: 'single', joke: "Programming is like sex: One mistake and you have to support it for the rest of your life." },
        { type: 'twopart', setup: "What's a programmer's favorite snack?", punchline: "Microchips!" },
        { type: 'single', joke: "The best error message: 'Something went wrong'. Thanks, I'll fix 'something'." },
        { type: 'twopart', setup: "Why do programmers prefer pets?", punchline: "They're easier to debug than people!" },
        { type: 'single', joke: "Code review: Where you realize your code is garbage, but so is everyone else's." },
        { type: 'twopart', setup: "What's a hacker's favorite season?", punchline: "Phishing season!" },
        { type: 'single', joke: "My code is self-documenting. By that I mean it documents itself as terrible." },
        { type: 'twopart', setup: "Why did the developer stay home?", punchline: "They were working remotely... from their couch!" },
        { type: 'single', joke: "Programming: Where the semicolon is mightier than the sword." },
        { type: 'twopart', setup: "What's a programmer's favorite game?", punchline: "Hide and seek... with bugs!" },
        { type: 'single', joke: "I don't always test my code, but when I do, I do it in production." },
        { type: 'twopart', setup: "Why did the mobile app developer break up?", punchline: "They had too many notifications!" },
        { type: 'single', joke: "Legacy code: Code written by someone who is no longer around to explain it." },
        { type: 'twopart', setup: "What do you call a group of developers?", punchline: "A merge conflict!" },
        { type: 'single', joke: "Coding standards: The suggestions that everyone ignores." },
        { type: 'twopart', setup: "Why was the computer cold at the office?", punchline: "Someone left too many Windows open!" },
        { type: 'single', joke: "My code has been running for 30 minutes. I don't know if it's working or just stuck." },
        { type: 'twopart', setup: "What's a coder's favorite type of music?", punchline: "Algorithm and blues!" },
        { type: 'single', joke: "Refactoring: Making code less bad without making it good." },
        { type: 'twopart', setup: "Why do programmers wear headphones?", punchline: "To listen to their code compile!" },
        { type: 'single', joke: "Every programmer's dream: Code that runs on the first try." },
        { type: 'twopart', setup: "What did the IT person say at the bar?", punchline: "Sorry, I don't serve your type!" },
        { type: 'single', joke: "Programmers are tools for converting caffeine into software." },
        { type: 'twopart', setup: "Why did the developer stay single?", punchline: "They couldn't commit!" },
        { type: 'single', joke: "Why do programmers always get Christmas and Halloween confused? Because DEC 25 = OCT 31!" },
        { type: 'twopart', setup: "What's a programmer's favorite breakfast?", punchline: "While loops!" },
        { type: 'single', joke: "The Cloud is just someone else's computer." },
        { type: 'twopart', setup: "Why did the developer use dark mode?", punchline: "Because the light mode hurt his IDE-s!" },
        { type: 'single', joke: "Copy and paste is not a programming skill. It's a lifestyle." },
        { type: 'twopart', setup: "What's a programmer's favorite movie?", punchline: "The Matrix... obviously!" },
        { type: 'single', joke: "In order to understand recursion, you must first understand recursion." },
        { type: 'twopart', setup: "Why did the programmer get kicked out of school?", punchline: "Because he kept breaking the class!" },
        { type: 'single', joke: "There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors." },
        { type: 'twopart', setup: "What's a hacker's favorite season?", punchline: "Phishing season!" },
        { type: 'single', joke: "I'm not lazy. I'm just on my energy saving mode." },
        { type: 'twopart', setup: "Why do programmers prefer iOS?", punchline: "Because on Android, they have to Google everything!" },
        { type: 'single', joke: "Roses are red, violets are blue. Unexpected '{' on line 32." },
        { type: 'twopart', setup: "What do you call a developer who doesn't drink coffee?", punchline: "A Java-Script-less programmer!" },
        { type: 'single', joke: "Debugging is like being a detective in a crime movie where you are also the murderer." },
        { type: 'twopart', setup: "Why did the Python programmer not respond?", punchline: "Because he was stuck in an infinite loop!" },
        { type: 'single', joke: "Real developers don't comment their code. If it was hard to write, it should be hard to understand." },
        { type: 'twopart', setup: "What's a programmer's favorite place to hang out?", punchline: "The Foo Bar!" },
        { type: 'single', joke: "Linux: Because a PC is a terrible thing to waste." },
        { type: 'twopart', setup: "Why did the developer go to therapy?", punchline: "He had too many unresolved issues!" },
        { type: 'single', joke: "I don't always test my code, but when I do, I test it in production." },
        { type: 'twopart', setup: "What do you call a programmer from Finland?", punchline: "Nerdic!" },
        { type: 'single', joke: "Code never lies, comments sometimes do." },
        { type: 'twopart', setup: "Why did the function break up?", punchline: "They had constant arguments!" },
        { type: 'single', joke: "I'm writing a book on reverse psychology. Do NOT read it!" },
        { type: 'twopart', setup: "What's a programmer's favorite game?", punchline: "Hide and seek with bugs!" },
        { type: 'single', joke: "The best thing about a Boolean is even if you're wrong, you're only off by a bit." },
        { type: 'twopart', setup: "Why was the JavaScript developer sad?", punchline: "Because he didn't Node how to Express himself!" },
        { type: 'single', joke: "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science." },
        { type: 'twopart', setup: "What's a developer's favorite animal?", punchline: "A pythonnnnn!" },
        { type: 'single', joke: "Ethernet: something us old folks use when the Wi-Fi is down." },
        { type: 'twopart', setup: "Why don't programmers like to go outside?", punchline: "There's too many bugs!" },
        { type: 'single', joke: "If at first you don't succeed; call it version 1.0." },
        { type: 'twopart', setup: "What do you call a programmer who works out?", punchline: "A gym-bug!" },
        { type: 'single', joke: "Software and cathedrals are much the same – first we build them, then we pray." },
        { type: 'twopart', setup: "Why did the programmer quit his job at the tech company?", punchline: "He didn't get arrays!" },
        { type: 'single', joke: "!false - It's funny because it's true." },
        { type: 'twopart', setup: "What's a database administrator's favorite song?", punchline: "Girls Just Wanna Have Functions!" },
        { type: 'single', joke: "I would tell you a UDP joke, but I'm not sure you'd get it." },
        { type: 'twopart', setup: "Why do programmers hate the outdoors?", punchline: "Too many trees and not enough syntax!" },
        { type: 'single', joke: "The generation of random numbers is too important to be left to chance." },
        { type: 'twopart', setup: "What's a programmer's favorite kind of joke?", punchline: "A recursive one... see above!" },
        { type: 'single', joke: "99 little bugs in the code, 99 bugs in the code. Take one down, patch it around, 117 bugs in the code." },
        { type: 'twopart', setup: "Why did the developer break up with his girlfriend?", punchline: "She had one-to-many relationships!" },
        { type: 'single', joke: "ASCII stupid question, get a stupid ANSI." },
        { type: 'twopart', setup: "What's a coder's favorite type of beer?", punchline: "Root beer!" },
        { type: 'single', joke: "There's no place like 127.0.0.1 for the holidays!" },
        { type: 'twopart', setup: "Why did the programmer always mix up Christmas and Halloween?", punchline: "Because Oct 31 == Dec 25!" },
        { type: 'single', joke: "Home is where the Wi-Fi connects automatically." },
        { type: 'twopart', setup: "What do you call a computer that sings?", punchline: "A Dell!" },
        { type: 'single', joke: "To err is human, to really foul things up requires a computer." },
        { type: 'twopart', setup: "Why was the computer tired when it got home?", punchline: "Because it had a hard drive!" },
        { type: 'single', joke: "Software undergoes beta testing shortly before it's released. Beta is Latin for 'still doesn't work.'" },
        { type: 'twopart', setup: "What do you call a group of security experts?", punchline: "A cypher!" },
        { type: 'single', joke: "Keyboard not found. Press F1 to continue." },
        { type: 'twopart', setup: "Why did the developer get lost?", punchline: "He took the wrong path!" },
        { type: 'single', joke: "It's not a bug, it's an undocumented feature." },
        { type: 'twopart', setup: "What's a programmer's favorite exercise?", punchline: "Circuit training!" },
        { type: 'single', joke: "The code that is the hardest to debug is the code that you know cannot possibly be wrong." },
        { type: 'twopart', setup: "Why do programmers prefer mechanical keyboards?", punchline: "Because they're always looking for that perfect click!" },
        { type: 'single', joke: "Walking on water and developing software from a specification are easy if both are frozen." },
        { type: 'twopart', setup: "What's a programmer's favorite board game?", punchline: "Risk... of deployment!" },
        { type: 'single', joke: "My software never has bugs. It just develops random features." },
        { type: 'twopart', setup: "Why did the programmer go broke?", punchline: "He used up all his cache!" },
        { type: 'single', joke: "One man's crappy software is another man's full-time job." },
        { type: 'twopart', setup: "What do you call a programmer who doesn't use version control?", punchline: "Unemployed!" },
        { type: 'single', joke: "Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics." },
        { type: 'twopart', setup: "Why did the developer stay calm during the crisis?", punchline: "Because he knew how to handle exceptions!" },
        { type: 'single', joke: "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning." },
        { type: 'twopart', setup: "What's the best thing about TCP jokes?", punchline: "I get to keep telling them until you get them!" },
        { type: 'single', joke: "The trouble with programmers is that you can never tell what a programmer is doing until it's too late." },
        { type: 'twopart', setup: "Why did the programmer use the dark web?", punchline: "He heard it had better cookies!" },
        { type: 'single', joke: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight." },
        { type: 'twopart', setup: "What's a developer's favorite magic trick?", punchline: "Making bugs disappear... temporarily!" },
        { type: 'single', joke: "First, solve the problem. Then, write the code." },
        { type: 'twopart', setup: "Why did the developer refuse to fight?", punchline: "He was a packetist!" },
        { type: 'single', joke: "The most likely way for the world to be destroyed, most experts agree, is by accident. That's where we come in; we're computer professionals. We cause accidents." },
        { type: 'twopart', setup: "What do you call a developer who can't stop coding?", punchline: "Committed!" },
        { type: 'single', joke: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." },
        { type: 'twopart', setup: "Why was the IT guy unpopular at parties?", punchline: "He kept pushing everyone's buttons!" },
        { type: 'single', joke: "Deleted code is debugged code." },
        { type: 'twopart', setup: "What's a programmer's favorite sport?", punchline: "Debugging... it's always a marathon!" },
        { type: 'single', joke: "Experience is the name everyone gives to their mistakes." },
        { type: 'twopart', setup: "Why don't programmers like to share?", punchline: "Because they're afraid of merge conflicts!" },
        { type: 'single', joke: "Good code is its own best documentation." },
        { type: 'twopart', setup: "What's a hacker's favorite restaurant?", punchline: "Denial of Service!" },
        { type: 'single', joke: "The best performance improvement is the transition from the nonworking state to the working state." },
        { type: 'twopart', setup: "Why did the developer carry an umbrella?", punchline: "In case of a cloud burst!" },
        { type: 'single', joke: "Before software can be reusable, it first has to be usable." },
        { type: 'twopart', setup: "What's a programmer's least favorite music?", punchline: "Heavy metal... hardware!" },
        { type: 'single', joke: "Weeks of coding can save you hours of planning." },
        { type: 'twopart', setup: "Why was the developer always cold?", punchline: "He kept opening too many Windows!" },
        { type: 'single', joke: "If debugging is the process of removing bugs, then programming must be the process of putting them in." },
        { type: 'twopart', setup: "What do you call a programmer who loves gardening?", punchline: "A branch manager!" },
        { type: 'single', joke: "Writing the first 90 percent of a computer program takes 90 percent of the time. The remaining 10 percent takes the other 90 percent of the time." },
        { type: 'twopart', setup: "Why did the startup fail?", punchline: "They couldn't get their MVP off the ground... minimum viable product!" },
        { type: 'single', joke: "It's not at all important to get it right the first time. It's vitally important to get it right the last time." },
        { type: 'twopart', setup: "What's a coder's favorite bedtime story?", punchline: "Sleeping Beauty... in the code!" }
    ],
    general: [
        { type: 'twopart', setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!" },
        { type: 'single', joke: "I told my wife she was drawing her eyebrows too high. She looked surprised." },
        { type: 'twopart', setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
        { type: 'single', joke: "Parallel lines have so much in common. It's a shame they'll never meet." },
        { type: 'twopart', setup: "What do you call a fake noodle?", punchline: "An impasta!" },
        { type: 'single', joke: "I'm reading a book about anti-gravity. It's impossible to put down!" },
        { type: 'twopart', setup: "Why don't eggs tell jokes?", punchline: "They'd crack each other up!" },
        { type: 'single', joke: "I used to be addicted to soap, but I'm clean now." },
        { type: 'twopart', setup: "What do you call a can opener that doesn't work?", punchline: "A can't opener!" },
        { type: 'single', joke: "I'm on a whiskey diet. I've lost three days already." },
        { type: 'twopart', setup: "Why don't skeletons fight each other?", punchline: "They don't have the guts!" },
        { type: 'single', joke: "I used to think I was indecisive, but now I'm not so sure." },
        { type: 'twopart', setup: "What did one wall say to the other wall?", punchline: "I'll meet you at the corner!" },
        { type: 'single', joke: "I told my computer I needed a break, and now it won't stop sending me Kit Kats." },
        { type: 'twopart', setup: "Why did the bicycle fall over?", punchline: "Because it was two-tired!" },
        { type: 'single', joke: "I don't trust stairs. They're always up to something." },
        { type: 'twopart', setup: "What do you call cheese that isn't yours?", punchline: "Nacho cheese!" },
        { type: 'single', joke: "I'm terrified of elevators, so I'm taking steps to avoid them." },
        { type: 'twopart', setup: "Why did the golfer bring two pairs of pants?", punchline: "In case he got a hole in one!" },
        { type: 'single', joke: "I used to play piano by ear, but now I use my hands." },
        { type: 'twopart', setup: "What do you call a sleeping bull?", punchline: "A bulldozer!" },
        { type: 'single', joke: "I couldn't figure out why the baseball kept getting larger. Then it hit me." },
        { type: 'twopart', setup: "Why did the tomato turn red?", punchline: "Because it saw the salad dressing!" },
        { type: 'single', joke: "I'm reading a book on teleportation. It's bound to take me places." },
        { type: 'twopart', setup: "What do you call a belt made of watches?", punchline: "A waist of time!" },
        { type: 'single', joke: "I wanted to be a doctor, but I didn't have the patience." },
        { type: 'twopart', setup: "Why did the cookie go to the doctor?", punchline: "Because it felt crummy!" },
        { type: 'single', joke: "My wife told me to stop impersonating a flamingo. I had to put my foot down." },
        { type: 'twopart', setup: "What do you call a parade of rabbits hopping backwards?", punchline: "A receding hare-line!" },
        { type: 'single', joke: "I used to hate facial hair, but then it grew on me." },
        { type: 'twopart', setup: "Why did the coffee file a police report?", punchline: "It got mugged!" },
        { type: 'single', joke: "I have a fear of speed bumps, but I'm slowly getting over it." },
        { type: 'twopart', setup: "What do you call a boomerang that doesn't come back?", punchline: "A stick!" },
        { type: 'single', joke: "I tried to catch some fog earlier. I mist." },
        { type: 'twopart', setup: "Why don't oysters donate to charity?", punchline: "Because they're shellfish!" },
        { type: 'single', joke: "I went to buy some camouflage trousers but couldn't find any." },
        { type: 'twopart', setup: "What's orange and sounds like a parrot?", punchline: "A carrot!" },
        { type: 'single', joke: "I stayed up all night wondering where the sun went. Then it dawned on me." },
        { type: 'twopart', setup: "Why did the picture go to jail?", punchline: "Because it was framed!" },
        { type: 'single', joke: "I used to be a banker, but I lost interest." },
        { type: 'twopart', setup: "What do you call a fish with no eyes?", punchline: "Fsh!" },
        { type: 'single', joke: "I'm reading a horror story in braille. Something bad is about to happen, I can feel it." },
        { type: 'twopart', setup: "Why did the invisible man turn down the job offer?", punchline: "He couldn't see himself doing it!" },
        { type: 'single', joke: "I told my wife she should embrace her mistakes. She gave me a hug." },
        { type: 'twopart', setup: "What do you call a group of musical whales?", punchline: "An orca-stra!" },
        { type: 'single', joke: "I'm so good at sleeping, I can do it with my eyes closed." },
        { type: 'twopart', setup: "Why did the stadium get hot after the game?", punchline: "All the fans left!" },
        { type: 'single', joke: "I used to be addicted to the hokey pokey, but I turned myself around." },
        { type: 'twopart', setup: "What do you call a snowman with a six-pack?", punchline: "An abdominal snowman!" },
        { type: 'single', joke: "I'm on a seafood diet. I see food and I eat it." },
        { type: 'twopart', setup: "Why did the gym close down?", punchline: "It just didn't work out!" },
        { type: 'single', joke: "I told my computer I needed a break. Now it won't stop sending me vacation ads." },
        { type: 'twopart', setup: "What do you call a snake that's 3.14 meters long?", punchline: "A π-thon!" },
        { type: 'single', joke: "I'm writing a book about hurricanes. It's only a draft." },
        { type: 'twopart', setup: "Why did the melon jump into the lake?", punchline: "It wanted to be a watermelon!" },
        { type: 'single', joke: "I used to work at a calendar factory, but I got fired for taking days off." },
        { type: 'twopart', setup: "What do you call a pig that does karate?", punchline: "A pork chop!" },
        { type: 'single', joke: "I have a joke about construction, but I'm still working on it." },
        { type: 'twopart', setup: "Why don't melons get married?", punchline: "Because they cantaloupe!" },
        { type: 'single', joke: "I used to be a tap dancer until I fell in the sink." },
        { type: 'twopart', setup: "What do you call a belt made out of watches?", punchline: "A waist of time!" },
        { type: 'single', joke: "I'm friends with all electricians. We have great current connections." },
        { type: 'twopart', setup: "Why did the chicken join a band?", punchline: "Because it had the drumsticks!" },
        { type: 'single', joke: "I tried to write a joke about infinity, but it took forever." },
        { type: 'twopart', setup: "What do you call a bear caught in the rain?", punchline: "A drizzly bear!" },
        { type: 'single', joke: "I have a joke about time travel, but you didn't like it." },
        { type: 'twopart', setup: "Why don't vampires go to barbecues?", punchline: "They don't like stakes!" },
        { type: 'single', joke: "I bought some shoes from a drug dealer. I don't know what he laced them with, but I've been tripping all day." },
        { type: 'twopart', setup: "What do you call a factory that sells passable products?", punchline: "A satisfactory!" },
        { type: 'single', joke: "I have a fear of over-engineered buildings. It's a complex complex complex." },
        { type: 'twopart', setup: "Why did the smartphone need glasses?", punchline: "It lost all its contacts!" },
        { type: 'single', joke: "I used to work in a shoe recycling shop. It was sole destroying." },
        { type: 'twopart', setup: "What do you call a laughing jar of mayonnaise?", punchline: "LMAYO!" },
        { type: 'single', joke: "I have a joke about paper, but it's tearable." },
        { type: 'twopart', setup: "Why did the math teacher break up with the history teacher?", punchline: "There was no chemistry!" },
        { type: 'single', joke: "I used to be a mime, but I had to speak up about working conditions." },
        { type: 'twopart', setup: "What do you call a dinosaur with an extensive vocabulary?", punchline: "A thesaurus!" },
        { type: 'single', joke: "I'm reading a book on the history of glue. I can't put it down." },
        { type: 'twopart', setup: "Why don't pirates take a shower before they walk the plank?", punchline: "They'll just wash up on shore!" },
        { type: 'single', joke: "I have a joke about unemployment, but none of them work." },
        { type: 'twopart', setup: "What do you call a magician who loses their magic?", punchline: "Ian!" },
        { type: 'single', joke: "I'm addicted to brake fluid, but I can stop whenever I want." },
        { type: 'twopart', setup: "Why did the traffic light turn red?", punchline: "You would too if you had to change in the middle of the street!" },
        { type: 'single', joke: "I have a joke about chemistry, but I don't think it will get a reaction." },
        { type: 'twopart', setup: "What do you call a singing laptop?", punchline: "A Dell!" },
        { type: 'single', joke: "I'm writing a book about reverse psychology. Please don't read it." },
        { type: 'twopart', setup: "Why did the student eat his homework?", punchline: "Because the teacher said it was a piece of cake!" },
        { type: 'single', joke: "I have a photographic memory, but I always forget to bring film." },
        { type: 'twopart', setup: "What do you call a pencil with two erasers?", punchline: "Pointless!" },
        { type: 'single', joke: "I'm on a whiskey diet. I've lost three days already." },
        { type: 'twopart', setup: "Why did the cookie go to the hospital?", punchline: "Because it felt crumbly!" },
        { type: 'single', joke: "I have a joke about gardening, but I'll have to dig it up." },
        { type: 'twopart', setup: "What do you call a T-Rex that sells guns?", punchline: "A small arms dealer!" },
        { type: 'single', joke: "I told a joke at a conference about a roof. It went over everyone's head." },
        { type: 'twopart', setup: "Why did the balloon go near the needle?", punchline: "It wanted to be a pop star!" },
        { type: 'single', joke: "I have a joke about wind turbines. I'm a big fan." },
        { type: 'twopart', setup: "What do you call a witch at the beach?", punchline: "A sand-witch!" },
        { type: 'single', joke: "I tried to sue the airport for losing my luggage. I lost my case." },
        { type: 'twopart', setup: "What did the zero say to the eight?", punchline: "Nice belt!" },
        { type: 'single', joke: "I can't believe I got fired from the calendar factory. All I did was take a day off!" },
        { type: 'twopart', setup: "What do you call a magic owl?", punchline: "Hoodini!" },
        { type: 'single', joke: "I told my wife she was drawing her eyebrows too high. She looked surprised." },
        { type: 'twopart', setup: "Why don't sharks eat clowns?", punchline: "Because they taste funny!" },
        { type: 'single', joke: "I used to play piano by ear, but now I use my hands and fingers." },
        { type: 'twopart', setup: "What do you call a man with a car on his head?", punchline: "Jack!" },
        { type: 'single', joke: "I'm reading a book on the history of glue. I just can't seem to put it down." },
        { type: 'twopart', setup: "What did the drummer call his twin daughters?", punchline: "Anna one, Anna two!" },
        { type: 'single', joke: "Why did the can crusher quit his job? Because it was soda pressing!" },
        { type: 'twopart', setup: "What do you call a woman with one leg?", punchline: "Eileen!" },
        { type: 'single', joke: "I tried to catch fog yesterday. Mist!" },
        { type: 'twopart', setup: "What's the best way to carve wood?", punchline: "Whittle by whittle!" },
        { type: 'single', joke: "My friend says to me: 'What rhymes with orange?' I said: 'No it doesn't!'" },
        { type: 'twopart', setup: "What do you call a man lying on your doorstep?", punchline: "Matt!" },
        { type: 'single', joke: "I wasn't originally going to get a brain transplant, but then I changed my mind." },
        { type: 'twopart', setup: "What did the big flower say to the little flower?", punchline: "Hi, bud!" },
        { type: 'single', joke: "Why don't scientists trust stairs? Because they're always up to something." },
        { type: 'twopart', setup: "What do you call a dog that can do magic tricks?", punchline: "A labracadabrador!" },
        { type: 'single', joke: "I got a job at a bakery because I kneaded dough." },
        { type: 'twopart', setup: "Why did the gym close down?", punchline: "It just didn't work out!" },
        { type: 'single', joke: "I used to hate facial hair, but then it grew on me." },
        { type: 'twopart', setup: "What do you call a fish with two knees?", punchline: "A two-knee fish!" },
        { type: 'single', joke: "I'm trying to organize a hide and seek tournament, but good players are really hard to find." },
        { type: 'twopart', setup: "What's the best thing about Switzerland?", punchline: "I don't know, but the flag is a big plus!" },
        { type: 'single', joke: "Did you hear about the claustrophobic astronaut? He just needed a little space." },
        { type: 'twopart', setup: "What do you call a group of unorganized cats?", punchline: "A cat-astrophe!" },
        { type: 'single', joke: "I don't play soccer because I enjoy the sport. I'm just doing it for kicks." },
        { type: 'twopart', setup: "Why did the scarecrow become a successful politician?", punchline: "He was outstanding in his field!" },
        { type: 'single', joke: "The rotation of Earth really makes my day." },
        { type: 'twopart', setup: "What do you call a fake stone in Ireland?", punchline: "A sham rock!" },
        { type: 'single', joke: "I used to be a banker, but I lost interest." },
        { type: 'twopart', setup: "What do you call a belt with a watch on it?", punchline: "A waist of time!" },
        { type: 'single', joke: "Want to hear a joke about construction? I'm still working on it." },
        { type: 'twopart', setup: "What do you call a bear with no socks on?", punchline: "Bare-foot!" },
        { type: 'single', joke: "I have a fear of speed bumps, but I'm slowly getting over it." },
        { type: 'twopart', setup: "What did one plate say to the other plate?", punchline: "Dinner is on me!" },
        { type: 'single', joke: "My wife told me to stop impersonating a flamingo. I had to put my foot down." },
        { type: 'twopart', setup: "What do you call a nun in a wheelchair?", punchline: "Virgin mobile!" },
        { type: 'single', joke: "What's the difference between a hippo and a Zippo? One is really heavy, and the other is a little lighter." },
        { type: 'twopart', setup: "What did one ocean say to the other ocean?", punchline: "Nothing, they just waved!" },
        { type: 'single', joke: "I'm reading a book about anti-gravity. It's impossible to put down!" },
        { type: 'twopart', setup: "What do you call a lazy kangaroo?", punchline: "A pouch potato!" },
        { type: 'single', joke: "Did you hear about the guy who invented Lifesavers? He made a mint!" },
        { type: 'twopart', setup: "What do you call a parade of rabbits hopping backward?", punchline: "A receding hare-line!" },
        { type: 'single', joke: "How does Moses make his coffee? Hebrews it!" },
        { type: 'twopart', setup: "What do you call an alligator in a vest?", punchline: "An investigator!" },
        { type: 'single', joke: "I couldn't figure out why the baseball kept getting larger. Then it hit me." },
        { type: 'twopart', setup: "What do you call a snowman in July?", punchline: "A puddle!" },
        { type: 'single', joke: "Why did the Oreo go to the dentist? Because he lost his filling!" },
        { type: 'twopart', setup: "What do you call a pile of cats?", punchline: "A meow-tain!" },
        { type: 'single', joke: "I was wondering why the frisbee was getting bigger, then it hit me." },
        { type: 'twopart', setup: "What do you call a belt made of watches?", punchline: "A waist of time!" },
        { type: 'single', joke: "I used to be addicted to the hokey pokey, but I turned myself around." },
        { type: 'twopart', setup: "What do you call a factory that makes okay products?", punchline: "A satisfactory!" },
        { type: 'single', joke: "What do you call a can opener that doesn't work? A can't opener!" },
        { type: 'twopart', setup: "What do you call a sleeping dinosaur?", punchline: "A dino-snore!" },
        { type: 'single', joke: "I used to work in a shoe recycling shop. It was sole destroying." },
        { type: 'twopart', setup: "What do you call cheese that's not yours?", punchline: "Nacho cheese!" },
        { type: 'single', joke: "Have you heard about the restaurant on the moon? Great food, no atmosphere." },
        { type: 'twopart', setup: "What do you call a bee that can't make up its mind?", punchline: "A maybe!" },
        { type: 'single', joke: "I once got into so much debt that I couldn't even afford my electricity bills. They were the darkest times of my life." },
        { type: 'twopart', setup: "What do you call a fish wearing a crown?", punchline: "King of the sea!" },
        { type: 'single', joke: "Why don't eggs tell each other jokes? They'd crack up!" },
        { type: 'twopart', setup: "What do you call a computer floating in the ocean?", punchline: "A Dell rolling in the deep!" },
        { type: 'single', joke: "What's the difference between a poorly dressed man on a tricycle and a well-dressed man on a bicycle? Attire!" },
        { type: 'twopart', setup: "What do you call a group of disorganized cats?", punchline: "A cat-astrophe!" },
        { type: 'single', joke: "I'm terrified of elevators, so I'm going to start taking steps to avoid them." },
        { type: 'twopart', setup: "What do you call birds who stick together?", punchline: "Vel-crows!" },
        { type: 'single', joke: "I used to be a banker, but then I lost interest." },
        { type: 'twopart', setup: "What do you call a careful wolf?", punchline: "Aware wolf!" },
        { type: 'single', joke: "Did you hear about the cheese factory that exploded? There was nothing left but de-brie!" },
        { type: 'twopart', setup: "What do you call a sleepwalking nun?", punchline: "A roamin' Catholic!" },
        { type: 'single', joke: "Why couldn't the bicycle stand up? It was two tired!" },
        { type: 'twopart', setup: "What do you call a singing laptop?", punchline: "A Dell!" },
        { type: 'single', joke: "I wanted to be a doctor, but I didn't have the patience." },
        { type: 'twopart', setup: "What do you call an unpredictable camera?", punchline: "A loose Canon!" },
        { type: 'single', joke: "What do you call a boy named Lee that no one talks to? Lonely!" },
        { type: 'twopart', setup: "What do you call a sad coffee?", punchline: "Depresso!" },
        { type: 'single', joke: "Why did the coffee file a police report? It got mugged!" },
        { type: 'twopart', setup: "What do you call a funny mountain?", punchline: "Hill-arious!" },
        { type: 'single', joke: "I have a joke about trickle down economics, but 99% of you will never get it." },
        { type: 'twopart', setup: "What do you call a bear in the rain?", punchline: "A drizzly bear!" },
        { type: 'single', joke: "Why do we tell actors to 'break a leg?' Because every play has a cast!" },
        { type: 'twopart', setup: "What do you call an illegally parked frog?", punchline: "Toad!" },
        { type: 'single', joke: "What's the best part about living in Switzerland? Not sure, but the flag is a big plus!" },
        { type: 'twopart', setup: "What do you call a really funny dinosaur?", punchline: "A laugh-a-saurus!" },
        { type: 'single', joke: "I'm on a whiskey diet. I've lost three days already!" },
        { type: 'twopart', setup: "What do you call a small fortune teller who escaped prison?", punchline: "A small medium at large!" },
        { type: 'single', joke: "I told my doctor I broke my arm in two places. He told me to stop going to those places." },
        { type: 'twopart', setup: "What do you call a Mexican who lost his car?", punchline: "Carlos!" },
        { type: 'single', joke: "I was going to tell a time travel joke, but you guys didn't like it." },
        { type: 'twopart', setup: "What do you call a grumpy cow?", punchline: "Moooody!" },
        { type: 'single', joke: "What do you call a cow during an earthquake? A milkshake!" },
        { type: 'twopart', setup: "What do you call a boomerang that won't come back?", punchline: "A stick!" },
        { type: 'single', joke: "I used to be a tap dancer until I fell in the sink." }
    ],
    puns: [
        { type: 'single', joke: "I'm friends with 25 letters of the alphabet. I don't know Y." },
        { type: 'twopart', setup: "What do you call a bear with no teeth?", punchline: "A gummy bear!" },
        { type: 'single', joke: "Time flies like an arrow. Fruit flies like a banana." },
        { type: 'twopart', setup: "What do you call a dinosaur that crashes his car?", punchline: "Tyrannosaurus Wrecks!" },
        { type: 'single', joke: "I used to hate facial hair, but then it grew on me." },
        { type: 'twopart', setup: "What do you call a fish wearing a bowtie?", punchline: "Sofishticated!" },
        { type: 'single', joke: "I once got into a fight with a broken elevator. It let me down on so many levels." },
        { type: 'twopart', setup: "What do you call a belt made of watches?", punchline: "A waist of time!" },
        { type: 'single', joke: "I wondered why the frisbee kept getting bigger. Then it hit me." },
        { type: 'twopart', setup: "What do you call a factory that makes okay products?", punchline: "A satisfactory!" },
        { type: 'single', joke: "Two silk worms had a race. It ended in a tie." },
        { type: 'twopart', setup: "What do you call a sleeping dinosaur?", punchline: "A dino-snore!" },
        { type: 'single', joke: "A bicycle can't stand on its own because it's two tired." },
        { type: 'twopart', setup: "What do you call a dog magician?", punchline: "A labracadabrador!" },
        { type: 'single', joke: "The rotation of earth really makes my day." },
        { type: 'twopart', setup: "What do you call a pile of cats?", punchline: "A meowtain!" },
        { type: 'single', joke: "I used to be a banker, but I lost interest." },
        { type: 'twopart', setup: "What do you call an alligator in a vest?", punchline: "An investigator!" },
        { type: 'single', joke: "A book just fell on my head. I only have my shelf to blame." },
        { type: 'twopart', setup: "What do you call a bee that can't make up its mind?", punchline: "A maybe!" },
        { type: 'single', joke: "I'm reading a book about tunnels. It's boring." },
        { type: 'twopart', setup: "What do you call a sleeping bull?", punchline: "A bulldozer!" },
        { type: 'single', joke: "Need an ark? I Noah guy." },
        { type: 'twopart', setup: "What do you call a cow with no legs?", punchline: "Ground beef!" },
        { type: 'single', joke: "I couldn't remember how to throw a boomerang, but then it came back to me." },
        { type: 'twopart', setup: "What do you call a deer with no eyes?", punchline: "No idea!" },
        { type: 'single', joke: "I stayed up all night to see where the sun went. Then it dawned on me." },
        { type: 'twopart', setup: "What do you call a deer with no eyes and no legs?", punchline: "Still no idea!" },
        { type: 'single', joke: "I tried to catch fog yesterday. Mist." },
        { type: 'twopart', setup: "What do you call a monkey that loves Doritos?", punchline: "A chipmunk!" },
        { type: 'single', joke: "Towels can't tell jokes. They have a dry sense of humor." },
        { type: 'twopart', setup: "What do you call a shoe made of a banana?", punchline: "A slipper!" },
        { type: 'single', joke: "I got hit in the head with a can of soda. Luckily it was a soft drink." },
        { type: 'twopart', setup: "What do you call a sleeping pizza?", punchline: "A piZZZa!" },
        { type: 'single', joke: "The first time I got a universal remote control, I thought to myself, this changes everything." },
        { type: 'twopart', setup: "What do you call a computer that sings?", punchline: "A Dell!" },
        { type: 'single', joke: "Don't trust atoms. They make up everything." },
        { type: 'twopart', setup: "What do you call a sad coffee?", punchline: "Depresso!" },
        { type: 'single', joke: "I got a job at a bakery because I kneaded dough." },
        { type: 'twopart', setup: "What do you call a lazy kangaroo?", punchline: "A pouch potato!" },
        { type: 'single', joke: "I used to play piano by ear. Now I use my hands." },
        { type: 'twopart', setup: "What do you call a pig that does karate?", punchline: "A pork chop!" },
        { type: 'single', joke: "I made a pencil with two erasers. It was pointless." },
        { type: 'twopart', setup: "What do you call a train carrying bubblegum?", punchline: "A chew-chew train!" },
        { type: 'single', joke: "I'm terrified of elevators, so I'm taking steps to avoid them." },
        { type: 'twopart', setup: "What do you call a fake stone in Ireland?", punchline: "A shamrock!" },
        { type: 'single', joke: "I bought some shoes from a drug dealer. I don't know what he laced them with, but I've been tripping all day." },
        { type: 'twopart', setup: "What do you call a frozen dog?", punchline: "A pupsicle!" },
        { type: 'single', joke: "I used to be a baker, but I couldn't make enough dough." },
        { type: 'twopart', setup: "What do you call a cow in an earthquake?", punchline: "A milkshake!" },
        { type: 'single', joke: "I have a pun about wind, but it blows." },
        { type: 'twopart', setup: "What do you call a group of killer whales playing instruments?", punchline: "An orca-stra!" },
        { type: 'single', joke: "I used to be afraid of hurdles, but I got over it." },
        { type: 'twopart', setup: "What do you call a sheep with no legs?", punchline: "A cloud!" },
        { type: 'single', joke: "The past, present, and future walked into a bar. It was tense." },
        { type: 'twopart', setup: "What do you call a fortune teller who just got out of jail?", punchline: "A medium at large!" },
        { type: 'single', joke: "I used to work at a stationery store, but I didn't feel like I was going anywhere." },
        { type: 'twopart', setup: "What do you call a line of rabbits walking backwards?", punchline: "A receding hare line!" },
        { type: 'single', joke: "I have a joke about origami, but I'll have to paper over some details." },
        { type: 'twopart', setup: "What do you call a nervous javelin thrower?", punchline: "Shakespeare!" },
        { type: 'single', joke: "Velcro - what a rip off!" },
        { type: 'twopart', setup: "What do you call a hippie's wife?", punchline: "Mississippi!" },
        { type: 'single', joke: "I was going to tell a time-traveling joke, but you guys didn't like it." },
        { type: 'twopart', setup: "What do you call a man with a rubber toe?", punchline: "Roberto!" },
        { type: 'single', joke: "PMS jokes aren't funny. Period." },
        { type: 'twopart', setup: "What do you call a man with no shins?", punchline: "Tony!" },
        { type: 'single', joke: "I'm reading a book about teleportation. It's bound to take me places." },
        { type: 'twopart', setup: "What do you call a woman who stands between two goal posts?", punchline: "Annette!" },
        { type: 'single', joke: "Seven days without a pun makes one weak." },
        { type: 'twopart', setup: "What do you call a sunburned librarian?", punchline: "Well red!" },
        { type: 'single', joke: "I used to be a tailor, but I wasn't suited for it." },
        { type: 'twopart', setup: "What do you call a magic dog?", punchline: "A labracadabrador!" },
        { type: 'single', joke: "Broken pencils are pointless." },
        { type: 'twopart', setup: "What do you call an elephant that doesn't matter?", punchline: "An irrelephant!" },
        { type: 'single', joke: "I wondered why the baseball was getting bigger. Then it hit me." },
        { type: 'twopart', setup: "What do you call a bear with extreme mood swings?", punchline: "Bi-polar bear!" },
        { type: 'single', joke: "A boiled egg in the morning is hard to beat." },
        { type: 'twopart', setup: "What do you call a Spanish man who lost his car?", punchline: "Carlos!" },
        { type: 'single', joke: "The man who survived both mustard gas and pepper spray is a seasoned veteran." },
        { type: 'twopart', setup: "What do you call a knight who is afraid to fight?", punchline: "Sir Render!" },
        { type: 'single', joke: "A bargain is something you don't need at a price you can't resist." },
        { type: 'twopart', setup: "What do you call a Mexican who lost his car?", punchline: "Carlos!" },
        { type: 'single', joke: "Show me a piano falling down a mineshaft and I'll show you A-flat minor." },
        { type: 'twopart', setup: "What do you call a careful wolf?", punchline: "Aware wolf!" },
        { type: 'single', joke: "I dropped my phone in the toilet. Now it's syncing." },
        { type: 'twopart', setup: "What do you call a three-legged donkey?", punchline: "A wonky donkey!" },
        { type: 'single', joke: "Without geometry, life is pointless." },
        { type: 'twopart', setup: "What do you call a baby monkey?", punchline: "A chimp off the old block!" },
        { type: 'single', joke: "Atheism is a non-prophet organization." },
        { type: 'twopart', setup: "What do you call a boomerang that won't come back?", punchline: "A stick!" },
        { type: 'single', joke: "Two antennas met on a roof, fell in love and got married. The ceremony wasn't much, but the reception was excellent." },
        { type: 'twopart', setup: "What do you call a pony with a sore throat?", punchline: "A little hoarse!" },
        { type: 'single', joke: "Reading while sunbathing makes you well red." },
        { type: 'twopart', setup: "What do you call a sleepwalking nun?", punchline: "A roamin' Catholic!" },
        { type: 'single', joke: "The future, the present, and the past walked into a bar. Things got a little tense." },
        { type: 'twopart', setup: "What do you call a fly without wings?", punchline: "A walk!" },
        { type: 'single', joke: "England doesn't have a kidney bank, but it does have a Liverpool." },
        { type: 'twopart', setup: "What do you call a magic dog?", punchline: "A labracadabrador!" },
        { type: 'single', joke: "I'm friends with 25 letters of the alphabet. I don't know why." },
        { type: 'twopart', setup: "What do you call a dinosaur that's a noisy sleeper?", punchline: "A Bronto-snorus!" },
        { type: 'single', joke: "What do you call a factory that sells passable products? A satisfactory!" },
        { type: 'twopart', setup: "What do you call a snobbish criminal going down stairs?", punchline: "A condescending con descending!" },
        { type: 'single', joke: "Venison for dinner again? Oh deer!" },
        { type: 'twopart', setup: "What do you call a man who can't stand?", punchline: "Neil!" },
        { type: 'single', joke: "I used to be addicted to soap. But I'm clean now!" },
        { type: 'twopart', setup: "What do you call a row of rabbits hopping away?", punchline: "A receding hare line!" },
        { type: 'single', joke: "How do you make holy water? You boil the hell out of it!" },
        { type: 'twopart', setup: "What do you call an alligator detective?", punchline: "An investi-gator!" },
        { type: 'single', joke: "I stayed up all night wondering where the sun went. Then it dawned on me!" },
        { type: 'twopart', setup: "What do you call a can opener that doesn't work?", punchline: "A can't opener!" },
        { type: 'single', joke: "I used to work at a calendar factory but I got fired because I took a couple of days off." },
        { type: 'twopart', setup: "What do you call a sheep covered in chocolate?", punchline: "A candy baa!" },
        { type: 'single', joke: "The shovel was a ground-breaking invention!" },
        { type: 'twopart', setup: "What do you call an everyday potato?", punchline: "A commentater!" },
        { type: 'single', joke: "I used to think I was indecisive. But now I'm not too sure." },
        { type: 'twopart', setup: "What do you call a train full of toffee?", punchline: "A chew chew train!" },
        { type: 'single', joke: "Yesterday I accidentally swallowed some food coloring. The doctor says I'm okay, but I feel like I've dyed a little inside." },
        { type: 'twopart', setup: "What do you call a droid that takes the long way around?", punchline: "R2 detour!" },
        { type: 'single', joke: "I told my girlfriend she drew her eyebrows too high. She seemed surprised!" },
        { type: 'twopart', setup: "What do you call a highland cow in your bathroom?", punchline: "A hairy situation!" },
        { type: 'single', joke: "What's the advantage of living in Switzerland? Well, the flag is a big plus!" },
        { type: 'twopart', setup: "What do you call a pile of kittens?", punchline: "A meow-tain!" },
        { type: 'single', joke: "I'm reading a book about anti-gravity. It's impossible to put down!" },
        { type: 'twopart', setup: "What do you call an elephant that doesn't matter?", punchline: "Irrelephant!" },
        { type: 'single', joke: "I wasn't originally going to get a brain transplant, but then I changed my mind." },
        { type: 'twopart', setup: "What do you call a bear with no ears?", punchline: "B!" },
        { type: 'single', joke: "A termite walks into a bar and asks 'Is the bar tender here?'" },
        { type: 'twopart', setup: "What do you call a fish with no eyes?", punchline: "Fsh!" },
        { type: 'single', joke: "How do you organize an outer space party? You planet!" },
        { type: 'twopart', setup: "What do you call a careful wolf?", punchline: "Aware wolf!" },
        { type: 'single', joke: "I'm on a seafood diet. I see food and eat it!" },
        { type: 'twopart', setup: "What do you call a pig that knows karate?", punchline: "Pork chop!" },
        { type: 'single', joke: "Don't spell part backwards. It's a trap!" },
        { type: 'twopart', setup: "What do you call an apology written in dots and dashes?", punchline: "Re-morse code!" },
        { type: 'single', joke: "How do you throw a space party? You planet!" },
        { type: 'twopart', setup: "What do you call a communist sniper?", punchline: "A Marx-man!" },
        { type: 'single', joke: "Did you hear about the Italian chef who died? He pasta way!" },
        { type: 'twopart', setup: "What do you call a nervous javelin thrower?", punchline: "Shakespeare!" },
        { type: 'single', joke: "The past, the present, and the future walked into a bar. It was tense!" },
        { type: 'twopart', setup: "What do you call a woman who sets her bills on fire?", punchline: "Bernadette!" },
        { type: 'single', joke: "I'm so good at sleeping I can do it with my eyes closed!" },
        { type: 'twopart', setup: "What do you call a belt made out of watches?", punchline: "A waist of time!" },
        { type: 'single', joke: "Parallel lines have so much in common. It's a shame they'll never meet!" },
        { type: 'twopart', setup: "What do you call a monk who walks everywhere?", punchline: "A roamin' Catholic!" },
        { type: 'single', joke: "I used to be a baker until I couldn't make enough dough." },
        { type: 'twopart', setup: "What do you call a shoe made from a banana?", punchline: "A slipper!" },
        { type: 'single', joke: "What's orange and sounds like a parrot? A carrot!" },
        { type: 'twopart', setup: "What do you call a bear stuck in the rain?", punchline: "A drizzly bear!" },
        { type: 'single', joke: "The early bird might get the worm, but the second mouse gets the cheese!" },
        { type: 'twopart', setup: "What do you call a group of killer whales playing instruments?", punchline: "An orca-stra!" },
        { type: 'single', joke: "Where do you find a dog with no legs? Right where you left it!" },
        { type: 'twopart', setup: "What do you call a very small valentine?", punchline: "A valen-tiny!" },
        { type: 'single', joke: "Two goldfish are in a tank. One says to the other, 'Do you know how to drive this thing?'" },
        { type: 'twopart', setup: "What do you call an illegally parked frog?", punchline: "Toad!" },
        { type: 'single', joke: "I couldn't figure out how to put my seatbelt on. Then it clicked!" },
        { type: 'twopart', setup: "What do you call a three-legged donkey?", punchline: "A wonky donkey!" },
        { type: 'single', joke: "What's the best thing about Switzerland? I don't know, but its flag is a big plus!" },
        { type: 'twopart', setup: "What do you call a camel with three humps?", punchline: "Pregnant!" },
        { type: 'single', joke: "I wondered why the baseball kept getting bigger. Then it hit me!" },
        { type: 'twopart', setup: "What do you call a cow with a twitch?", punchline: "Beef jerky!" },
        { type: 'single', joke: "There's a new type of broom out. It's sweeping the nation!" },
        { type: 'twopart', setup: "What do you call a pile of cats?", punchline: "A meow-tain!" },
        { type: 'single', joke: "I ordered a chicken and an egg from Amazon. I'll let you know which comes first!" },
        { type: 'twopart', setup: "What do you call a fake stone?", punchline: "A shamrock!" },
        { type: 'single', joke: "I got a job at a bakery because I kneaded dough!" },
        { type: 'twopart', setup: "What do you call a knight who is afraid of fighting?", punchline: "Sir Render!" },
        { type: 'single', joke: "Why did the scarecrow win an award? He was outstanding in his field!" },
        { type: 'twopart', setup: "What do you call a boomerang that doesn't work?", punchline: "A stick!" },
        { type: 'single', joke: "I'm reading a book on teleportation. It's bound to take me places!" },
        { type: 'twopart', setup: "What do you call a pony with a cough?", punchline: "A little hoarse!" },
        { type: 'single', joke: "Did you hear about the kidnapping at school? It's okay, he woke up!" },
        { type: 'twopart', setup: "What do you call a laughing motorcycle?", punchline: "A Yamahahaha!" },
        { type: 'single', joke: "I used to play piano by ear, but now I use my hands!" },
        { type: 'twopart', setup: "What do you call a sleeping bull?", punchline: "A bulldozer!" },
        { type: 'single', joke: "Did you know the first French fries weren't actually cooked in France? They were cooked in Greece!" },
        { type: 'twopart', setup: "What do you call a snowman with a six-pack?", punchline: "An abdominal snowman!" },
        { type: 'single', joke: "I used to hate facial hair, but then it grew on me!" },
        { type: 'twopart', setup: "What do you call a cow during an earthquake?", punchline: "A milkshake!" },
        { type: 'single', joke: "Time flies like an arrow. Fruit flies like a banana!" },
        { type: 'twopart', setup: "What do you call a bee having a bad hair day?", punchline: "A frisbee!" },
        { type: 'single', joke: "I'm so bright my mother calls me son!" },
        { type: 'twopart', setup: "What do you call an acid with attitude?", punchline: "A-mean-o acid!" },
        { type: 'single', joke: "Why couldn't the bicycle stand up by itself? It was two tired!" },
        { type: 'twopart', setup: "What do you call a bear with extreme mood swings?", punchline: "Bi-polar bear!" },
        { type: 'single', joke: "I'm glad I know sign language. It's pretty handy!" },
        { type: 'twopart', setup: "What do you call a computer that sings?", punchline: "A-Dell!" },
        { type: 'single', joke: "I couldn't remember how to throw a boomerang, but then it came back to me!" },
        { type: 'twopart', setup: "What do you call a story about a broken pencil?", punchline: "Pointless!" },
        { type: 'single', joke: "I used to be addicted to the hokey pokey. But I turned myself around!" },
        { type: 'twopart', setup: "What do you call a deer with no eyes?", punchline: "No eye-deer!" },
        { type: 'single', joke: "What do you call a fish without eyes? Fsh!" },
        { type: 'twopart', setup: "What do you call a deer with no eyes and no legs?", punchline: "Still no eye-deer!" },
        { type: 'single', joke: "I tried to catch some fog earlier. I mist!" }
    ],
    dad: [
        { type: 'twopart', setup: "I'm afraid for the calendar.", punchline: "Its days are numbered!" },
        { type: 'single', joke: "I only know 25 letters of the alphabet. I don't know y." },
        { type: 'twopart', setup: "What did the ocean say to the beach?", punchline: "Nothing, it just waved!" },
        { type: 'single', joke: "Why did the math book look so sad? Because it had too many problems." },
        { type: 'twopart', setup: "How do you organize a space party?", punchline: "You planet!" },
        { type: 'single', joke: "I would avoid the sushi if I was you. It's a little fishy." },
        { type: 'twopart', setup: "What time did the man go to the dentist?", punchline: "Tooth hurt-y!" },
        { type: 'single', joke: "Did you hear about the kidnapping at school? It's okay, he woke up." },
        { type: 'twopart', setup: "What do you call a factory that makes okay products?", punchline: "A satisfactory!" },
        { type: 'single', joke: "I used to hate facial hair, but then it grew on me." },
        { type: 'twopart', setup: "Why don't eggs tell jokes?", punchline: "They'd crack each other up!" },
        { type: 'single', joke: "I'm reading a book on anti-gravity. It's impossible to put down!" },
        { type: 'twopart', setup: "What did the janitor say when he jumped out of the closet?", punchline: "Supplies!" },
        { type: 'single', joke: "Can February March? No, but April May!" },
        { type: 'twopart', setup: "What do you call a bear with no teeth?", punchline: "A gummy bear!" },
        { type: 'single', joke: "Dad, I'm hungry! Hi Hungry, I'm Dad!" },
        { type: 'twopart', setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
        { type: 'single', joke: "I don't trust stairs. They're always up to something." },
        { type: 'twopart', setup: "What's the best time to go to the dentist?", punchline: "Tooth-hurty!" },
        { type: 'single', joke: "I used to play piano by ear, but now I use my hands." },
        { type: 'twopart', setup: "Why did the coffee file a police report?", punchline: "It got mugged!" },
        { type: 'single', joke: "I ordered a chicken and an egg from Amazon. I'll let you know." },
        { type: 'twopart', setup: "What do you call cheese that isn't yours?", punchline: "Nacho cheese!" },
        { type: 'single', joke: "This graveyard looks overcrowded. People must be dying to get in." },
        { type: 'twopart', setup: "Why do bees have sticky hair?", punchline: "Because they use honeycombs!" },
        { type: 'single', joke: "I stayed up all night wondering where the sun went. Then it dawned on me." },
        { type: 'twopart', setup: "What do you call a pile of kittens?", punchline: "A meow-tain!" },
        { type: 'single', joke: "I'm on a seafood diet. I see food and I eat it." },
        { type: 'twopart', setup: "Why don't skeletons fight each other?", punchline: "They don't have the guts!" },
        { type: 'single', joke: "5/4 of people admit they're bad at fractions." },
        { type: 'twopart', setup: "What do you call a fake noodle?", punchline: "An impasta!" },
        { type: 'single', joke: "I used to be addicted to soap, but I'm clean now." },
        { type: 'twopart', setup: "Why couldn't the bicycle stand up by itself?", punchline: "It was two tired!" },
        { type: 'single', joke: "What's the best thing about Switzerland? I don't know, but the flag is a big plus." },
        { type: 'twopart', setup: "Why did the invisible man turn down the job offer?", punchline: "He couldn't see himself doing it!" },
        { type: 'single', joke: "I'm terrified of elevators, so I'm taking steps to avoid them." },
        { type: 'twopart', setup: "What did the grape do when it got stepped on?", punchline: "Nothing but let out a little wine!" },
        { type: 'single', joke: "I made a belt out of watches. It was a waist of time." },
        { type: 'twopart', setup: "Why did the golfer bring two pairs of pants?", punchline: "In case he got a hole in one!" },
        { type: 'single', joke: "I couldn't figure out why the baseball kept getting bigger. Then it hit me." },
        { type: 'twopart', setup: "What do you call a sleeping bull?", punchline: "A bulldozer!" },
        { type: 'single', joke: "Did you hear about the restaurant on the moon? Great food, no atmosphere." },
        { type: 'twopart', setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!" },
        { type: 'single', joke: "I used to be a baker, but I couldn't make enough dough." },
        { type: 'twopart', setup: "What did one wall say to the other?", punchline: "I'll meet you at the corner!" },
        { type: 'single', joke: "I don't play soccer because I enjoy the sport. I'm just doing it for kicks." },
        { type: 'twopart', setup: "Why did the tomato turn red?", punchline: "Because it saw the salad dressing!" },
        { type: 'single', joke: "I got fired from the calendar factory. All I did was take a day off." },
        { type: 'twopart', setup: "What's brown and sticky?", punchline: "A stick!" },
        { type: 'single', joke: "I used to be addicted to the hokey pokey, but I turned myself around." },
        { type: 'twopart', setup: "Why do seagulls fly over the sea?", punchline: "Because if they flew over the bay, they'd be bagels!" },
        { type: 'single', joke: "How does the moon cut his hair? Eclipse it!" },
        { type: 'twopart', setup: "What's the best way to watch a fly fishing tournament?", punchline: "Live stream!" },
        { type: 'single', joke: "I don't trust those trees. They seem kind of shady." },
        { type: 'twopart', setup: "Why did the Oreo go to the dentist?", punchline: "Because it lost its filling!" },
        { type: 'single', joke: "What does a house wear? Address!" },
        { type: 'twopart', setup: "Why are elevator jokes so classic?", punchline: "They work on many levels!" },
        { type: 'single', joke: "I've been trying to organize a hide and seek tournament, but it's really hard to find good players." },
        { type: 'twopart', setup: "What kind of shoes do ninjas wear?", punchline: "Sneakers!" },
        { type: 'single', joke: "Never date a tennis player. Love means nothing to them." },
        { type: 'twopart', setup: "Why did the kid throw his clock out the window?", punchline: "He wanted to see time fly!" },
        { type: 'single', joke: "Rest in peace, boiling water. You will be mist." },
        { type: 'twopart', setup: "What has ears but cannot hear?", punchline: "A cornfield!" },
        { type: 'single', joke: "I used to hate beard jokes, but then they grew on me." },
        { type: 'twopart', setup: "Why are pirates called pirates?", punchline: "Because they arrr!" },
        { type: 'single', joke: "My leaf blower doesn't work. It sucks!" },
        { type: 'twopart', setup: "What's red and bad for your teeth?", punchline: "A brick!" },
        { type: 'single', joke: "I went to a peanut factory last week. It was nuts!" },
        { type: 'twopart', setup: "Why did the duck go to rehab?", punchline: "Because he was a quack addict!" },
        { type: 'single', joke: "I told my son I was named after Thomas Jefferson. He said, 'But dad, your name is Brian.' I said, 'I know, but I was named AFTER him.'" },
        { type: 'twopart', setup: "What did the buffalo say when his son left for college?", punchline: "Bison!" },
        { type: 'single', joke: "Someone stole my Microsoft Office and they're gonna pay. You have my Word!" },
        { type: 'twopart', setup: "Why do bees hum?", punchline: "Because they don't know the words!" },
        { type: 'single', joke: "What do you call a sad strawberry? A blueberry!" },
        { type: 'twopart', setup: "Why don't skeletons ever go trick or treating?", punchline: "Because they have no body to go with!" },
        { type: 'single', joke: "I'm starting a company that sells used alarm clocks. It's about time!" },
        { type: 'twopart', setup: "What did one hat say to the other?", punchline: "You stay here, I'll go on ahead!" },
        { type: 'single', joke: "My wife told me to stop acting like a flamingo, so I had to put my foot down." },
        { type: 'twopart', setup: "Why couldn't the leopard play hide and seek?", punchline: "Because he was always spotted!" },
        { type: 'single', joke: "I used to work at a soft drink can crushing company. It was soda pressing." },
        { type: 'twopart', setup: "What happens to a frog's car when it breaks down?", punchline: "It gets toad away!" },
        { type: 'single', joke: "Why does Humpty Dumpty love autumn? Because Humpty Dumpty had a great fall!" },
        { type: 'twopart', setup: "What did the mountain climber name his son?", punchline: "Cliff!" },
        { type: 'single', joke: "I'm terrified of lifts. I'm taking steps to avoid them." },
        { type: 'twopart', setup: "Why did the computer get glasses?", punchline: "To improve its web sight!" },
        { type: 'single', joke: "What concert costs just 45 cents? 50 Cent featuring Nickelback!" },
        { type: 'twopart', setup: "Why are ghosts bad liars?", punchline: "Because you can see right through them!" },
        { type: 'single', joke: "I have an inferiority complex, but it's not a very good one." },
        { type: 'twopart', setup: "Why did the teddy bear say no to dessert?", punchline: "Because she was stuffed!" },
        { type: 'single', joke: "My wife is on a tropical fruit diet, the house is full of the stuff. It's enough to make a mango crazy!" },
        { type: 'twopart', setup: "What's the difference between a poorly dressed man on a tricycle and a well-dressed man on a bicycle?", punchline: "Attire!" },
        { type: 'single', joke: "How do celebrities stay cool? They have many fans!" },
        { type: 'twopart', setup: "Why did the frog take the bus to work?", punchline: "His car got toad away!" },
        { type: 'single', joke: "I was wondering why the ball was getting bigger. Then it hit me." },
        { type: 'twopart', setup: "What did the left eye say to the right eye?", punchline: "Between you and me, something smells!" },
        { type: 'single', joke: "My pet mouse 'Elvis' died last night. He was caught in a trap!" },
        { type: 'twopart', setup: "Why did the phone wear glasses?", punchline: "Because it lost all its contacts!" },
        { type: 'single', joke: "I couldn't believe the highway department called my dad a thief. But when I got home, all the signs were there." },
        { type: 'twopart', setup: "What do you call a belt made out of watches?", punchline: "A waist of time!" },
        { type: 'single', joke: "Dad, can you put my shoes on? No, I don't think they'll fit me!" },
        { type: 'twopart', setup: "What did the janitor say when he jumped out of the closet?", punchline: "Supplies!" },
        { type: 'single', joke: "Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!" },
        { type: 'twopart', setup: "What's the best way to watch a fly fishing tournament?", punchline: "Live stream!" },
        { type: 'single', joke: "Why did the stadium get hot after the game? All the fans left!" },
        { type: 'twopart', setup: "What do you call a fish with no eyes?", punchline: "Fsh!" },
        { type: 'single', joke: "Dear Math, grow up and solve your own problems!" },
        { type: 'twopart', setup: "What did the grape do when it got stepped on?", punchline: "Nothing, but it let out a little wine!" },
        { type: 'single', joke: "Why did the dad go to the bank? To get his quarterback!" },
        { type: 'twopart', setup: "What kind of music do planets like?", punchline: "Nep-tunes!" },
        { type: 'single', joke: "I used to hate facial hair, but then it grew on me!" },
        { type: 'twopart', setup: "What do you call someone with no body and no nose?", punchline: "Nobody knows!" },
        { type: 'single', joke: "Why don't eggs tell jokes? They'd crack each other up!" },
        { type: 'twopart', setup: "What do you call a dad who's fallen through the ice?", punchline: "A popsicle!" },
        { type: 'single', joke: "I'm reading a book about anti-gravity. It's impossible to put down!" },
        { type: 'twopart', setup: "What has four wheels and flies?", punchline: "A garbage truck!" },
        { type: 'single', joke: "Want to hear a joke about paper? Never mind, it's tearable!" },
        { type: 'twopart', setup: "What's the difference between a well-dressed man on a bicycle and a poorly dressed man on a tricycle?", punchline: "Attire!" },
        { type: 'single', joke: "I got fired from my job at the bank today. An old lady asked me to check her balance, so I pushed her over!" },
        { type: 'twopart', setup: "Why did the coffee file a police report?", punchline: "It got mugged!" },
        { type: 'single', joke: "What time did the man go to the dentist? Tooth-hurty!" },
        { type: 'twopart', setup: "What do you call a factory that makes okay products?", punchline: "A satisfactory!" },
        { type: 'single', joke: "I'm afraid for the calendar. Its days are numbered!" },
        { type: 'twopart', setup: "What's brown and sticky?", punchline: "A stick!" },
        { type: 'single', joke: "Why can't you hear a pterodactyl go to the bathroom? Because the 'P' is silent!" },
        { type: 'twopart', setup: "What did the buffalo say to his son when he dropped him off at school?", punchline: "Bison!" },
        { type: 'single', joke: "I used to be addicted to soap, but I'm clean now!" },
        { type: 'twopart', setup: "What do you call a bear caught in the rain?", punchline: "A drizzly bear!" },
        { type: 'single', joke: "How does a penguin build its house? Igloos it together!" },
        { type: 'twopart', setup: "What do you call a fake noodle?", punchline: "An impasta!" },
        { type: 'single', joke: "I don't trust stairs. They're always up to something!" },
        { type: 'twopart', setup: "What did the pirate say on his 80th birthday?", punchline: "Aye matey!" },
        { type: 'single', joke: "Why did the chicken go to the séance? To get to the other side!" },
        { type: 'twopart', setup: "What do you call a sleeping dinosaur?", punchline: "A dino-snore!" },
        { type: 'single', joke: "What do you call a cow with no legs? Ground beef!" },
        { type: 'twopart', setup: "What did one volcano say to the other?", punchline: "I lava you!" },
        { type: 'single', joke: "I'm on a seafood diet. I see food and I eat it!" },
        { type: 'twopart', setup: "What do you call a pile of kittens?", punchline: "A meow-tain!" },
        { type: 'single', joke: "Why did the math book look sad? Because it had too many problems!" },
        { type: 'twopart', setup: "What do you call cheese that isn't yours?", punchline: "Nacho cheese!" },
        { type: 'single', joke: "How do you make a tissue dance? You put a little boogie in it!" },
        { type: 'twopart', setup: "What do you call an apology written in dots and dashes?", punchline: "Re-morse code!" },
        { type: 'single', joke: "I stayed up all night wondering where the sun went. Then it dawned on me!" },
        { type: 'twopart', setup: "What do you call a monkey in a mine field?", punchline: "A ba-boom!" },
        { type: 'single', joke: "Why don't scientists trust atoms? Because they make up everything!" },
        { type: 'twopart', setup: "What lights up a soccer stadium?", punchline: "A soccer match!" },
        { type: 'single', joke: "I couldn't figure out why the baseball kept getting bigger. Then it hit me!" },
        { type: 'twopart', setup: "What do you call a bear with no teeth?", punchline: "A gummy bear!" },
        { type: 'single', joke: "What do you call a fake noodle? An impasta!" },
        { type: 'twopart', setup: "What did the fish say when it swam into a wall?", punchline: "Dam!" },
        { type: 'single', joke: "How do you organize a space party? You planet!" },
        { type: 'twopart', setup: "What do you call a snowman with a six pack?", punchline: "An abdominal snowman!" },
        { type: 'single', joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one!" },
        { type: 'twopart', setup: "What do you call a pig that does karate?", punchline: "A pork chop!" },
        { type: 'single', joke: "What's the best thing about Switzerland? I don't know, but the flag is a big plus!" },
        { type: 'twopart', setup: "What do you call a boomerang that won't come back?", punchline: "A stick!" },
        { type: 'single', joke: "Why don't skeletons fight each other? They don't have the guts!" },
        { type: 'twopart', setup: "What did one hat say to the other?", punchline: "You stay here, I'll go on ahead!" },
        { type: 'single', joke: "I used to play piano by ear, but now I use my hands!" },
        { type: 'twopart', setup: "What do you call a sleeping bull?", punchline: "A bulldozer!" },
        { type: 'single', joke: "What do you call a man with a rubber toe? Roberto!" },
        { type: 'twopart', setup: "What's orange and sounds like a parrot?", punchline: "A carrot!" },
        { type: 'single', joke: "Where do boats go when they're sick? To the dock!" },
        { type: 'twopart', setup: "What do you call a guy lying on your doorstep?", punchline: "Matt!" },
        { type: 'single', joke: "I'm reading a book on the history of glue. I just can't seem to put it down!" },
        { type: 'twopart', setup: "What do you call a dog that can do magic?", punchline: "A labracadabrador!" },
        { type: 'single', joke: "Why did the tomato turn red? Because it saw the salad dressing!" },
        { type: 'twopart', setup: "What do you call an alligator in a vest?", punchline: "An investigator!" },
        { type: 'single', joke: "I would avoid the sushi if I was you. It's a little fishy!" },
        { type: 'twopart', setup: "What do you call a nervous javelin thrower?", punchline: "Shakespeare!" },
        { type: 'single', joke: "Rest in peace, boiling water. You will be mist!" },
        { type: 'twopart', setup: "What do you call a computer floating in the ocean?", punchline: "A Dell rolling in the deep!" },
        { type: 'single', joke: "5/4 of people admit that they're bad with fractions!" },
        { type: 'twopart', setup: "What did the ocean say to the beach?", punchline: "Nothing, it just waved!" },
        { type: 'single', joke: "I was wondering why the frisbee was getting bigger. Then it hit me!" },
        { type: 'twopart', setup: "What do you call a group of killer whales playing instruments?", punchline: "An orca-stra!" },
        { type: 'single', joke: "Did you hear about the restaurant on the moon? Great food, no atmosphere!" },
        { type: 'twopart', setup: "What do you call a woman with one leg?", punchline: "Eileen!" },
        { type: 'single', joke: "I got fired from the calendar factory. All I did was take a day off!" },
        { type: 'twopart', setup: "What do you call a can opener that doesn't work?", punchline: "A can't opener!" },
        { type: 'single', joke: "My wife said I should do lunges to stay in shape. That would be a big step forward!" },
        { type: 'twopart', setup: "What do you call a belt made of watches?", punchline: "A waist of time!" },
        { type: 'single', joke: "What do you call a parade of rabbits hopping backwards? A receding hare-line!" },
        { type: 'twopart', setup: "What do you call a lazy kangaroo?", punchline: "A pouch potato!" },
        { type: 'single', joke: "I used to be a banker, but I lost interest!" },
        { type: 'twopart', setup: "What do you call a pony with a sore throat?", punchline: "A little hoarse!" },
        { type: 'single', joke: "Why did the bicycle fall over? Because it was two-tired!" },
        { type: 'twopart', setup: "What do you call a careful wolf?", punchline: "Aware wolf!" },
        { type: 'single', joke: "Did you hear about the circus fire? It was in tents!" },
        { type: 'twopart', setup: "What do you call a fish wearing a bowtie?", punchline: "So-fish-ticated!" },
        { type: 'single', joke: "I'm terrified of elevators, so I'm taking steps to avoid them!" },
        { type: 'single', joke: "Why don't scientists trust atoms? Because they make up everything!" },
        { type: 'twopart', setup: "What's the difference between a poorly dressed man on a tricycle and a well-dressed man on a bicycle?", punchline: "Attire!" },
        { type: 'single', joke: "How many tickles does it take to make an octopus laugh? Ten-tickles!" },
        { type: 'twopart', setup: "What do you call a bee that can't make up its mind?", punchline: "A maybe!" },
        { type: 'single', joke: "I only know 25 letters of the alphabet. I don't know y!" },
        { type: 'twopart', setup: "What did the left eye say to the right eye?", punchline: "Between us, something smells!" },
        { type: 'single', joke: "I'm reading a horror story in Braille. Something bad is going to happen, I can feel it!" },
        { type: 'twopart', setup: "What do you call a snake that works for the government?", punchline: "A civil serpent!" },
        { type: 'single', joke: "Did you hear about the kidnapping at school? It's fine, he woke up!" },
        { type: 'twopart', setup: "What do you call a group of disorganized cats?", punchline: "A cat-astrophe!" },
        { type: 'single', joke: "I used to hate facial hair, but then it grew on me!" },
        { type: 'twopart', setup: "What do you call a train carrying bubble gum?", punchline: "A chew-chew train!" },
        { type: 'single', joke: "The past, present, and future walked into a bar. It was tense!" },
        { type: 'twopart', setup: "What do you call a sheep with no legs?", punchline: "A cloud!" },
        { type: 'single', joke: "I'm friends with 25 letters of the alphabet. I don't know why!" },
        { type: 'twopart', setup: "What do you call a factory that sells passable products?", punchline: "A satisfactory!" },
        { type: 'single', joke: "A termite walks into a bar and asks, 'Is the bar tender here?'" },
        { type: 'twopart', setup: "What do you call a dad who's lost all his money?", punchline: "A broke-father!" },
        { type: 'single', joke: "I once got into a fight with a broken elevator. I took it to another level!" },
        { type: 'twopart', setup: "What do you call a knight who's afraid to fight?", punchline: "Sir Render!" },
        { type: 'single', joke: "I told my wife she was drawing her eyebrows too high. She looked surprised!" },
        { type: 'twopart', setup: "What do you call a row of rabbits hopping away?", punchline: "A receding hare line!" },
        { type: 'single', joke: "What's the best time to go to the dentist? Tooth-hurty!" },
        { type: 'twopart', setup: "What do you call a dinosaur that crashes his car?", punchline: "Tyrannosaurus Wrecks!" },
        { type: 'single', joke: "I'm so good at sleeping, I can do it with my eyes closed!" },
        { type: 'twopart', setup: "What do you call a cow that just had a baby?", punchline: "De-calf-inated!" },
        { type: 'single', joke: "What do you get when you cross a snowman and a vampire? Frostbite!" },
        { type: 'twopart', setup: "What do you call a fish with two knees?", punchline: "A two-knee fish!" },
        { type: 'single', joke: "Spring is here! I got so excited I wet my plants!" },
        { type: 'twopart', setup: "What do you call a bee that lives in America?", punchline: "A USB!" },
        { type: 'single', joke: "I used to work in a shoe recycling shop. It was sole destroying!" },
        { type: 'twopart', setup: "What do you call a woman who stands between two goal posts?", punchline: "Annette!" },
        { type: 'single', joke: "I don't play soccer because I enjoy the sport. I'm just doing it for kicks!" },
        { type: 'twopart', setup: "What do you call a Spanish man who's lost his car?", punchline: "Carlos!" },
        { type: 'single', joke: "Did you hear about the guy whose whole left side was cut off? He's all right now!" },
        { type: 'twopart', setup: "What do you call an Australian with good manners?", punchline: "A thank-you-saurus!" },
        { type: 'single', joke: "I used to be addicted to the hokey pokey, but I turned myself around!" },
        { type: 'twopart', setup: "What do you call a sad strawberry?", punchline: "A blueberry!" },
        { type: 'single', joke: "What's brown and sticky? A stick!" },
        { type: 'twopart', setup: "What do you call birds that stick together?", punchline: "Vel-crows!" },
        { type: 'single', joke: "Why did the scarecrow win an award? He was outstanding in his field!" },
        { type: 'twopart', setup: "What do you call a deer with no eyes and no legs?", punchline: "Still no idea!" },
        { type: 'single', joke: "I have a fear of speed bumps, but I'm slowly getting over it!" },
        { type: 'twopart', setup: "What do you call a line of men waiting to get haircuts?", punchline: "A barber-queue!" },
        { type: 'single', joke: "My wife told me to stop acting like a flamingo. So I had to put my foot down!" },
        { type: 'twopart', setup: "What do you call Santa's helpers?", punchline: "Subordinate clauses!" },
        { type: 'single', joke: "Justice is a dish best served cold. If it were served warm, it would be just water!" },
        { type: 'twopart', setup: "What do you call a man with a seagull on his head?", punchline: "Cliff!" },
        { type: 'single', joke: "A guy walks into a bar. Ouch!" },
        { type: 'twopart', setup: "What do you call a dinosaur with an extensive vocabulary?", punchline: "A thesaurus!" },
        { type: 'single', joke: "Want to hear a joke about construction? I'm still working on it!" },
        { type: 'twopart', setup: "What do you call a bear in the rain?", punchline: "A drizzly bear!" },
        { type: 'single', joke: "I'm afraid for the calendar. Its days are numbered!" },
        { type: 'twopart', setup: "What do you call a psychic little person who escaped from prison?", punchline: "A small medium at large!" },
        { type: 'single', joke: "Why do chicken coops only have two doors? Because if they had four, they'd be chicken sedans!" },
        { type: 'twopart', setup: "What do you call a priest that becomes a lawyer?", punchline: "A father in law!" },
        { type: 'single', joke: "I got a new pair of gloves today, but they're both lefts. On one hand, it's great, but on the other, it's just not right!" },
        { type: 'twopart', setup: "What do you call a happy cowboy?", punchline: "A jolly rancher!" },
        { type: 'single', joke: "Someone stole my mood ring. I don't know how I feel about that!" },
        { type: 'twopart', setup: "What do you call a parade of rabbits?", punchline: "A receding hare-line!" },
        { type: 'single', joke: "Two guys walk into a bar. The third one ducks!" },
        { type: 'twopart', setup: "What do you call a cold dog?", punchline: "A chili dog!" },
        { type: 'single', joke: "I could tell you a chemistry joke, but I know I wouldn't get a reaction!" },
        { type: 'twopart', setup: "What do you call a fly without wings?", punchline: "A walk!" },
        { type: 'single', joke: "I was going to tell a time-traveling joke, but you didn't like it!" },
        { type: 'twopart', setup: "What do you call a shoe made out of a banana?", punchline: "A slipper!" },
        { type: 'single', joke: "To the man who invented zero: Thanks for nothing!" },
        { type: 'twopart', setup: "What do you call a pig that knows karate?", punchline: "A pork chop!" },
        { type: 'single', joke: "I wouldn't buy anything with velcro. It's a total rip-off!" },
        { type: 'twopart', setup: "What do you call a belt with a watch on it?", punchline: "A waist of time!" },
        { type: 'single', joke: "I'm reading a book about teleportation. It's bound to take me places!" },
        { type: 'twopart', setup: "What do you call a sleeping pizza?", punchline: "Piez-zzza!" },
        { type: 'single', joke: "I had a dream I was a muffler. I woke up exhausted!" },
        { type: 'twopart', setup: "What do you call a magic dog?", punchline: "A labracadabrador!" },
        { type: 'single', joke: "Parallel lines have so much in common. It's a shame they'll never meet!" },
        { type: 'twopart', setup: "What do you call a flower that runs on electricity?", punchline: "A power plant!" },
        { type: 'single', joke: "I dreamed about drowning in an ocean made out of orange soda. It took me a while to figure out it was just a Fanta Sea!" },
        { type: 'twopart', setup: "What do you call a dancing sheep?", punchline: "A baa-llerina!" },
        { type: 'single', joke: "A book just fell on my head. I only have my shelf to blame!" },
        { type: 'twopart', setup: "What do you call a tired pea?", punchline: "A sleepy-pea!" },
        { type: 'single', joke: "I would tell you a joke about an elevator, but it's an up and down story!" },
        { type: 'twopart', setup: "What do you call cheese that's not yours?", punchline: "Nacho cheese!" },
        { type: 'single', joke: "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!" },
        { type: 'twopart', setup: "What do you call a man floating in the water?", punchline: "Bob!" },
        { type: 'single', joke: "When does a joke become a dad joke? When it becomes apparent!" },
        { type: 'twopart', setup: "What do you call a laughing motorcycle?", punchline: "A Yamahahaha!" },
        { type: 'single', joke: "Why do dads tell such bad jokes? Because they think they're apparent!" }
    ],
    science: [
        { type: 'twopart', setup: "Why can't you trust atoms?", punchline: "Because they make up literally everything!" },
        { type: 'single', joke: "I'm thinking about a career in chemistry. I think I have all the solutions!" },
        { type: 'twopart', setup: "What did the thermometer say to the graduated cylinder?", punchline: "You may have graduated, but I have more degrees!" },
        { type: 'single', joke: "Did you hear oxygen went on a date with potassium? It went OK!" },
        { type: 'twopart', setup: "Why do biologists look forward to casual Fridays?", punchline: "Because they're allowed to wear genes to work!" },
        { type: 'single', joke: "Einstein developed a theory about space, and it was about time too!" },
        { type: 'twopart', setup: "What's the fastest way to determine the sex of a chromosome?", punchline: "Pull down its genes!" },
        { type: 'single', joke: "Biology is the only science where multiplication is the same as division." },
        { type: 'twopart', setup: "Why did the physicist break up with the biologist?", punchline: "There was no chemistry!" },
        { type: 'single', joke: "If you're not part of the solution, you're part of the precipitate!" },
        { type: 'twopart', setup: "What do you call an educated tube?", punchline: "A graduated cylinder!" },
        { type: 'single', joke: "Never trust an atom. They make up everything!" },
        { type: 'twopart', setup: "Why did the bacteria cross the microscope?", punchline: "To get to the other slide!" },
        { type: 'single', joke: "A neutron walks into a bar and asks how much for a drink. The bartender replies, 'For you, no charge!'" },
        { type: 'twopart', setup: "What did the scientist say when he found 2 isotopes of helium?", punchline: "HeHe!" },
        { type: 'single', joke: "Organic chemistry is difficult. Those who study it have alkynes of trouble." },
        { type: 'twopart', setup: "Why are chemists excellent for solving problems?", punchline: "They have all the solutions!" },
        { type: 'single', joke: "I told a chemistry joke. There was no reaction." },
        { type: 'twopart', setup: "What did one DNA strand say to the other?", punchline: "Do these genes make me look fat?" },
        { type: 'single', joke: "The optimist sees the glass half full. The pessimist sees it half empty. The chemist sees it completely full, half in liquid state and half in gaseous, both of which are probably poisonous." },
        { type: 'twopart', setup: "Why do chemists like nitrates so much?", punchline: "They're cheaper than day rates!" },
        { type: 'single', joke: "A photon checks into a hotel and is asked if he needs any help with his luggage. He says, 'No, I'm traveling light.'" },
        { type: 'twopart', setup: "What did the male stamen say to the female pistil?", punchline: "I like your style!" },
        { type: 'single', joke: "Silver walks up to Gold in a bar and says, 'AU, get outta here!'" },
        { type: 'twopart', setup: "Why did the scientist install a knocker on his door?", punchline: "He wanted to win the No-bell prize!" },
        { type: 'single', joke: "Heisenberg was speeding down the highway. A cop pulls him over and says, 'Do you know how fast you were going?' He replies, 'No, but I know where I am!'" },
        { type: 'twopart', setup: "What do you call a tooth in a glass of water?", punchline: "A one molar solution!" },
        { type: 'single', joke: "Two chemists walk into a bar. The first says, 'I'll have some H2O.' The second says, 'I'll have some H2O too.' The second chemist dies." },
        { type: 'twopart', setup: "Why did the white bear dissolve in water?", punchline: "Because it was polar!" },
        { type: 'single', joke: "What weapon can you make from the elements potassium, nickel, and iron? A KNiFe!" },
        { type: 'twopart', setup: "What did the biologist wear to impress his date?", punchline: "Designer genes!" },
        { type: 'single', joke: "I would tell you a chemistry joke, but all the good ones argon." },
        { type: 'twopart', setup: "What's a pirate's favorite element?", punchline: "Gold? No, ARRRgon!" },
        { type: 'single', joke: "Entropy isn't what it used to be." },
        { type: 'twopart', setup: "Why did Carbon marry Hydrogen?", punchline: "They bonded well from the minute they met!" },
        { type: 'single', joke: "I'm reading a book about helium. I can't put it down!" },
        { type: 'twopart', setup: "What did the astronaut say when he crashed into the moon?", punchline: "I Apollo-gize!" },
        { type: 'single', joke: "Why does hamburger have lower energy than steak? Because it's in the ground state!" },
        { type: 'twopart', setup: "How does the moon cut his hair?", punchline: "Eclipse it!" },
        { type: 'single', joke: "The name's Bond. Ionic Bond. Taken, not shared." },
        { type: 'twopart', setup: "What did the cell say to his sister cell when she stepped on his toe?", punchline: "Mitosis!" },
        { type: 'single', joke: "A proton and a neutron are walking down the street. The proton says, 'Wait, I think I lost an electron!' The neutron says, 'Are you sure?' The proton replies, 'I'm positive!'" },
        { type: 'twopart', setup: "Why do quantum physicists make bad lovers?", punchline: "When they find the position, they can't find the momentum, and when they have the momentum, they can't find the position!" },
        { type: 'single', joke: "Schrödinger's cat walks into a bar. And doesn't." },
        { type: 'twopart', setup: "What did the DNA say to the other DNA?", punchline: "Do these genes make me look fat?" },
        { type: 'single', joke: "Sodium sodium sodium sodium sodium sodium sodium sodium Batman!" },
        { type: 'twopart', setup: "Why are chemists great at solving problems?", punchline: "They always have solutions!" },
        { type: 'single', joke: "I wish I was adenine so I could be paired with U." },
        { type: 'twopart', setup: "What do you do with a sick chemist?", punchline: "If you can't helium, and you can't curium, then you might as well barium!" },
        { type: 'single', joke: "Old chemists never die. They just stop reacting." },
        { type: 'twopart', setup: "Why can't you trust an atom?", punchline: "Because they make up everything!" },
        { type: 'single', joke: "What's a physicist's favorite food? Fission chips!" },
        { type: 'twopart', setup: "Why did the photon refuse to check a bag at the airport?", punchline: "Because it was traveling light!" },
        { type: 'single', joke: "What do you call a tooth in a glass of water? One molar solution!" },
        { type: 'twopart', setup: "Why did the scientist install a knocker on his door?", punchline: "To win the No-bell prize!" },
        { type: 'single', joke: "The name's Bond. Covalent Bond. Shared, not transferred!" },
        { type: 'twopart', setup: "What's the difference between a chemist and a plumber?", punchline: "Ask them to pronounce unionized!" },
        { type: 'single', joke: "Two atoms are walking down the street. One says, 'I think I lost an electron!' The other asks, 'Are you sure?' The first replies, 'Yes, I'm positive!'" },
        { type: 'twopart', setup: "Why do quantum physicists make bad lovers?", punchline: "Because when they find the position, they can't find the momentum!" },
        { type: 'single', joke: "What did the biologist wear on his first date? Designer genes!" },
        { type: 'twopart', setup: "Why did the bacteria fail the math test?", punchline: "Because multiplication was its division!" },
        { type: 'single', joke: "I'd make a joke about noble gases, but I wouldn't get a reaction." },
        { type: 'twopart', setup: "What did one ion say to another?", punchline: "I've got my ion you!" },
        { type: 'single', joke: "A chemistry professor posted a test on the door that read: 'If you're not part of the solution, you're part of the precipitate.'" },
        { type: 'twopart', setup: "Why are chemists so good at solving problems?", punchline: "Because they have all the solutions!" },
        { type: 'single', joke: "Want to hear a joke about potassium? K!" },
        { type: 'twopart', setup: "What did the chemist say when he found two isotopes of helium?", punchline: "HeHe!" },
        { type: 'single', joke: "If H2O is on the inside of a fire hydrant, what's on the outside? K9P!" },
        { type: 'twopart', setup: "What's the molecular formula for a banana?", punchline: "BaNa2!" },
        { type: 'single', joke: "Anyone know any jokes about Sodium? Na!" },
        { type: 'twopart', setup: "What do you call Iron blowing in the wind?", punchline: "Febreeze!" },
        { type: 'single', joke: "I'm reading a book about helium. It's so good I can't put it down!" },
        { type: 'twopart', setup: "What's a pirates favorite element?", punchline: "Gold? Silver? No, it's ARRRgon!" },
        { type: 'single', joke: "If you're not part of the solution, you're part of the precipitate." },
        { type: 'twopart', setup: "What do you get when you mix sulfur, tungsten, and silver?", punchline: "SWAG!" },
        { type: 'single', joke: "Are you made of Copper and Tellurium? Because you're CuTe!" },
        { type: 'twopart', setup: "What do you call an acid with an attitude?", punchline: "A-mean-o acid!" },
        { type: 'single', joke: "I would make another chemistry joke, but all the good ones Argon." },
        { type: 'twopart', setup: "What's the best formula for water?", punchline: "H-I-J-K-L-M-N-O!" },
        { type: 'single', joke: "Gold is the best element because it's AU-some!" },
        { type: 'twopart', setup: "What element is a girl's best friend?", punchline: "Carbon! (Diamonds!)" },
        { type: 'single', joke: "I have a new theory on inertia but it doesn't seem to be gaining momentum." },
        { type: 'twopart', setup: "Why did the scientist remove his doorbell?", punchline: "He wanted to win the No-bell prize!" },
        { type: 'single', joke: "My Physics teacher told me I had potential. Then he pushed me off the roof." },
        { type: 'twopart', setup: "What's the difference between a dog and a marine biologist?", punchline: "One wags its tail, the other tags a whale!" },
        { type: 'single', joke: "Biology: The only science where multiplication and division mean the same thing." },
        { type: 'twopart', setup: "Why did the germ cross the microscope?", punchline: "To get to the other slide!" },
        { type: 'single', joke: "What does DNA stand for? National Dyslexics Association!" },
        { type: 'twopart', setup: "What do you call a microbiologist who has traveled to every country?", punchline: "A man of many cultures!" },
        { type: 'single', joke: "A physicist, biologist, and chemist were going to the ocean for the first time. The physicist saw the ocean and was fascinated by the waves. He said he wanted to do research on the fluid dynamics. He ran into the ocean and drowned. The biologist wanted to study marine biology. He ran into the ocean and drowned. The chemist saw this, pulled out his lab book and wrote: 'Physicists and biologists are soluble in water.'" },
        { type: 'twopart', setup: "How do astronomers organize a party?", punchline: "They planet!" },
        { type: 'single', joke: "Helium walks into a bar and orders water. The bartender says, 'Sorry, we don't serve noble gases here.' Helium doesn't react." },
        { type: 'twopart', setup: "What's the difference between a seal and a sea lion?", punchline: "An ion!" },
        { type: 'single', joke: "Why are quantum mechanics so poor at sex? Because when they find the position, they can't find the momentum, and when they find the momentum, they can't find the position!" },
        { type: 'twopart', setup: "What do you call a bunch of iron atoms at a carnival?", punchline: "A ferrous wheel!" },
        { type: 'single', joke: "Pavlov is sitting at a pub enjoying a pint. The phone rings and he jumps up shouting, 'Oh! I forgot to feed the dog!'" },
        { type: 'twopart', setup: "Why did the electron leave the atom?", punchline: "Because it was negative!" },
        { type: 'single', joke: "What do you call a clown in jail? A silicon!" }
    ]
};

// ===================================
// Random Joke Generator Class
// ===================================
class JokeGenerator {
    constructor() {
        this.initializeElements();
        this.attachEventListeners();
        this.jokeCount = 0;
        this.currentJoke = null;
    }

    // Initialize DOM elements
    initializeElements() {
        this.categorySelect = document.getElementById('category');
        this.jokeDisplay = document.getElementById('jokeDisplay');
        this.jokeText = document.getElementById('jokeText');
        this.jokeParts = document.getElementById('jokeParts');
        this.setupText = document.getElementById('setupText');
        this.punchlineSection = document.getElementById('punchlineSection');
        this.punchlineText = document.getElementById('punchlineText');
        this.generateBtn = document.getElementById('generateBtn');
        this.revealBtn = document.getElementById('revealBtn');
        this.copyBtn = document.getElementById('copyBtn');
        this.jokeCounter = document.getElementById('jokeCounter');
        this.toast = document.getElementById('toast');
    }

    // Attach event listeners
    attachEventListeners() {
        this.generateBtn.addEventListener('click', () => this.generateJoke());
        this.revealBtn.addEventListener('click', () => this.revealPunchline());
        this.copyBtn.addEventListener('click', () => this.copyJoke());
        this.categorySelect.addEventListener('change', () => this.generateJoke());
    }

    // Get all jokes based on selected category
    getJokesByCategory(category) {
        if (category === 'all') {
            // Combine all jokes from all categories
            const allJokes = [];
            for (const cat in jokesDatabase) {
                allJokes.push(...jokesDatabase[cat]);
            }
            return allJokes;
        }
        return jokesDatabase[category] || [];
    }

    // Generate random joke
    generateJoke() {
        const category = this.categorySelect.value;
        const jokes = this.getJokesByCategory(category);

        if (jokes.length === 0) {
            this.showToast('⚠️ No jokes available for this category!');
            return;
        }

        // Get random joke
        const randomIndex = Math.floor(Math.random() * jokes.length);
        this.currentJoke = jokes[randomIndex];

        // Display joke based on type
        if (this.currentJoke.type === 'single') {
            this.displaySingleJoke(this.currentJoke.joke);
        } else if (this.currentJoke.type === 'twopart') {
            this.displayTwoPartJoke(this.currentJoke.setup, this.currentJoke.punchline);
        }

        // Increment counter
        this.jokeCount++;
        this.jokeCounter.textContent = this.jokeCount;

        // Add animation
        this.animateJokeDisplay();
    }

    // Display single-part joke
    displaySingleJoke(joke) {
        // Hide two-part sections
        this.jokeParts.style.display = 'none';
        this.revealBtn.style.display = 'none';

        // Show single joke display
        this.jokeDisplay.style.display = 'flex';
        this.jokeText.textContent = joke;

        // Change background color
        this.jokeDisplay.style.background = 'var(--color-blue-bg)';
        this.jokeDisplay.style.borderColor = 'var(--color-blue)';
    }

    // Display two-part joke (setup + punchline)
    displayTwoPartJoke(setup, punchline) {
        // Hide single joke display
        this.jokeDisplay.style.display = 'none';

        // Show two-part sections
        this.jokeParts.style.display = 'block';
        this.setupText.textContent = setup;
        this.punchlineText.textContent = punchline;

        // Hide punchline initially
        this.punchlineSection.style.display = 'none';

        // Show reveal button
        this.revealBtn.style.display = 'flex';
    }

    // Reveal punchline for two-part jokes
    revealPunchline() {
        this.punchlineSection.style.display = 'flex';
        this.revealBtn.style.display = 'none';

        // Add animation
        this.punchlineSection.style.animation = 'fadeIn 0.5s ease';
    }

    // Copy joke to clipboard
    async copyJoke() {
        let textToCopy = '';

        if (this.currentJoke) {
            if (this.currentJoke.type === 'single') {
                textToCopy = this.currentJoke.joke;
            } else if (this.currentJoke.type === 'twopart') {
                textToCopy = `${this.currentJoke.setup}\n\n${this.currentJoke.punchline}`;
            }
        } else {
            this.showToast('⚠️ Generate a joke first!');
            return;
        }

        try {
            await navigator.clipboard.writeText(textToCopy);
            this.showToast('✅ Joke copied to clipboard!');
        } catch (err) {
            this.showToast('❌ Failed to copy joke!');
        }
    }

    // Animate joke display
    animateJokeDisplay() {
        if (this.jokeDisplay.style.display !== 'none') {
            this.jokeDisplay.style.animation = 'none';
            setTimeout(() => {
                this.jokeDisplay.style.animation = 'fadeIn 0.5s ease';
            }, 10);
        } else {
            this.jokeParts.style.animation = 'none';
            setTimeout(() => {
                this.jokeParts.style.animation = 'fadeIn 0.5s ease';
            }, 10);
        }
    }

    // Show toast notification
    showToast(message) {
        const toastIcon = this.toast.querySelector('.toast-icon');
        const toastMessage = this.toast.querySelector('.toast-message');

        // Extract emoji and message
        const emoji = message.match(/^[^\w\s]+/)?.[0] || '✅';
        const text = message.replace(/^[^\w\s]+\s*/, '');

        toastIcon.textContent = emoji;
        toastMessage.textContent = text;

        this.toast.classList.add('show');

        setTimeout(() => {
            this.toast.classList.remove('show');
        }, 3000);
    }
}

// ===================================
// Add Fade-In Animation
// ===================================
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ===================================
// Initialize Application
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    new JokeGenerator();
});

// ===================================
// Keyboard Shortcuts
// ===================================
document.addEventListener('keydown', (e) => {
    // Space: Generate new joke
    if (e.code === 'Space' && e.target.tagName !== 'SELECT') {
        e.preventDefault();
        document.getElementById('generateBtn').click();
    }

    // Enter: Reveal punchline (if visible)
    if (e.key === 'Enter' && document.getElementById('revealBtn').style.display !== 'none') {
        e.preventDefault();
        document.getElementById('revealBtn').click();
    }

    // Ctrl/Cmd + C: Copy joke
    if ((e.ctrlKey || e.metaKey) && e.key === 'c' && e.shiftKey) {
        e.preventDefault();
        document.getElementById('copyBtn').click();
    }
});
