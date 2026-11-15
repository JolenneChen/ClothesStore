const url = 'https://fakestoreapi.com';

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

async function fetchProducts<T>(path: string): Promise<T> {
    const response = await fetch(`${url}${path}`,{cache:"no-store"});
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

export async function getProducts(): Promise<Product[]> {
    return fetchProducts<Product[]>('/products');
}

export async function getProduct(id: number): Promise<Product> {
    return fetchProducts<Product>(`/products/${id}`);
}