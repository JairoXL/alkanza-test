import React, { Component } from 'react';
import Header from './components/header/Header';
import Form from './components/form/Form';
import 'bulma';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-8">
                            <Form/>
                        </div>
                        <div className="column is -4">

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
  }
}

export default App;
