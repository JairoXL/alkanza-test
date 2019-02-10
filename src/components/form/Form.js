import React, { Component } from 'react';
import Centers from './CentersForm';
import Calc from '../../controller/Calcs';

export default class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            radius: '',
            initial_latitude: '',
            initial_longitude: '',
            items: [],
            dbDistance: '',
        }
    };

    centersData = (data) => {
        this.setState({
            items: data
        });
    };

    handleInputChangeForm = (e) => {
        let input = e.target;
        let name = e.target.name;
        let value = input.value;

        this.setState({
            [name]: value
        })
    };

    addData = (e) => {

        e.preventDefault();
        let distances = [];
        let insideRadius = [];
        let outRadius = [];

        this.state.items.map((item) => {
            distances.push(Calc.getDistancePoints(this.state.initial_latitude, this.state.initial_longitude, item.latitude, item.longitude));
        });

        distances.map((distance) => {
            if(distance <= this.state.radius)
                insideRadius.push(distance);
            else
                outRadius.push(distance);
        });

        let res = insideRadius.reduce(Calc.addValues, 0) - outRadius.reduce(Calc.addValues, 0);
        this.setState({
            dbDistance: Math.abs(res)
        });
        console.log(Math.abs(res));
        console.log(this.state);
        /******* TODO ADD MAP *******/
        /******* TODO ADD SERVICE INTEGRATION *******/
    };

    render(){
        return(
            <div>
                <form className="form" onSubmit={this.addData}>
                    <div className="field">
                        <div className="control columns">
                            <div className="column is-4">
                                <label className="label">Username:</label>
                            </div>
                            <div className="column is-6">
                                <input className="input" type="text" placeholder="Eg: John Doe" name={'username'} onChange={this.handleInputChangeForm} value={this.state.username}/>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control columns">
                            <div className="column is-4">
                                <label className="label">Radius:</label>
                            </div>
                            <div className="column is-6">
                                <input className="input" type="number" placeholder="Eg: 10 (Only number) this value is in Km" name={'radius'} onChange={this.handleInputChangeForm} value={this.state.radius}/>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control columns">
                            <div className="column is-4">
                                <label className="label">Your location / coordinates:</label>
                            </div>
                            <div className="column is-3">
                                <input className="input" type="text" placeholder="Latitude" name={'initial_latitude'} onChange={this.handleInputChangeForm} value={this.state.initial_latitude}/>
                            </div>
                            <div className="column is-3">
                                <input className="input" type="text" placeholder="Longitude" name={'initial_longitude'} onChange={this.handleInputChangeForm} value={this.state.initial_longitude}/>
                            </div>
                            <div className="column is-2">
                                <button type="submit" className="button is-light is-fullwidth">Locate</button>
                            </div>
                        </div>
                    </div>

                    <Centers listCenters = {this.centersData}/>

                    <div className="field">
                        <div className="control columns">
                            <div className="column is-12">
                                <button type='submit' className="button is-fullwidth is-primary">ADD & CALCULATE</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="dataResult">
                    {JSON.stringify(this.state)}
                </div>
            </div>
        )
    }
}