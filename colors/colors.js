const colors = [
  'blue',
  'red',
  'green',
  'yellow',
  'orange',
  'purple',
  'black',
  'white'
]

const createColor = document.getElementsByTagName('body')[0]
let index = 0

function changeColor() {
  if(colors.length !== index){
    createColor.style.backgroundColor = colors[index]
    return index++
  } else {
    index = 0
    return changeColor()
  }
}
