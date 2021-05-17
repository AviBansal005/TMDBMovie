import { APIKEY } from '../keys'

const APIKE = APIKEY || process.env.APIKEY
const requests = {
    fetchActionMovies: `/discover/movie?api_key=${APIKE}&with_genres=28`,
    fetchAdeventureMovies: `discover/movie?api_key=${APIKE}&with_genres=12`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKE}&with_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${APIKE}&with_genres=27`,
    fetchThrillerMovies: `discover/movie?api_key=${APIKE}&with_genres=53`,
    fetchCrimeMovies: `discover/movie?api_key=${APIKE}&with_genres=80`,
    fetchMysteryMovies: `discover/movie?api_key=${APIKE}&with_genres=9648`,
    fetchRomanceMovies: `discover/movie?api_key=${APIKE}&with_genres=10749`,
    fetchDocumentaries: `discover/movie?api_key=${APIKE}&with_genres=99`,
    fetchScienceMovie: `discover/movie?api_key=${APIKE}&with_genres=878`,
    fetchDramaMovies: `discover/movie?api_key=${APIKE}&with_genres=18`,
    fetchAnimationMovies: `discover/movie?api_key=${APIKE}&with_genres=16`,
    fetchFamilyMovies: `discover/movie?api_key=${APIKE}&with_genres=10751`,
    fetchFantasyMovies: `discover/movie?api_key=${APIKE}&with_genres=14`
 }

 export default requests