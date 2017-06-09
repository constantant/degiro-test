interface ProductItem {
    id: number
    price: number
}

interface Options {
    size: number
}

interface Chache {
    products: ProductItem[]
    options?: Options
}

interface Result {
    highest: ProductItem[]
    lowest: ProductItem[]
}