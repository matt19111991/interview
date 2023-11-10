// Необходимо найти самое короткое слово в предложении

function findShort(sentence) {
  return sentence.split(' ').sort((a, b) => a.length - b.length)[0]
}

console.log('Shortest 1:', findShort('The Smallest word in sentence'));
console.log('Shortest 2:', findShort('Just test string'));
