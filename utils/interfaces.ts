export interface IProducts {
    id: number;
    title: string;
    price: number;
    description: string;
    category: {
        id: number;
        image: string;
        name: string;
        creationAt: Date;
        updateAt: Date;
    };
    images: string[];
    creationAt: Date;
    updateAt: Date;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    images: string;
    quantity?: number | undefined;
}


export interface CartState {
    allProductos: Product[];
    cartProduts: Product[];
    addProductCart: (product: Product) => void;
    removeOneItemQtd: (productId: number) => void;
    addOneItemQtd: (productId: number) => void;
    removeProductCart: (productId: number) => void;
    clearCart: () => void;
    allProducts: () => Promise<void>
}


