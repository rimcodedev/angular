import { Product } from './06-function-destructuring';
import { taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia A1',
        price: 150
    }, {
        description: 'iPad Air',
        price: 350
    }
];

const {description:description_name, price} = shoppingCart[0];

console.log('Product description:', description_name);
console.log('Product price:', price);

const [total, tax_result] = taxCalculation({products:shoppingCart, tax: 0.15});

console.log('Total:', total);
console.log('Tax: ', tax_result)
