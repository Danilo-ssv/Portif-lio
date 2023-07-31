document.addEventListener("DOMContentLoaded", ()=>{
	document.querySelector("#span").innerHTML = ""
	new TypeIt("#span", {
		speed: 200,
		loop: true,
	})
	.pause(1500)
	.type("Desenvolvedor Front-end!", { delay: 900 })
	.delete(10)
	.type("Back-end!", { delay: 900 })
	.delete(9)
	.type("Web!", { delay: 1500 })
	.delete(4)
	.type("Mobile!", { delay: 900 })
	.go()
})