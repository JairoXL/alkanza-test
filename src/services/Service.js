import axios from 'axios';

const baseUrl = 'http://localhost:8000/history';

export default class Service {

    getData = () => {
        return axios.get(baseUrl).then( data => {
            return data.data;
        }).catch( err => {
            console.log(err);
        });
    };

    saveData = (data) => {
        return axios.post(baseUrl,  data ).then( data => {
            return data.data;
        }).catch( err => {
            console.log(err)
        })
    }
}