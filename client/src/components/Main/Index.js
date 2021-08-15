import React, { Component, Fragment } from 'react';

import '../../styles/Index.css';

export default class Index extends Component {
    render () {
        return (
            <Fragment>
                <div className="article">
                    <a href="/productos/categoria/hombre">
                        <article className="boxes">
                            <p>HOMBRE</p>
                            <button>VER MÁS</button>
                        </article>
                    </a>
                    <a href="/productos/categoria/mujer">
                        <article className="boxes3">
                            <p>MUJER</p>
                            <button>VER MÁS</button>
                        </article>
                    </a>
                </div>
                <div className="article2">
                    <a href="/productos/categoria/unisex">
                        <article className="boxes2">
                            <div className="texto">
                                <p>UNISEX</p>
                                <button>VER MÁS</button>
                            </div>
                        </article>
                    </a>
                </div>
            </Fragment>
        );
    }
}