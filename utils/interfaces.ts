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
    images: string[]
    quantity: number;
}


export interface CartState {
    cartProduts: Product[];
    addProductCart: (product: Product) => void;
    removeProductCart: (productId: number) => void;
    removeOneItemQtd: (product: number) => void;
    productSearch: string;
    onChangeSearch: (value: string) => void
}


