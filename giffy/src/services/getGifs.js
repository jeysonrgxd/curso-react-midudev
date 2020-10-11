const apiKey = '6SWLzp5ocE96gxC0IM5MRktqb3lMcnf6'

// destructuramos el objeto que pasamos para utilizar asi mas facil su atributo
export default function getGifs({ keyword = 'morty' } = {}) {
   const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
   return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
         const { data } = response
         if (Array.isArray(data)) {
            const gifs = data.map(image => {
               const { images, title, id } = image
               return { title, id, url:images.downsized_medium.url }
            })
            return gifs
         }
      })
}