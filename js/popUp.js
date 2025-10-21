document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname;
    const isFrontpage = path === "/" || path.endsWith("/index.html");
  
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closePopup");
  
    if (isFrontpage) {
      popup.style.display = "flex";
    }
  
    closeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    popup.style.display = "none";
  });
  });
  