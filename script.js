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
