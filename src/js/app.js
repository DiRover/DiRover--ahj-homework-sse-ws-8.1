/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
import API from './api';

console.log('ok');

export const container = document.querySelector('[data-id="container"]');

// const url = 'http://localhost:7871/sse';
const url = 'https://sse-8-1-server.herokuapp.com/sse';
const api = new API(url);

const eventSource = api.getEventSource();
eventSource.addEventListener('message', api.load);
eventSource.addEventListener('open', () => {
  console.log('connected');
});
eventSource.addEventListener('error', () => {
  console.log('error');
});
