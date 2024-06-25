function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt", "Mayk Brito de camisa preta oculos escuros e sorrindo em um fundo azul "
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt","Mayk Brito de camisa preta oculos de grau e sorrindo em um fundo azul "
    )
  }
}
