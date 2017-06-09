interface ProductItem {
    id: number
    price: number
}

interface Options {
    size: number
}

interface CallCache {
    products: ProductItem[] | null
    options?: Options
}

interface Result {
    highest: ProductItem[]
    lowest: ProductItem[]
}