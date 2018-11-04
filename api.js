export const fetchMovies = async (param) => {
  try { 
      const response = await fetch(`http://www.omdbapi.com/?${param}&apikey=b3db097d`)
      const results = await response.json()

      return results
    }
    catch(error) {
      console.log("error at MainScreen:fetchAdditionalDeatils: " + error)
    }
  }