<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>One Piece Fun Facts</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      padding: 20px;
    }
    .fact-box {
      background: #ffe600;
      color: #333;
      border-radius: 10px;
      padding: 20px;
      margin: 20px auto;
      max-width: 600px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    button {
      background: #ff4500;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    }
    button:hover {
      background: #e03f00;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>One Piece Fun Facts</h1>
    <div class="fact-box" id="fact-box">
      Click the button to see a fun fact about One Piece!
    </div>
    <button onclick="generateFact()">Get Fun Fact</button>
  </div>

  <script>
    const funFacts = [
      "Luffy's birthday is May 5th, which is Children's Day in Japan!",
      "Eiichiro Oda, the creator of One Piece, started the series in 1997.",
      "The Thousand Sunny's figurehead is a lion, symbolizing courage.",
      "Zoro's dream is to become the world's greatest swordsman.",
      "Sanji's original name was going to be 'Naruto,' but it was changed to avoid confusion with the Naruto series.",
      "The 'D.' in Luffy's name stands for 'Will of D.', and its mystery remains a key plot point.",
      "One Piece holds the Guinness World Record for the most copies of a comic book series by a single author!",
      "Tony Tony Chopper's bounty is humorously low because the government sees him as just a pet."
    ];

    function generateFact() {
      const factBox = document.getElementById('fact-box');
      const randomIndex = Math.floor(Math.random() * funFacts.length);
      factBox.textContent = funFacts[randomIndex];
    }
  </script>
</body>
</html>
