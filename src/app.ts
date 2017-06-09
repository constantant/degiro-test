export function sortProducts(products: ProductItem[], options?: Options): Result {
    let size = typeof options.size === 'number' ? options.size : 5,
        productsLength = products.length;

    if (size < 1 || size > productsLength) {
        return {
            highest: null,
            lowest: null
        }
    }

    let highestSize = size,
        lowestSize = productsLength < size * 2 ? productsLength - size : size;

    let sortedList = products.sort(
        (product1: ProductItem, product2: ProductItem) => product1.price - product2.price
    );

    return {
        highest: sortedList.splice(productsLength - highestSize - 1, highestSize),
        lowest: lowestSize < 1 ? null : sortedList.splice(0, lowestSize)
    }
}
