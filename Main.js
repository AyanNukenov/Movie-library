const BD = data;
const MOVIES_DIV = document.querySelector(".movies");
const INPUT_SEARCH = document.querySelector(".search_title");
const SELECT_SEARCH = document.querySelector(".search_genre");

for (let i = 0; i < BD.movies.length; i++) {
  const image = document.createElement("img");
  image.setAttribute("src", data.movies[i].posterUrl);
  image.setAttribute("alt", "films");
  image.setAttribute("class", "poster");

  MOVIES_DIV.appendChild(image);
}

for (let i = 0; i < BD.genres.length; i++) {
  const option = document.createElement("option");
  option.setAttribute("value", BD.genres[i]);
  option.innerHTML = BD.genres[i];

  SELECT_SEARCH.appendChild(option);
}

INPUT_SEARCH.addEventListener("input", function (event) {
  console.log(event.target.value);
  for (let i = 0; i < BD.movies.length; i++) {
    if (BD.movies[i].title === event.target.value) {
      const image = document.createElement("img");
      image.setAttribute("src", data.movies[i].posterUrl);
      image.setAttribute("alt", "films");
      image.setAttribute("class", "poster");

      MOVIES_DIV.innerHTML = "";
      MOVIES_DIV.appendChild(image);
    }
  }
});

//надо разобраться с выбором жанров, не работает
SELECT_SEARCH.addEventListener("select", function (event) {
  console.log(option);
  for (let i = 0; i < BD.genres; i++) {
    if (BD.genres[i] === option) {
      const image = document.createElement("img");
      image.setAttribute("src", data.movies[i].posterUrl);
      image.setAttribute("alt", "films");
      image.setAttribute("class", "poster");

      MOVIES_DIV.innerHTML = "";
      MOVIES_DIV.appendChild(image);
    }
  }
});
