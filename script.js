const q = console.log;

const colorTypes = {
  bug: "brown",
  normal: "grey",
  grass: "greenyellow",
  fire: "orangered",
  water: "cyan",
  poison: "blueviolet",
  fighting: "cadetblue",
  fairy: "aquamarine",
  electric: "bisque",
  ice: "turquoise",
  dragon: "red",
  psychic: "yellow",
  rock: "silver",
  ghost: "darkslateblue",
};

// const types = Object.keys(colorTypes);
// q(types);

const data = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

for (let i = 1; i <= 150; i++) {
  const newDiv = document.createElement("div");
  newDiv.id = `${i.toString().padStart(3, "0")}`;
  newDiv.classList.add("card");
  newDiv.innerHTML = ` <div class="imgContainer">
        <img id="img${i}" class="absolute"
            src=""
            alt="">
        <div class="backCircle absolute"></div>
    </div>
    <div id="id${i}" class="id"></div>
    <div id="name${i}" class="name"></div>
    <div id="type${i}" class="type">Type: </div>`;
  document.getElementById("main").appendChild(newDiv);
}

// async function getDetails() {
//   const response = await fetch("https://pokeapi.co/api/v2/pokemon/1", {
//     // headers: {
//     //   Accept: "text/plain",
//     // },
//   });
//   // let data = await response.text();
//   response.json().then(function (result) {
//     q(result);
//   });
// }

// getDetails();

async function getData() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0",
    {
      // headers: {
      //   Accept: "text/plain",
      // },
    }
  );
  // let data = await response.text();
  response.json().then(function (result) {
    result.results.forEach((element, index) => {
      //////////////////id/////////////////////////
      // q((index + 1).toString().padStart(3, "0"));
      //////////////////name/////////////////////////
      // q(element.name);
      //////////////////////////////////////////
      // q(element.url);
      setData(
        element.url,
        index + 1,
        element.name,
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${
          index + 1
        }.png`

        // `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        //   index + 1
        // }.png`
      );
      //////////////imgUrl////////////////////////////
      // q(
      //   `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      //     index + 1
      //   }.png`
      // );
      //////////////////////////////////////////
    });
  });
}

async function setData(url, id, name, imgUrl) {
  const response = await fetch(`${url}`);
  response.json().then(function (result) {
    // data[id - 1].type = result.types[0].type.name;
    document.getElementById(
      `type${id}`
    ).innerText = `Type: ${result.types[0].type.name}`;
    ///set color///
    document.getElementById(`id${id}`).innerText = `#${id
      .toString()
      .padStart(3, "0")}`;
    // data[id - 1].id = id.toString().padStart(3, "0");
    document.getElementById(`name${id}`).innerText = `${name}`;
    // data[id - 1].name = name;
    document.getElementById(`img${id}`).src = `${imgUrl}`;
    // data[id - 1].imgUrl = imgUrl;

    document.getElementById(
      `${id.toString().padStart(3, "0")}`
    ).style = `background-color: ${colorTypes[`${result.types[0].type.name}`]}`;
  });
}

getData();

// getData().then(function () {
//   data.forEach((element) => {
//     q(element);
//     const newDiv = document.createElement("div");
//     newDiv.classList.add("card");
//     newDiv.innerHTML = ` <div class="imgContainer">
//         <img class="absolute"
//             src="${element.imgUrl}"
//             alt="">
//         <div class="backCircle absolute"></div>
//     </div>
//     <div class="id">${element.id}</div>
//     <div class="name">${element.name}</div>
//     <div class="type">Type: ${element.type}</div>`;
//     document.getElementById("main").appendChild(newDiv);
//   });
// });

// async function load() {
//   let myPromise = new Promise(function (resolve, reject) {
//     resolve(data);
//   });

//   q(await myPromise);

//   // await getData().then(function () {
//   //   data.forEach((element) => {
//   //     q(element);
//   //   });
//   // });
// }

// load();
