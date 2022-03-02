// API KEY
const API_KEY = `f2614538ae7fd8a93e0559ef291acb97`;

// DEMO
const url2 = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=${API_KEY}&units=metric`;
fetch(url2)
  .then((res) => res.json())
  .then((data) => console.log(data));

const searchTemp = () => {
  // INPUT FIELD
  const inputField = document.getElementById("inputField").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputField}&appid=${API_KEY}&units=metric`;
  //   console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemp(data));
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

// const steAtribute = (id, attribute) => {
//   document.getElementById(id).setAttribute(attribute);
// };

const displayTemp = (data) => {
  setInnerText("cityName", data.name);
  setInnerText("temperature", data.main.temp);
  setInnerText("condition", data.weather[0].main);

  const imgUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  console.log(imgUrl);

  const imgIcon = document.getElementById("icon");
  imgIcon.setAttribute("src", imgUrl);
};
