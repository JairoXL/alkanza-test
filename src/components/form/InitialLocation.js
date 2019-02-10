import React, { Component } from 'react';

export default class InitialLocation extends Component {

    constructor(props){
        super(props);
        this.state = {
            initial_latitude: '',
            initial_longitude: '',
        }
    }

    render(){
        return (
            <div className="field">
                <div className="control columns">
                    <div className="column is-4">
                        <label className="label">Your location / coordinates:</label>
                    </div>
                    <div className="column is-3">
                        <input className="input" type="text" placeholder="Latitude" name={'latitude'}/>
                    </div>
                    <div className="column is-3">
                        <input className="input" type="text" placeholder="Longitude" name={'logitude'}/>
                    </div>
                    <div className="column is-2">
                        <button type="submit" className="button is-light is-fullwidth">Locate</button>
                    </div>
                </div>
            </div>
        )
    }
}