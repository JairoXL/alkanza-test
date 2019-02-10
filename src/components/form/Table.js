import React, { Component } from 'react';

export default class Table extends Component {

    render() {
        const items = this.props.items;
        return(
            <table className="table is-responsive is-fullwidth">
                <thead>
                    <tr>
                        <th>Lugar</th>
                        <th>Latitud</th>
                        <th>Longitud</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map( function(item,i) {
                        return(
                            <tr key={i} id={i}>
                                <td>{item.place}</td>
                                <td>{item.latitude}</td>
                                <td>{item.longitude}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}