const openNav = document.querySelector("#open-nav")
const closeNav = document.querySelector("#close-nav")
const navBar = document.querySelector("#header nav ul")
const navItems = document.querySelectorAll(".nav-items")

navItems.forEach(navItem => navItem.addEventListener("click", hideNavBar))
openNav.addEventListener("click", showNavBar)
closeNav.addEventListener("click", hideNavBar)

function showNavBar() {
	navBar.classList.add("active")
	openNav.classList.remove("active")
	closeNav.classList.add("active")

}

function hideNavBar() {
	navBar.classList.remove("active")
	closeNav.classList.remove("active")
	openNav.classList.add("active")
}