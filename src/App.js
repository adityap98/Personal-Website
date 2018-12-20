import React, { Component } from 'react';
import {Route, BrowserRouter, Link} from 'react-router-dom';
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div style={styles.bar}>
              <h1 style={styles.title}>A | P</h1>
              <ul style={styles.navOptions}>
                <li style={styles.navOption}><Link to="/" style={styles.navOptionText}>About</Link></li>
                <li style={styles.navOption}><Link to="/experience" style={styles.navOptionText}>Experience</Link></li>
                <li style={styles.navOption}><Link to="/blog" style={styles.navOptionText}>Blog</Link></li>
                <li style={styles.navOption}><Link to="/contact" style={styles.navOptionText}>Contact</Link></li>
              </ul>
            </div>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path = "/experience" component={Experience}/>
              <Route path="/blog" component={Blog}/>
              <Route path="/contact" component={Contact}/>
            </div> 
          </div> 
      </BrowserRouter>
    );
  }
}

const styles = {
  bar: {
      color: 'white',
      backgroundColor: 'gray',
      marginTop: '0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '1%'
  },
  title: {
      marginTop: '0',
      marginLeft: '1rem'
  },
  navOption: {
      display: 'inline',
      padding: '1rem',
  },
  navOptionText: {
    fontSize: '1.5rem',
  },
  navOptions: {
      marginTop: '0',
      listStyleType: 'none',
      marginRight: '2%',
  }
}