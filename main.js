// poem by Friedrich Nietzsche, From High Mountains, Beyond Good and Evil — (1886)
//images by The Art Institute of Chicago

document.addEventListener('DOMContentLoaded', () => {
    populateGridRandomlyEnhanced();
});

const poems = [
`O noon of life! O time to celebrate!
O summer garden!
Restless happiness in standing, watching and waiting: —
I await friends, ready day and night
Where are you friends? Come! It's time! It's time!`,

`In the heights my table was set for you: —
<a href="" target="_blank">Who lives so close to the stars</a>
To the grey yonder of the abyss?
My realm—what realm stretches further?
And my honey—who has tasted it? .....`,

`— There you are, friends!— Alas, but I am not
The one you wanted?
You <a href="" target="_blank">hesitate</a>, amazed—oh, you are quite sullen!
I—am no longer the same? Hands, face, gait have changed?
And what I am, to you friends—I am not?`,

`Am I another? A stranger to myself?
Sprung from myself?
A wrestler, who too often subdued himself?
Too often resisted his own strength,
Wounded and stopped by his own victory?`,

`I sought where the most biting wind blows?
I learned to live
Where no one lives, in desolate <a href="" target="_blank">polar zones</a>,
Unlearned man and god, curse and prayer?
Become a ghost who crosses <a href="" target="_blank">glaciers</a>?`,

`<a href="" target="_blank">— My old friends! Now how pale you look!
Full of love and fear!
No, leave! Do not be angry! You—cannot live here:
Here among this most remote realm of ice and rock—
Here one has to be a hunter and chamois-like.</a>`,

`I've become a <a href="" target="_blank">wicked hunter!</a>— Look how much
My bow is bent!
The strongest was he who drew his bow like this— —:
But now alas! No arrow is dangerous
As that arrow,—away from here! For your own good! .....`,

`You turn away?— O heart, you have borne enough,
Your hope stayed strong:
<a href="" target="_blank">Keep your door open to new friends!
Let the old go! Let the memories go!
Once you were young, now—you are younger!</a>`,

`What once tied us together, one hope's bond —
Who still reads the signs
Love once inscribed on it, the faded ones?
I compare it to parchment that the hand
Is afraid to grasp,—like parchment that is discolored, burnt.`,

`No longer friends, they are—what should I call them?—
Nothing but ghosts of friends!
That knock at my heart and window nightly,
That look at me and say: "were we once friends?" —
— O withered word, once fragrant as the rose!`,

`O longing of youth that misunderstood itself!
Those I longed for,
Those I deemed changed into my kin,
That they have aged has driven them away:
Only he who changes remains akin to me.`,

`<a href="" target="_blank">O noon of life! Second time of youth!
O summer garden!
Restless happiness in standing, watching and waiting!
I await friends, ready day and night,
New friends! Come! It's time! It's time!</a>`,

`This song is over—the sweet cry of longing
Died in my mouth—
A sorceror did it, the friend at the right time,
The friend of noon—no! do not ask who he is—
At noon was the time one became two ...`,

`Now we celebrate together, certain of victory,
The feast of feasts:
Friend Zarathustra has come, the guest of guests!
Now the world laughs, the dread curtain is rent,
The wedding has come for light and darkness .....`,

``,
];

const specialLinks = [
    `<a href="#" class="special-link"></a>`,
    `<a href="#" class="special-link"></a>`,
    `<a href="#" class="special-link"></a>`,
    `<a href="#" class="special-link"></a>`,
    `<a href="#" class="special-link"></a>`,
    `<a href="#" class="special-link"></a>`,
    `<a href="#" class="special-link"></a>`,
    `<a href="#" class="special-link"></a>`,
    `<a href="#" class="special-link"></a>`,
];

function populateGridRandomlyEnhanced() {
    const gridContainer = document.querySelector('.gridContainer');
    gridContainer.innerHTML = ''; // Clear existing content

    const images = Array.from({length: 8}, (_, i) => `images/${i + 1}.png`);
    let totalContent = [...poems, ...images, ...specialLinks];

    // Define total number of divs (content + empty)
    const totalDivs = 60; // Example: 30 total divs

    // Calculate the number of empty divs needed
    const emptyDivCount = totalDivs - totalContent.length;

    // Add placeholders for empty divs
    for (let i = 0; i < emptyDivCount; i++) {
        totalContent.push('empty'); // Use 'empty' as a placeholder
    }

    // Shuffle the combined content including empty div placeholders
    shuffleArray(totalContent);

    // Create and append content to the grid, replacing 'empty' placeholders with actual empty divs
    totalContent.forEach(content => {
        if (content === 'empty') {
            const div = document.createElement('div');
            div.style.height = '600px'; // Match your CSS for other divs
            gridContainer.appendChild(div);
        } else {
            const div = createContentDiv(content);
            gridContainer.appendChild(div);
        }
    });
}

function createContentDiv(content) {
    const div = document.createElement('div');
    div.classList.add('grid-item'); // Assuming you have or will create CSS for this class
    div.style.height = '600px'; // Adjust as per your CSS

    if (content.includes('images/')) {
        const img = document.createElement('img');
        img.src = content;
        img.alt = "Image";
        div.appendChild(img);
    } else if (content.includes('special-link')) {
        div.innerHTML = content; // Assuming safe content
    } else {
        // Process poem content
        const p = document.createElement('p');
        const lines = content.split('\n');
        const processedLines = lines.map(line => {
            // Decide to add 1-4 <br> based on chance
            const numberOfBreaks = Math.floor(Math.random() * 4) + 1;
            const breaks = Array(numberOfBreaks).fill('<br>').join('');
            // Randomly decide the alignment
            const alignmentClass = Math.random() > 0.5 ? 'line-left' : 'line-right';
            // Return line wrapped with span for alignment and followed by breaks
            return `<span class="${alignmentClass}">${line}</span>${breaks}`;
        });

        p.innerHTML = processedLines.join('');
        // Random margin-top to ensure it doesn't exceed the bottom
        const estimatedPoemHeight = 300; // Adjusted estimated height
        const maxMarginTop = (600 - estimatedPoemHeight) - 100; // Further reduced max margin top
        const minStartPosition = 50; // Ensuring a minimum start position
        const randomMarginTop = Math.max(minStartPosition, Math.floor(Math.random() * (maxMarginTop + 1)));
        p.style.marginTop = `${randomMarginTop}px`;

        div.appendChild(p);
    }

    return div;
}

// Remember to define CSS for .line-left and .line-right classes


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}