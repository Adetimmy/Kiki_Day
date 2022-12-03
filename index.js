const overlay = document.querySelector(".overlay")
const menu = document.querySelector(".menu")
const closeMenu = document.querySelector(".overlay svg")
const hi = document.querySelector(".come h1")
window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle("window-scroll", window.scrollY>0)
    })

menu.addEventListener("click", () =>{
    overlay.style.display = "block"
    overlay.style.right = "0"
    menu.style.transform = "rotate(180deg)"
})
closeMenu.addEventListener("click", () =>{
    overlay.style.display = "none"
    menu.style.transform = "rotate(90deg)"
})


