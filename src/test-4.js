function expandBox() {
  var box = document.getElementById("box");
  if (box.classList.contains("expanded")) {
    box.classList.remove("expanded");
  } else {
    box.classList.add("expanded");
  }
}