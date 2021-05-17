import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import {HashRouter as Router, Route} from 'react-router-dom'
import Movie from './components/Movies'
import Search from './components/Search'

function App() {
  return (
    <Router>
      <div style={{backgroundColor:"black"}}>
        <Navbar />
        <Route key="Landing" exact path="/" component={Landing} />
        <Route key="Movie" exact path="/movie/:id" component={Movie} />
        <Route key="Search" exact path="/movie/search/:name" component={Search} />
      </div>
    </Router>
    )
}

export default App;
