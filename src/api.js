import axios from 'axios';
import http from 'http';

const apiUrl = 'https://bridge-api.burningtimber.com/v1';

const eventbriteApi = axios.create({
    timeout: 300000,
    httpAgent: new http.Agent({ keepAlive: true }),
    maxRedirects: 10,
    maxContentLength: 50 * 1000 * 1000,
    baseURL: apiUrl + '/event',
});

const taigaApi = axios.create({
    timeout: 300000,
    httpAgent: new http.Agent({ keepAlive: true }),
    maxRedirects: 10,
    maxContentLength: 50 * 1000 * 1000,
    baseURL: 'https://taiga.burningtimber.com/api/v1',
});

const chatApi = axios.create({
    timeout: 300000,
    httpAgent: new http.Agent({ keepAlive: true }),
    maxRedirects: 10,
    maxContentLength: 50 * 1000 * 1000,
    baseURL: apiUrl + '/chat',
})

function initializeWithTokens(token) {
    eventbriteApi.headers = {
        'Authorization': 'Bearer ' + token
    };
    taigaApi.headers = {
        'Authorization': 'Bearer ' + token
    };
}

export default {
    eventbrite: eventbriteApi,
    taiga: taigaApi,
    chat: chatApi,
    initialize: initializeWithTokens,
};