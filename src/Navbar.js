import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <BrowserRouter>
                <div style={styles.bar}>
                    <h1 style={styles.title}>A | P</h1>
                    <ul style={styles.navOptions}>
                        <li style={styles.navOption}><Link to="/" style={styles.navOptionText}>About</Link></li>
                        <li style={styles.navOption}><Link to="/experience" style={styles.navOptionText}>Experience</Link></li>
                        <li style={styles.navOption}><Link to="/blog" style={styles.navOptionText}>Blog</Link></li>
                        <li style={styles.navOption}><Link to="/Stuff" style={styles.navOptionText}>Stuff</Link></li>
                    </ul>
                    {/* <div>
                        <Route path="/" component={Home}/>
                        <Route path = "/experience" component={Experience}/>
                        <Route path="/stuff" component={Stuff}/>
                        <Route path="/contact" component={Contact}/>
                    </div> */}
                </div>
            </BrowserRouter>
        )
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
        marginLeft: '10px'
    },
    navOption: {
        display: 'inline',
        padding: '10px',
    },
    navOptionText: {
      fontSize: 30,
    },
    navOptions: {
        marginTop: '0',
        listStyleType: 'none',
        marginRight: '2%',
    }
}