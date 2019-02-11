import React, { Component } from 'react';
import Table from './Table';

export default class CentersForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            place: '',
            latitude: '',
            longitude: '',
            items: []
        }
    };

    handleAppendData = (e) => {
        e.preventDefault();
        let items = [...this.state.items];
        items.push({place: this.state.place, latitude: this.state.latitude, longitude: this.state.longitude});
        this.setState({
            items,
            place: '',
            latitude: '',
            longitude: '',
        });
        this.props.listCenters(items);
    };

    handleInputChange = (e) => {
        let input = e.target;
        let name = e.target.name;
        let value = input.value;

        this.setState({
            [name]: value
        })
    };

    render(){
        return(
            <div className="form-data">
                    <div className="field">
                        <div className="control columns">
                            <div className="column is-4">
                                <label className="label">Medical centers (name, latitude, longitude):</label>
                            </div>
                            <div className="column is-2">
                                <input className="input" type="text" placeholder="Place" name={'place'} value={this.state.place} onChange={this.handleInputChange}/>
                            </div>
                            <div className="column is-2">
                                <input className="input" type="text" placeholder="Latitude" name={'latitude'} value={this.state.latitude} onChange={this.handleInputChange}/>
                            </div>
                            <div className="column is-2">
                                <input className="input" type="text" placeholder="Longitude" name={'longitude'} value={this.state.longitude} onChange={this.handleInputChange}/>
                            </div>
                            <div className="column is-2">
                                <button type="button" className="button is-light is-fullwidth" onClick={this.handleAppendData}>Add</button>
                            </div>
                        </div>
                    </div>
                    {this.state.items.length > 0 &&
                        <section className="section">
                            <Table items={this.state.items}/>
                        </section>
                    }
            </div>
        )
    }
}
