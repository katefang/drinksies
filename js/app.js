const key = config.key;
const firstValue = document.querySelector("#first-input").value;
const secondValue = document.querySelector("#second-input").value;
const firstForm = document.querySelector("#first-form");
const secondForm = document.querySelector("#second-form");
const appName = document.querySelector(".app-name");
const errorDiv = document.querySelector(".error-message");
const firstPage = document.querySelector("#first-page");
const secondPage = document.querySelector("#second-page");
const listContainer = document.querySelector(".list-container");
const coffee = document.querySelector("#coffee");
const bubbleTea = document.querySelector("#bubble-tea");
const smoothie = document.querySelector("#smoothie");
const juice = document.querySelector("#juice");
const loadingDiv = document.querySelector("#loading");
// let ll = "40.7590, -73.9845";

// prompt the user to get current location
function getLL(e) {
  let ll = e.coords.latitude + "," + e.coords.longitude;
  localStorage.setItem("ll", ll);
  console.log(ll);
  console.log(localStorage.ll);
  if (localStorage.ll) {
    loadingDiv.remove();
  }
  return ll;
}

const error = function (err) {
  switch (err.code) {
    case err.PERMISSION_DENIED:
      alert("Location request denied");
      break;
    case err.TIMEOUT:
      alert("Request timed out");
      break;
    case err.POSITION_UNAVAILABLE:
      alert("Location service not available");
      break;
    default:
      alert("An unknown error occurred");
      break;
  }
};

if (!localStorage.ll) {
  loadingDiv.style.display = "block";
  navigator.geolocation.getCurrentPosition(getLL, error);
}

//  find businesses nearby
const findPlaces = async keyword => {
  try {
    let ll = localStorage.ll;
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

//get places details
const getDetails = async placeId => {
  try {
    const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,place_id,rating,review,types,formatted_phone_number,opening_hours,vicinity,price_level,photo&key=${key}`;
    var response = await axios.get(url);
    if (response) {
      loadingDiv.remove();
    }
    displaySecondPage(response.data.result);
  } catch (err) {
    console.log(err);
  }
};

// display business details to list.html
const displaySecondPage = item => {
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
      price = "too expensive for you";
      break;
    default:
      price = "$";
      break;
  }
  const listDiv = document.createElement("div");
  listDiv.className = "list-wrapper";
  listDiv.innerHTML = `
    <img class="venue-img" src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${item.photos[0].photo_reference}&key=${key}"/>
    <div class="second-content-wrapper">
    <h4 class="venue-name">${item.name}</h4>
    <p><em>${item.types[0]}/${item.types[1]}</em></p>
    <p>price level: ${price}</p>
    <p>rating: ${item.rating}</p>
    <p>${item.vicinity}</p>
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
  loadingDiv.style.display = "block";
});
bubbleTea.addEventListener("click", e => {
  e.preventDefault();
  findPlaces("bubble tea");
  firstPage.style.display = "none";
  secondPage.style.display = "block";
  loadingDiv.style.display = "block";
});
smoothie.addEventListener("click", e => {
  e.preventDefault();
  findPlaces("smoothies");
  firstPage.style.display = "none";
  secondPage.style.display = "block";
  loadingDiv.style.display = "block";
});
juice.addEventListener("click", e => {
  e.preventDefault();
  findPlaces("juices");
  firstPage.style.display = "none";
  secondPage.style.display = "block";
  loadingDiv.style.display = "block";
});

// add event handlers to forms
firstForm.addEventListener("submit", e => {
  e.preventDefault();
  firstPage.style.display = "none";
  secondPage.style.display = "block";
  loadingDiv.style.display = "block";
  loadingDiv.style.display = "block";
  findPlaces(firstValue);
});
secondForm.addEventListener("submit", e => {
  e.preventDefault();
  removeLastPlace();
  loadingDiv.style.display = "block";
  findPlaces(secondValue);
  secondForm.reset();
});

// add event handler to app name
appName.addEventListener("click", () => {
  location.reload();
});

// remove last search
const removeLastPlace = () => {
  while (listContainer.lastChild) {
    listContainer.removeChild(listContainer.lastChild);
  }
};
