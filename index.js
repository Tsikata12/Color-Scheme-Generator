let colorBox = document.getElementById("color-box")
let forms = document.getElementById("form")


forms.addEventListener("submit", fetchColor)

async function fetchColor(e){
    e.preventDefault()
    
    let colorInput = document.getElementById("color-input").value.slice(1, 7)
    let mode = document.getElementById("colors").value
    let colorHtml = ""
    
    const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput}&mode=${mode}&count=5`)
    const data = await res.json()
    
    let colorsDiv = data.colors.map(color => {
        return `<div style="background-color: ${color.hex.value};"><p>${color.hex.value}</p></div>`
    })
    
    colorsDiv.forEach(color => {
        colorHtml += color
    })
    
    colorBox.innerHTML = colorHtml
}





