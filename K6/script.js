import http from 'k6/http';
import { sleep } from 'k6';

// Options vus: virtual users, duration: total time 
export const options = {
    vus: 40000, // Virtual Users - VUs
    duration: '100s', // Run the testing k6 file in duration time 
};

export default function () {
    let data = JSON.stringify({
        "phone_number": "0123456787",
        "password": "123456789"
    });

    let headers = {
        'Content-Type': 'application/json',
    };

    let response = http.post('http://localhost:8081/api/v1/login', data, { headers: headers });
    console.log(response.status);
    sleep(1);
}
