const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-form input");

const doSearchGoogle = (e) => {
  e.preventDefault();
  const searchWord = searchInput.value;
  searchInput.value = "";
  const googleUrl = `https://www.google.com/search?q=${searchWord}`;
  window.open(googleUrl);
};

searchForm.addEventListener("submit", doSearchGoogle);
