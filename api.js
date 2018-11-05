export const fetchMovies = async (name, pageNum) => {
  try { 
      const response = await fetch(`http://www.omdbapi.com/?s=${name}&page=${pageNum}&apikey=b3db097d`)
      const results = await response.json()

      return results
    }
    catch(error) {
      console.log("error when fetching movie " + error)
    }
  }


export const fetchMovieByImdbID = async (imdbID) => {
 try { 
      const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=b3db097d`)
      const results = await response.json()

      return results
    }
    catch(error) {
      console.log("error when fetching movie by imdbID" + error)
    }
  }