// List of fun facts about One Piece
const funFacts = [
    "Eiichiro Oda, the creator of One Piece, originally planned to finish the series in just five years!",
    "The 'One Piece' treasure is inspired by a real-life pirate treasure called the 'One Piece Treasure of Olivier Levasseur.'",
    "Luffy's gear designs are inspired by martial arts techniques and real-life science concepts.",
    "Zoro's character is loosely based on the French pirate François l'Olonnais, known for his swordsmanship.",
    "Sanji was originally going to be named 'Naruto' but was changed to avoid confusion with the now-famous ninja series.",
    "The Thousand Sunny, the Straw Hat Pirates' ship, was designed by Franky and built with Adam Wood, a legendary material.",
    "The One Piece world has over 800 named characters, making it one of the most character-rich series ever created.",
    "Gold Roger's real name is Gol D. Roger, which hints at the mysterious 'Will of D' in the series.",
    "The longest fight in One Piece is between Luffy and Katakuri, spanning a whopping 22 episodes in the anime!",
    "One Piece holds the Guinness World Record for the most copies published for the same comic book series by a single author."
    "Oda grew up reading about Goku’s adventures in the weekly Shonen Jump magazine, and has been vocal about his praise for the series. Its influence is evident throughout One Piece’s narrative."
];

// Function to get a random fun fact
function getFunFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    const fact = funFacts[randomIndex];
    document.getElementById('fact').textContent = fact;
}

// Event listener for the button
document.getElementById('fact-btn').addEventListener('click', getFunFact);
