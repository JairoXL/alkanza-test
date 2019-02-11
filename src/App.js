import React, { Component } from 'react';
import Header from './components/header/Header';
import Form from './components/form/Form';
import MapRender from "./components/map/MapRender";
import 'bulma';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    mapData = (data) => {
        this.setState({
            data: {
                lat_init: data.initial_latitude,
                lon_init: data.initial_longitude,
                items: data.items,
                radius: data.radius
            }
        })
    };

    render() {
        return (
            <div>
                <Header/>
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-8">
                                <Form listData = {this.mapData} />
                            </div>
                            <div className="column is -4">
                                <MapRender mapData = {this.state.data} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
      }
}

export default App;
