const body = document.getElementsByTagName('body')[0]

const letters = ['a', 'b', 'c', 'd', 'e', 'f']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

let concatLetters, concatNumbers = ''


function changeColor() {
  const hexColor = []
  for (let i = 0; i < 3; i++) {
    concatLetters = letters[Math.floor(Math.random() * letters.length)]
    concatNumbers = numbers[Math.floor(Math.random() * numbers.length)]
    hexColor.push(concatLetters, concatNumbers)
  }

  return body.style.backgroundColor = `#${hexColor.join('')}`
}
