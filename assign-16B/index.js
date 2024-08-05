import country_list from "./countryNames.js";

function addDropDown(inp) {
  const addItem = document.getElementById("dropdown");
  addItem.innerHTML = "";
  if (inp === "") return;
  country_list.forEach((item) => {
    if (item.toLowerCase().includes(inp.toLowerCase())) {
      const addVal = document.createElement("div");
      addVal.classList.add("dropdown-div");
      addVal.textContent = item;
      addItem.appendChild(addVal);
    }
  });
}
function addinp(event) {
  const current = event.target.value;
  addDropDown(current);
}
const val = document.getElementById("inp");
val.addEventListener("input", addinp);
