const divQuotes = document.getElementById('quotes')

const fetchQuotes = async () => {
  const data = await fetch('https://type.fit/api/quotes')
  const quotes = await data.json()
  return quotes[Math.floor(Math.random() * quotes.length)]
}

const initialQuotes = async () => {
  const data = await fetch('https://type.fit/api/quotes')
  const quotes = await data.json()
  const quotePhrase = document.createElement('p')
  quotePhrase.innerHTML = quotes[Math.floor(Math.random() * quotes.length)].text

  divQuotes.appendChild(quotePhrase)
}

window.onload = initialQuotes()
