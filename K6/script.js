import http from 'k6/http';
import { sleep, check } from 'k6';


export const options = {
    vus: 5000,
    duration: '100s',
};

export default function () {
    login();
    getAuction();
    viewProfile();
    viewAllAccount();
    sleep(1); // Wait for 1 second before starting the next iteration
}

function login() {
    let payload = {
        phone_number: '0123456788',
        password: 'password123',
    };

    let headers = { 'Content-Type': 'application/json' };

    let res = http.post('http://localhost:8081/api/v1/login', JSON.stringify(payload), { headers: headers });

    check(res, {
        'Login status is 200': (r) => r.status === 200,
    });
}

function getAuction() {
    let res = http.get('http://localhost:8081/api/v1/auction');

    check(res, {
        'Get auction status is 200': (r) => r.status === 200,
    });
}

function viewProfile() {
    let res = http.get('http://localhost:8081/api/v1/account/0123456788');

    check(res, {
        'View profile status is 200': (r) => r.status === 200,
    });
}

function viewAllAccount() {
    let res = http.get('http://localhost:8081/api/v1/account');

    check(res, {
        'View all account status is 200': (r) => r.status === 200,
    });
}