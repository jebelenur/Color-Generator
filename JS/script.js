const colorBox = document.getElementById("colorBox")
const colorCode = document.getElementById("colorCode")
const generateBtn = document.getElementById("generateBtn")

function generateRandmColor(){
    const charactes = "123456789ABCDEF"
    let color = "#"

    for(let i = 0; i<6; i++){
        const randomIndex = Math.floor(Math.random() * charactes.length)
        color += charactes[randomIndex]
    }
    return color
}

generateBtn.addEventListener("click", ()=>{
    const randomColor = generateRandmColor()
    colorBox.style.background = randomColor
    colorCode.textContent = randomColor
})

