import React,{ useState } from 'react'
import './Navbar.css'
import {FormControl, Form, Button, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Nav() {

    const [search, setsearch] = useState('')
   
    const searchHandler = event => {
        setsearch(event.target.value)
    }
    return (
        <div className={`navbar`}>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><img className="nav_logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="Website Logo" /></Navbar.Brand>
                <Form inline style={{ marginRight: '100px' }}>
                    <FormControl type="text" placeholder="Search" onChange={searchHandler} className="mr-sm-2" />
                    <Link className="navbar-item" to={`/movie/search/${search}`}>
                        <Button variant="outline-success">
                            Search
                        </Button>
                    </Link>
                </Form>
            </Navbar>
        </div>
    )
}

export default Nav
