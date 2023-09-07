document.getElementById("hamburger").addEventListener("click", function () {
  const sidebar = document.querySelector(".sidebar");

  if (sidebar.style.width === "0px" || sidebar.style.width === "") {
    sidebar.style.width = "250px";
  } else {
    sidebar.style.width = "0px";
  }
});
