import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '10s', target: 100 },    // Giữ ổn định 50 người 
        { duration: '20s', target: 200 },   // Tăng dần lên 100 người 
        { duration: '10s', target: 100 },   // Giữ ổn định 100 người
        { duration: '20s', target: 0 },     // Giảm dần số lượng người 
    ],
};

export default function () {
    http.get('http://localhost:8081/api/v1/auction');
    sleep(1);
}