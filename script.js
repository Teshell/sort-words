const containerElement = document.querySelector(".container");
const btn_sort = document.querySelector(".btn-sort");
const words_list_element = document.querySelector(".words-list");

btn_sort.addEventListener("click", () => {
  const words = document.querySelector("textarea").value;
  const array_words = words.split(/[\n,]+/);

  const lengths = array_words.map(function (word) {
    return word.length;
  });

  const lengths_converted = [...new Set(lengths)];
  words_list_element.innerHTML = "";

  if (words) {
    lengths_converted.forEach((leng) => {
      const number_element = document.createElement("h2");

      number_element.innerHTML = `Words with ${leng} letters:`;

      words_list_element.appendChild(number_element);

      for (i = 0; i < array_words.length; i++) {
        if (leng === array_words[i].length) {
          const words_element = document.createElement("p");
          console.log(`${array_words[i]}`);
          words_element.innerHTML = `${array_words[i]}`;
          words_list_element.appendChild(words_element);
        }
      }
    });
  } else {
    alert("The text field is empty !");
  }
});
