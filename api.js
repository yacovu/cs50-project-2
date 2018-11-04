const processMovie = movie => ({
  name: movie.Title,
  year: movie.Year,
  type: movie.Type,
})

export const fetchMovies = async (param) => {
  try { 
      
      console.log("fetching : " + param)
      const response = await fetch(`http://www.omdbapi.com/?${param}&apikey=b3db097d`)
      console.log("response : " + JSON.stringify(response))
      const results = await response.json()
      console.log("results : ")
      console.log(results.Search)

      
    
      
      return results
    
    }

    catch(error) {
      // console.error(error)
    }
  }

  // const response = await fetch("http://www.omdbapi.com/?apikey=b3db097d")
  // const {results} = await response.json()