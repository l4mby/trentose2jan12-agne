const fetch = require('node-fetch');
const getArea = require('./area');

const PORT = process.env.PORT || 3000;
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:' + PORT;

const callGet = function(b, h){
   return fetch(SERVER_URL + '/getArea?side1=' + b + '&side2=' + h, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      }
   });
}

//Test integers, zero, null, negative, positive, strings
test('Test for non integers', () => {
   expect(getArea(['1', 'a'])).toBe(-1);
});

test('Test for zero numbers', () => {
   expect(getArea([0, 0])).toBe(0);
});

test('Test for null numbers', () => {
   expect(getArea([null, null])).toBe(-1);
});

test('Test for negative numbers', () => {
   expect(getArea([-1, -2])).toBe(-1);
});

test('Test for positive numbers', () => {
   expect(getArea([2, 3])).toBe(6);
});

test('Test del corretto funzionamento del servizio', () => {
   return callGet(3, 4)
      .then(res => {
         expect(res.status).toBe(200);
         return res.json();
      })
      .then(jres => {
         expect(jres).toEqual({area: 12});
      })
      .catch(e => console.log(e));
});