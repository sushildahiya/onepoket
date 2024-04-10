const fs = require('fs');

// Function to count the number of words in a string
function countWords(text) {
    return text.split(" ").length;
}

// Read the contents of the file
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    const wordCount = countWords(data);
    console.log('Total word count:', wordCount);
});
