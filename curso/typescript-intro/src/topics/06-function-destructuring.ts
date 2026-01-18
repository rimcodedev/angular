export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150
};

const tablet: Product = {
    description: 'iPad Air',
    price: 350
};

const shoppingCart = [phone, tablet];
const taxRate = 0.15;

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const { tax, products } = options;
    let total = 0;

    products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * tax];
}

// function taxCalculation(options: TaxCalculationOptions): [number, number] {
//     let total = 0;

//     options.products.forEach(({ price }) => {
//         total += price;
//     });

//     return [total, total * options.tax];
// }

// function taxCalculation({tax, products}: TaxCalculationOptions): [number, number] {
//     let total = 0;

//     products.forEach(({ price }) => {
//         total += price;
//     });

//     return [total, total * tax];
// }

const [total, tax_result] = taxCalculation({ products: shoppingCart, tax: taxRate });

console.log('Total:', total);
console.log('Tax:', tax_result);
