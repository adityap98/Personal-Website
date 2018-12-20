import React, { Component } from 'react';
import HomePicture from '../assets/PortraitSuperSmall.jpg';

export default class Home extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.textBox}>
                    <h1 style={styles.bigText}>
                        Aditya Palacharla
                    </h1>
                    <h2 style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet molestie dui. Donec velit eros, consectetur in libero varius, finibus fringilla lacus. In hac habitasse platea dictumst. Nullam lacinia ex sed orci scelerisque, vel interdum purus varius. Quisque ac leo nunc. Proin sit amet sapien vehicula, venenatis arcu nec, vehicula nibh. Ut pulvinar viverra sem at venenatis. Aenean tincidunt diam sed egestas luctus. Fusce sed vestibulum ligula.
    Aenean id pretium quam. Suspendisse potenti. 
                    </h2>
                </div>
                <div style={styles.imgBox}>
                    <img 
                        src={HomePicture}
                        style={styles.img}
                    />
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
    },
    textBox: {
        flex: 1,
        textAlign: 'center',
    },
    bigText: {
        marginLeft: '10%',
        marginTop: '15%'
    },
    text: {
        marginLeft: '10%',
    },
    imgBox: {
        flex: 1,
        textAlign: 'center',
    },
    img: {
        height: '70%',
        marginTop: '5%',
        borderRadius: '3%'
    }
}