import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Course from './Components/Course/Course';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/404/NotFound';
import { useEffect, useState } from 'react';







function App() {


  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(list => setData(list));
  }, []);




  return (
    <BrowserRouter>
      <Header></Header>

      <Switch>

        <Route exact path="/">
          <Hero></Hero>
          <Course
            data={data}
            value="4">
            <Link to="/courses">
              <div className="btn-more-wrap pb-12">
                <button className="hover:bg-gray-700">See More</button>
              </div>
            </Link>
          </Course>
        </Route>

        <Route path="/courses">
          <Course data={data}
            value="8"></Course>
        </Route>

        <Route path="/about">
          <About></About>
        </Route>

        <Route path="/contact">
          <Contact></Contact>
        </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>

      <Footer></Footer>
    </BrowserRouter>

  );
}

export default App;
