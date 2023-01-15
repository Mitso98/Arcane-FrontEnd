const getbutton = document.getElementById("expand-nav");
const hiddenDiv = document.getElementById("hidden");

getbutton.onclick = () => {
  console.log(hiddenDiv.style.display);
  if (hiddenDiv.style.display === "" || hiddenDiv.style.display === "none")
    hiddenDiv.style.display = "block";
  else hiddenDiv.style.display = "";
};
