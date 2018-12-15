const getArea = require('./area');

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