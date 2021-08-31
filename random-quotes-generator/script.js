
const fetchQuotes = async () => {
  const data = await fetch('https://type.fit/api/quotes')
  const quotes = await data.json()
  return quotes[Math.floor(Math.random() * quotes.length)]
}
