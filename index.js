// index.js

const fs = require('fs');

function generateRandomWordList(words, length) {
  const randomWordList = [];
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    randomWordList.push(words[randomIndex]);
  }
  return randomWordList;
}

fs.readFile('words.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  const words = JSON.parse(data);
  const randomWordList = generateRandomWordList(words, 5);
  console.log('Random word list:', randomWordList);
});
