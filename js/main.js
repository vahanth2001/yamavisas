const menuButton=document.getElementById("menuButton");
const navigation=document.getElementById("navigation");
if(menuButton&&navigation)
    {menuButton.addEventListener("click",()=>
        {
            const isOpen=navigation.classList.toggle("open");
            menuButton.setAttribute("aria-expanded",isOpen?"true":"false")
        }
    )
}
/* =========================================================
   TRANSPARENT / SCROLL HEADER
========================================================= */
const siteHeader = document.getElementById("siteHeader");
function updateHeader() {
  if (!siteHeader) return;
  if (window.scrollY > 40) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }
}
/* Check when page loads */
updateHeader();
/* Check whenever visitor scrolls */
window.addEventListener("scroll", updateHeader);
const year=document.getElementById("year");
if(year){
    year.textContent=new Date().getFullYear()
}