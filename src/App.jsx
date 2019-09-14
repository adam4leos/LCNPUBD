import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => 'Home';
const Contacts = () => 'Contacts';
const Media = () => 'Media';
const FAQ = () => 'FAQ';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacts/">Contacts</Link>
            </li>
            <li>
              <Link to="/media/">Media</Link>
            </li>
            <li>
              <Link to="/faq/">FAQ</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/contacts/" component={Contacts} />
        <Route path="/media/" component={Media} />
        <Route path="/faq/" component={FAQ} />
      </div>
    </Router>
  );
}

export default App;
