import React from 'react'
import Row from './Row'
import requests from '../apis/requests'

function Landing() {
    return (
        <div className="app">
          <Row key="Action" title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row key="Adventure" title="Adventure Movies" fetchUrl={requests.fetchAdeventureMovies} />
          <Row key="Comedy" title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <Row key="Horror" title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <Row key="Thriller" title="Thriller Movies" fetchUrl={requests.fetchThrillerMovies} />
          <Row key="Crime" title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />
          <Row key="Mystery" title="Mystery Movies" fetchUrl={requests.fetchMysteryMovies} />
          <Row key="Romance" title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
          <Row key="Documentary" title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
          <Row key="Science Fiction" title="Science Fiction" fetchUrl={requests.fetchScienceMovie} />
          <Row key="Drama" title="Drama Movies" fetchUrl={requests.fetchDramaMovies} />
          <Row key="Animation" title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
          <Row key="Family" title="Family Movies" fetchUrl={requests.fetchFamilyMovies} />
          <Row key="Fantasy" title="Fantasy Movies" fetchUrl={requests.fetchFantasyMovies} />
          </div>
    )
}

export default Landing
