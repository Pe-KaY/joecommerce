const menu_btn = document.getElementById("menubar")
const cancel_btn = document.getElementById("nav-cancel")
const navmenu = document.getElementById("navForphone")
const navs = Array.from(document.querySelectorAll(".smallNavs"))

const openmenu = (e) => {
  e.preventDefault()
  navmenu.style.display = "block"
  menu_btn.style.display = "none"
  navs.forEach((ele) => {
    ele.addEventListener("click", closemenu)
  })
}

const closemenu = () => {
  navmenu.style.display = "none"
  menu_btn.style.display = "block"
}

menu_btn.addEventListener("click", openmenu)
cancel_btn.addEventListener("click", closemenu)
