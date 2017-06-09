export function sortProducts(products: ProductItem[], options?: Options): Result {
    let size = (options.size || 5),
        sortedList = products.sort(
            (product1: ProductItem, product2: ProductItem) => product1.price - product2.price
        );

    return {
        highest: sortedList.splice(sortedList.length - size - 1, size),
        lowest: sortedList.splice(0, size),
    }
}
