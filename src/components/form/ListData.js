import React, { Component } from 'react';
import Service from '../../services/Service';

const client = new Service();

export default class ListData extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        client.getData().then( listData => {
            /*this.setState({
                data: listData.data
            })*/
        })
    }

    render() {

        const items = this.state.data;

        return(
            <table className="table is-responsive is-fullwidth" style={{display: items.length > 0 ? 'block' : 'none' }}>
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Radius</th>
                    <th>Initial longitude</th>
                    <th>Initial latitude</th>
                    <th>Medial centers</th>
                    <th>DB distance</th>
                </tr>
                </thead>
                <tbody>
                {items.map( function(item,i) {
                    return(
                        <tr key={i} id={i}>
                            <td>{item.username}</td>
                            <td>{item.radius}</td>
                            <td>{item.initial_latitude}</td>
                            <td>{item.initial_longitude}</td>
                            <td>{item.items}</td>
                            <td>{item.dbDistance}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }

}