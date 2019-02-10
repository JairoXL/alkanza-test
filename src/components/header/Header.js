import React, { Component } from 'react';
import logo from '../../assets/img/logo.png';
import './header.scss';

export default class Header extends Component {
    render(){
        return(
            <header className="header" >
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="container">
                        <div className="navbar-start">
                            <div className="navbar-brand">
                                <a href={'//www.alkanza.us'}>
                                    <img src={logo} width="112" height="28" alt={'Alkanza'}/>
                                </a>
                            </div>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <h3>FS TEST</h3>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
};