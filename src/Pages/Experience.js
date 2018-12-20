import React, { Component } from 'react';

export default class Experience extends Component {
    render() {
        return (
            <div style={styles.container}>
                <h1>Read about my experiences!</h1>
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