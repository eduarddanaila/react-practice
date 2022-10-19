/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import './App.css';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import Home from './components/Home.jsx';
import SearchableList from './components/SearchableList.jsx';
import OMDB from './components/FilmSearch.jsx';
import ParamsId from './components/ParamsExample.jsx';
import Contact from './components/Contact.jsx';
import Navigation from './components/Navigation.jsx';

function App() {
  return (
        <div className="App">
            <Router>
                <header>
                    <h1>I AM A HEADER</h1>
                </header>
                <nav>
                    <li>
                    <Link to="/"><button type="button">HOME</button></Link>
                    </li>
                    <li>
                    <Link to="/Users/1"><button type="button">Users</button></Link>
                    </li>
                    <li>
                    <Link to="/shoppingList"><button type="button">Shopping List</button></Link>
                    </li>
                    <li>
                    <Link to="/Movies"><button type="button">Movies</button></Link>
                    </li>
                    <li>
                    <Link to="/Contact"><button type="button">Contact Us</button></Link>
                    </li>
                    <Navigation />
                </nav>
                <br />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shoppingList" element={<SearchableList />} />
                    <Route path='/Movies' element={<OMDB />}/>
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/Users/:id' element={<ParamsId />}/>
                </Routes>
            </Router>
        </div>
  );
}
export default App;
