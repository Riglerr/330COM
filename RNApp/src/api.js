'use strict';

const API_KEY = "f95aa45c6b3445ebd7b35f350d4b3904";
const defaultQuery = "?api_key=f95aa45c6b3445ebd7b35f350d4b3904&language=en-US&page=1&include_adult=false";
const searchUrl = "https://api.themoviedb.org/3/search/movie";

export default class MovieApi {
    static async searchByName(query) {
        try {
            let response = await fetch(MovieApi._constructURI(searchUrl, `&query=${query}`))
            let responseJson = await response.json()
            return responseJson.results
        } catch(ex) {
            console.error(ex)
        }
    }

    getRecommendation(name) {
        
    }

    static _constructURI(rootUrl, additionalQuery) {
        return `${rootUrl}${defaultQuery}${additionalQuery}`
    }
}