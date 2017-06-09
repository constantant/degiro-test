export function sortProducts(products: ProductItem[], options?: Options): Result {
    if (!isModified(products, options)) {
        return {
            highest: null,
            lowest: null
        }
    }

    let size = options && typeof options.size === 'number' ? options.size : 5,
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


let _cache: CallCache = {
    products: []
};

function isModified(products: ProductItem[], options?: Options): boolean {
    if (
        (options !== _cache.options && options.size === _cache.options.size) ||
        (
            products.length === _cache.products.length &&
            !products.find(
                (product: ProductItem, index: number) => product.price !== _cache.products[ index ].price || product.id !== _cache.products[ index ].id
            )
        )
    ) {
        return false;
    }

    _cache.products = products;
    _cache.options = options;

    return true;
}
