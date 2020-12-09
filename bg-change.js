var bgColor = document.querySelector(".js-bg-color")
var textColor = document.querySelector(".js-text-color") 
var labelBg = document.querySelector(".label-bg")
var body = document.querySelector("body")
var txtBg = document.querySelector(".text-bg")
var heading = document.querySelector(".heading")

heading.style.fontSize = "70px"

textColor.style.borderRadius = "20px"
textColor.style.fontSize = "70px"
textColor.style.fontFamily = "sarif"
textColor.style.border = "2px solid black"
textColor.style.height = "10px"
textColor.style.width = "100vw"
textColor.style.backgroundColor = "grey"
textColor.style.outline = "none"

bgColor.style.fontFamily = "sarif"
bgColor.style.fontSize = "70px"
bgColor.style.border = "2px solid black"
bgColor.style.height = "10px"
bgColor.style.width = "100vw"
bgColor.style.backgroundColor = "grey"
bgColor.style.borderRadius = "20px"
bgColor.style.outline = "none"

labelBg.style.color = "gold"
labelBg.style.fontSize = "50px"

txtBg.style.fontSize = "50px"
txtBg.style.color = "gold"

body.style.overflowX = "none"


bgColor.addEventListener('keyup', function (event){
  // console.log("bg color", event.target.value)
  
  body.style.backgroundColor = event.target.value
});


textColor.addEventListener('keyup', function (event){
  // console.log("text color", event.target.value)
  // var body = document.querySelector("body")
  body.style.color = event.target.value
})



// bgColor.addEventListener('keyup', function(event){
//   var color = event.target.value
//   switch(color) {
//     case 'red':
//     case 'blue':
//     case 'yellow':
//       body.style.backgroundColor = color
//       break
//     default:
//       body.style.backgroundColor = "green"
//       break
//   }
// });