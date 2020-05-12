const clientId = config.clientId;
const clientSecret = config.clientSecret;
const v = "20200511";
const value = document.querySelector("#index-input");
const form = document.querySelector("form");
const errorDiv = document.querySelector(".error-message");
let ll = "new york,ny";
const listContainer = document.querySelector(".list-container");

// prompt the user to get current location
// const getLL = function (e) {
//   ll = e.coords.latitude + "," + e.coords.longitude;
//   console.log(ll);
//   return ll;
// };

// const error = function (err) {
//   // console.log(err);
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
// // might change to watchPosition
// navigator.geolocation.getCurrentPosition(getLL, error);

//  using longitude and latitude find businesses nearby
const findPlaces = async query => {
  try {
    const url = `https://api.foursquare.com/v2/venues/explore?client_id=${clientId}&client_secret=${clientSecret}&near=${ll}&v=${v}&query=${query}`;
    const response = await axios.get(url);
    let list = response.data.response.groups[0].items;
    showBusiness(list);
  } catch (err) {
    console.log(err);
  }
};

findPlaces("tea");

const showBusiness = list => {
  // window.location.pathname =
  // "/Users/Kate/GeneralAssembly/SEI/Unit_1/Week_3/find-drinks/list.html";

  list.forEach(item => {
    console.log(item.venue);
    const listDiv = document.createElement("div");

    // listDiv.innerHTML = `${item.venue.name}<br>
    // ${item.venue.location}`;
    // listContainer.append(listDiv);
  });
};

// form.addEventListener("submit", e => {
//   e.preventDefault();
//   findPlaces(value);
// });
