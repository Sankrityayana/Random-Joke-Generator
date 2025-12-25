// ===================================
// Jokes Database
// ===================================
const jokesDatabase = {
    programming: [
        {
            type: 'single',
            joke: "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
            type: 'twopart',
            setup: "Why do Java developers wear glasses?",
            punchline: "Because they don't C#!"
        },
        {
            type: 'single',
            joke: "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'"
        },
        {
            type: 'twopart',
            setup: "How many programmers does it take to change a light bulb?",
            punchline: "None. It's a hardware problem!"
        },
        {
            type: 'single',
            joke: "There are only 10 types of people in the world: those who understand binary and those who don't."
        },
        {
            type: 'twopart',
            setup: "Why did the programmer quit his job?",
            punchline: "Because he didn't get arrays!"
        },
        {
            type: 'single',
            joke: "Programming is 10% writing code and 90% understanding why it doesn't work."
        },
        {
            type: 'twopart',
            setup: "What's a programmer's favorite hangout place?",
            punchline: "Foo Bar!"
        }
    ],
    general: [
        {
            type: 'twopart',
            setup: "Why don't scientists trust atoms?",
            punchline: "Because they make up everything!"
        },
        {
            type: 'single',
            joke: "I told my wife she was drawing her eyebrows too high. She looked surprised."
        },
        {
            type: 'twopart',
            setup: "Why did the scarecrow win an award?",
            punchline: "Because he was outstanding in his field!"
        },
        {
            type: 'single',
            joke: "Parallel lines have so much in common. It's a shame they'll never meet."
        },
        {
            type: 'twopart',
            setup: "What do you call a fake noodle?",
            punchline: "An impasta!"
        },
        {
            type: 'single',
            joke: "I'm reading a book about anti-gravity. It's impossible to put down!"
        },
        {
            type: 'twopart',
            setup: "Why don't eggs tell jokes?",
            punchline: "They'd crack each other up!"
        },
        {
            type: 'single',
            joke: "I used to be addicted to soap, but I'm clean now."
        }
    ],
    puns: [
        {
            type: 'single',
            joke: "I'm friends with 25 letters of the alphabet. I don't know Y."
        },
        {
            type: 'twopart',
            setup: "What do you call a bear with no teeth?",
            punchline: "A gummy bear!"
        },
        {
            type: 'single',
            joke: "Time flies like an arrow. Fruit flies like a banana."
        },
        {
            type: 'twopart',
            setup: "What do you call a dinosaur that crashes his car?",
            punchline: "Tyrannosaurus Wrecks!"
        },
        {
            type: 'single',
            joke: "I used to hate facial hair, but then it grew on me."
        },
        {
            type: 'twopart',
            setup: "What do you call a fish wearing a bowtie?",
            punchline: "Sofishticated!"
        },
        {
            type: 'single',
            joke: "I once got into a fight with a broken elevator. It let me down on so many levels."
        }
    ],
    dad: [
        {
            type: 'twopart',
            setup: "I'm afraid for the calendar.",
            punchline: "Its days are numbered!"
        },
        {
            type: 'single',
            joke: "I only know 25 letters of the alphabet. I don't know y."
        },
        {
            type: 'twopart',
            setup: "What did the ocean say to the beach?",
            punchline: "Nothing, it just waved!"
        },
        {
            type: 'single',
            joke: "Why did the math book look so sad? Because it had too many problems."
        },
        {
            type: 'twopart',
            setup: "How do you organize a space party?",
            punchline: "You planet!"
        },
        {
            type: 'single',
            joke: "I would avoid the sushi if I was you. It's a little fishy."
        },
        {
            type: 'twopart',
            setup: "What time did the man go to the dentist?",
            punchline: "Tooth hurt-y!"
        },
        {
            type: 'single',
            joke: "Did you hear about the kidnapping at school? It's okay, he woke up."
        }
    ],
    science: [
        {
            type: 'twopart',
            setup: "Why can't you trust atoms?",
            punchline: "Because they make up literally everything!"
        },
        {
            type: 'single',
            joke: "I'm thinking about a career in chemistry. I think I have all the solutions!"
        },
        {
            type: 'twopart',
            setup: "What did the thermometer say to the graduated cylinder?",
            punchline: "You may have graduated, but I have more degrees!"
        },
        {
            type: 'single',
            joke: "Did you hear oxygen went on a date with potassium? It went OK!"
        },
        {
            type: 'twopart',
            setup: "Why do biologists look forward to casual Fridays?",
            punchline: "Because they're allowed to wear genes to work!"
        },
        {
            type: 'single',
            joke: "Einstein developed a theory about space, and it was about time too!"
        },
        {
            type: 'twopart',
            setup: "What's the fastest way to determine the sex of a chromosome?",
            punchline: "Pull down its genes!"
        },
        {
            type: 'single',
            joke: "Biology is the only science where multiplication is the same as division."
        }
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
