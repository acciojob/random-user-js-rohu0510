//your code here
const userImage = document.getElementById("userImage");
const userName = document.getElementById("userName");
const ageButton = document.querySelector("button[data-attr='age']");
const emailButton = document.querySelector("button[data-attr='email']");
const phoneButton = document.querySelector("button[data-attr='phone']");
const ageInfo = document.getElementById("ageInfo");
const emailInfo = document.getElementById("emailInfo");
const phoneInfo = document.getElementById("phoneInfo");
const getUserButton = document.getElementById("getUser");

// Helper function to fetch data from API
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results[0];
}

// Initial load
fetchData("https://randomuser.me/api/")
  .then((user) => {
    userImage.src = user.picture.large;
    userName.textContent = `${user.name.first} ${user.name.last}`;
  })
  .catch((error) => console.error(error));

// Event listener for age button
ageButton.addEventListener("click", () => {
  fetchData("https://randomuser.me/api/")
    .then((user) => {
      ageInfo.textContent = user.dob.age;
      emailInfo.textContent = "";
      phoneInfo.textContent = "";
    })
    .catch((error) => console.error(error));
});

// Event listener for email button
emailButton.addEventListener("click", () => {
  fetchData("https://randomuser.me/api/")
    .then((user) => {
      ageInfo.textContent = "";
      emailInfo.textContent = user.email;
      phoneInfo.textContent = "";
    })
    .catch((error) => console.error(error));
});

// Event listener for phone button
phoneButton.addEventListener("click", () => {
  fetchData("https://randomuser.me/api/")
    .then((user) => {
      ageInfo.textContent = "";
      emailInfo.textContent = "";
      phoneInfo.textContent = user.phone;
    })
    .catch((error) => console.error(error));
});

// Event listener for get user button
getUserButton.addEventListener("click", () => {
  fetchData("https://randomuser.me/api/")
    .then((user) => {
      userImage.src = user.picture.large;
      userName.textContent = `${user.name.first} ${user.name.last}`;
      ageInfo.textContent = "";
      emailInfo.textContent = "";
      phoneInfo.textContent = "";
    })
    .catch((error) => console.error(error));
});
