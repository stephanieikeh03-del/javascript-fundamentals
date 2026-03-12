let words = ["boy", "school", "book", "dog", "keyboard"];

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  if (word.length > 4) {
    console.log(word.toUpperCase());
  } else if (word.length < 4) {
    console.log(word.toLowerCase());
  } else {
    console.log(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }
}
