// test(description, work);
import { calculateTotal } from '../calculate.js';
test(' test', () => {
    const result = 4;
    expect(result).toBe(4);
});

test('calculateTotal sum', () => {
    const list = [
        {
            id: 456,
            name: 'Война и мир',
            count: 3,
            price: 400
        },
        {
            id: 77,
            name: 'JavaScript',
            count: 1,
            price: 1300
        }
    ];
    const result = calculateTotal(list);
    expect(result).toBe(2500)
})