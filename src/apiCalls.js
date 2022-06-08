const key = process.env.REACT_APP_API_KEY

const getArticles = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`)
  .then(response => {
    if(!response.ok) {
      throw new Error('hmm..something went wrong...')
    } else {
      return response.json()
    }
  })
}

export default getArticles;