document.getElementById("menu-toggle").addEventListener("click", function (e) {
  document.getElementsByTagName("nav")[0].classList.toggle("--open")
})

Array.from(document.getElementsByClassName("navigation-slider-item")).forEach(function (item) {

  item.addEventListener("click", function (event) {
    Array.from(document.getElementsByClassName("navigation-slider-item")).forEach(function (item) {
      item.classList.remove("--selected")
      item.classList.remove("btn-primary")
      item.classList.add("btn-secondary")
    })

    event.target.classList.add("--selected")
    event.target.classList.add("btn-primary")
    event.target.classList.remove("btn-secondary")
  })
})

let root = document.documentElement;

function updateRealViewportDimensions() {
  console.log(`1vh = ${window.innerHeight / 100}px`)
  root.style.setProperty('--real-vh', (window.innerHeight / 100) + "px");
}

updateRealViewportDimensions()
const vhChangeEventTypes = [
  "scroll",
  "resize",
  "fullscreenchange",
  "fullscreenerror",
  "touchcancel",
  "touchend",
  "touchmove",
  "touchstart",
  "mozbrowserscroll",
  "mozbrowserscrollareachanged",
  "mozbrowserscrollviewchange",
  "mozbrowserresize",
  "MozScrolledAreaChanged",
  "mozbrowserresize",
  "orientationchange"
]
vhChangeEventTypes.forEach(function(type) {
  window.addEventListener(type, event => updateRealViewportDimensions());
})
