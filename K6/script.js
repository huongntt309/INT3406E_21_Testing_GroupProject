import http from 'k6/http';
import { sleep } from 'k6';

// Options vus: virtual users, duration: total time 
export const options = {
    vus: 2000, // Virtual Users - VUs
    duration: '50s', // Run the testing k6 file in duration time 
};

export default function () {
    let data = JSON.stringify({
        "password": "admin",
        "username": "admin"
    });

    let headers = {
        'Content-Type': 'application/json',
    };

    // let response = http.post('https://videogamedb.uk:443/api/authenticate', data, { headers: headers });
    
    console.log(response.status);
}
