const btn = document.querySelector("#switcher")
let globalTheme = "light"

const getCSSValueOf = (htmlNode, property) =>
  getComputedStyle(htmlNode).getPropertyValue(property)

const switchOnOff = (e) => {
  const [color, name] =
    globalTheme === "dark" ? ["light", "Nuit"] : ["dark", "Jour"]

  const body = document.querySelector("body")

  body.style.backgroundColor = getCSSValueOf(body, `--${color}`)

  e.target.textContent = name

  globalTheme = color

  const clouds = document.querySelectorAll(".cloud")

  clouds.forEach((cloud) => {
    cloud.style.setProperty(
      `--lightCloud`,
      getCSSValueOf(body, `--${color}Cloud`)
    )
  })
}

btn.addEventListener("click", switchOnOff)
