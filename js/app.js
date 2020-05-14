const key = config.key;
const value = document.querySelector("#index-input");
const form = document.querySelector("form");
const errorDiv = document.querySelector(".error-message");
const firstPage = document.querySelector("#first-page");
const secondPage = document.querySelector("#second-page");
const listContainer = document.querySelector(".list-container");
const coffee = document.querySelector("#coffee");
const bubbleTea = document.querySelector("#bubble-tea");
const smoothie = document.querySelector("#smoothie");
const juice = document.querySelector("#juice");
const loadingDiv = document.querySelector("#loading");
let ll = "40.730610, -73.935242";
// let ll;

// prompt the user to get current location
// const getLL = function (e) {
//   ll = e.coords.latitude + "," + e.coords.longitude;
//   console.log(ll);
//   localStorage.setItem("ll", ll);
//   console.log(ll);
//   return ll;
// };

// const error = function (err) {
//   switch (err.code) {
//     case err.PERMISSION_DENIED:
//       alert("Location request denied");
//       break;
//     case err.TIMEOUT:
//       alert("Request timed out");
//       break;
//     case err.POSITION_UNAVAILABLE:
//       alert("Location service not available");
//       break;
//     default:
//       alert("An unknown error occurred");
//       break;
//   }
// };

// window.onload = () => {
//   if (localStorage.ll || this.ll) {
//     loadingDiv.remove();
//   } else {
//     navigator.geolocation.getCurrentPosition(getLL, error);
//     loadingDiv.remove();
//   }
// };

//  find businesses nearby
const findPlaces = async keyword => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${ll}&radius=1500&type=cafe&keyword=${keyword}&key=${key}`;
    const response = await axios.get(url);
    const data = response.data.results;
    data.forEach(item => {
      getDetails(item.place_id);
    });
  } catch (err) {
    console.log(err);
  }
};

// findPlaces("coffee");

//get places details
const getDetails = async placeId => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,place_id,rating,review,types,vicinity,price_level,photo&key=${key}`;
    const response = await axios.get(url);
    displayBusinessInfo(response.data.result);
  } catch (err) {
    console.log(err);
  }
};

// display business details to list.html
const displayBusinessInfo = item => {
  console.log(item);
  let price;
  switch (item.price_level) {
    case item.price_level === 1:
      price = "$";
      break;
    case item.price_level === 2:
      price = "$$";
      break;
    case item.price_level === 3:
      price = "$$$";
      break;
    case item.price_level === 4:
      price = "$$$$";
      break;
    case item.price_level === 5:
      price = "$$$$$";
      break;
    case item.price_level > 5:
      price = "too expensive";
      break;
    default:
      price = "$";
      break;
  }
  const listDiv = document.createElement("div");
  listDiv.className = "list-wrapper";
  listDiv.innerHTML = `
    <img class="venue-img" src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${item.photos[0].photo_reference}&key=${key}"/>
    <div class="content-wrapper">
    <h4 class="venue-name">${item.name}</h4>
    <p class="venue-type"><em>${item.types[0]}/${item.types[1]}</em></p>
    <p class="venue-price">price level: ${price}</p>
    <p class="venue-rating">rating: ${item.rating}</p>
    <p class="venue-location">${item.vicinity}</p>
    </div>
    `;
  listContainer.append(listDiv);
};

// add event handler to each image on front page
coffee.addEventListener("click", e => {
  e.preventDefault();
  findPlaces("coffee");
  firstPage.style.display = "none";
  secondPage.style.display = "block";
});
bubbleTea.addEventListener("click", e => {
  e.preventDefault();
  findPlaces("bubble tea");
});
smoothie.addEventListener("click", e => {
  e.preventDefault();
  findPlaces("smoothies");
});
juice.addEventListener("click", e => {
  e.preventDefault();
  findPlaces("juices");
});

form.addEventListener("submit", e => {
  e.preventDefault();
  loadingDiv.style.display = "block";
  firstPage.style.display = "none";
  secondPage.style.display = "block";
  loadingDiv.style.display = "none";
  removeLastPlace();
  findPlaces(value);
});

const removeLastPlace = () => {
  while (listContainer.lastChild) {
    listContainer.removeChild(listContainer.lastChild);
  }
};
