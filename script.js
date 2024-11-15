const containers = document.querySelectorAll(".card_container");
const again = document.querySelector("button");
const html  = document.querySelector("html");
// html.onoffline = html.innerHTML= "";

let open_cards_count = 0;
let count_to_win = 0;
let temp = null;
const array = [
  "cyberpunk.jpeg",
  "cyberpunk.jpeg",
  "gtaSA.avif",
  "gtaSA.avif",
  "point_blank.jpg",
  "point_blank.jpg",
  "pubg.jpeg",
  "pubg.jpeg",
  "rdr2.jpeg",
  "rdr2.jpeg",
  "skyrim.jpeg",
  "skyrim.jpeg",
  "witcher.jpeg",
  "witcher.jpeg",
  "wot.jpeg",
  "wot.jpeg",
];
let array_copy = [...array];
shuffle(array_copy);
again.addEventListener("click", () => {
  array_copy = [...array];
  shuffle(array_copy);
  open_cards_count = 0;
  count_to_win = 0;
  temp = null;
  containers.forEach((container) => {
    // container.innerHTML = "";
    const array_element = array_copy.pop();
    container.firstElementChild.style.display = "block";
    container.lastElementChild.innerHTML = `<img src="./imgs/${array_element}" value=${array_element}>`;
    container.firstElementChild.style.transform = "rotateY(0deg)";
    container.lastElementChild.style.transform = "rotateY(90deg)";
  });
  shuffle(array_copy);
});
containers.forEach((container) => {
  const array_element = array_copy.pop();
  container.lastElementChild.innerHTML = `<img src="./imgs/${array_element}" value=${array_element}>`;
  container.addEventListener("click", function () {
    if (this.querySelectorAll("div").length < 2 || this === temp) {
      alert("Please select another card");
      return;
    }
    console.log(open_cards_count);

    open_cards_count++;

    if (open_cards_count === 1) {
      temp = this;
      this.firstElementChild.style.transform = "rotateY(90deg)";
      this.lastElementChild.style.transform = "rotateY(0deg)";
      console.log(this);
    } else if (open_cards_count === 2) {
      this.firstElementChild.style.transform = "rotateY(90deg)";
      this.lastElementChild.style.transform = "rotateY(0deg)";
      console.log(this.querySelector("img").getAttribute("value"));
      console.log(temp.querySelector("img").getAttribute("value"));
      console.log(
        this.lastElementChild.querySelector("img").getAttribute("value") ==
          temp.lastElementChild.querySelector("img").getAttribute("value")
      );

      if (
        this.lastElementChild.querySelector("img").getAttribute("value") !==
        temp.lastElementChild.querySelector("img").getAttribute("value")
      ) {
        setTimeout(() => {
          alert("Not a match");
          temp.firstElementChild.style.transform = "rotateY(0deg)";
          temp.lastElementChild.style.transform = "rotateY(90deg)";
          this.firstElementChild.style.transform = "rotateY(0deg)";
          this.lastElementChild.style.transform = "rotateY(90deg)";
          temp = null;
        }, 500);
      } else {
        setTimeout(() => {
          count_to_win++;
          console.log(count_to_win);
          alert("Match");
          temp.firstElementChild.style.display = "none";
          this.firstElementChild.style.display = "none";
          if (count_to_win === 8) {
            alert("You won!");
          }
        }, 500);
      }
      open_cards_count = 0;
    }
  });
});
function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}
