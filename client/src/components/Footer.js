import React, { Component } from 'react';

import '../styles/Footer.css';

class Footer extends Component {
    render () {
        return (
            <footer>
                <ul>
                    <li><a href="#">Términos · </a></li>
                    <li><a href="#">· Privacidad ·</a></li>
                    <li><a href="/nosotros">· Nosotros ·</a></li>
                    <li><a href="/api/products">· API ·</a></li>
                    <li><a href="">· Trabajos</a></li>
                </ul>
                <p>Ⓒ 2021 Roper, Inc.</p>
            </footer>
        );
    }
}

export default Footer;