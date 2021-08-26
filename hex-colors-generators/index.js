const body = document.getElementsByTagName('body')[0]

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const letters = ['a', 'b', 'c', 'd', 'e', 'f']

let a, b = ''


function changeColor() {
  const test = []
  for (let i = 0; i < 3; i++) {
    a = letters[Math.floor(Math.random() * letters.length)]
    b = numbers[Math.floor(Math.random() * numbers.length)]
    test.push(a, b)
  }

  return body.style.backgroundColor = `#${test.join('')}`
}
