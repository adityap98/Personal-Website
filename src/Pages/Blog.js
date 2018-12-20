import React, { Component } from 'react';

export default class Blog extends Component {
    render() {
        return (
            <div style={styles.container}>
                <h1>Read my blog posts!</h1>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center'
    }
}