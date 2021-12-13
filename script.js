const containerElement = document.querySelector(".container");
const btn_sort = document.querySelector(".btn-sort");
const words_list_element = document.querySelector(".words-list");

btn_sort.addEventListener("click", () => {
  const words = document.querySelector("textarea").value;
  const array_words = words.split(/[\n,]+/);
  const word_element = document.createElement("p");

  if (words) {
    for (i = 0; i < array_words.length; i++) {
      console.log(`${array_words[i].length} letters: ${array_words[i]}`);
    }
  } else {
    alert("The text field is empty !");
  }
});
