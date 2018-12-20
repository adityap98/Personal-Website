import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div style={styles.container}>
                <h1>Here is my contact information!</h1>
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