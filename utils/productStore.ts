import { create } from 'zustand';
import { CartState } from './interfaces';

const useShoppingCartStore = create<CartState>((set) => ({
    allProductos: [],
    cartProduts: [],
    addProductCart: (product) =>
        set((state) => {
            const existProduct = state.cartProduts.find((item) => item.id === product.id);
            if (existProduct) {
                return {
                    cartProduts: state.cartProduts.map((item) =>
                        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                }
            } else {
                return {
                    cartProduts: [...state.cartProduts, { ...product, quantity: 1 }]
                };
            }
        }),
    removeOneItemQtd: (productId) =>
        set((state) => ({
            cartProduts: state.cartProduts.map((item) =>
                item.id === productId && item.quantity && item.quantity > 0
                    ? { ...item, quantity: item.quantity - 1 }
                    : item)
        })),
    addOneItemQtd: (productId) =>
        set((state) => ({
            cartProduts: state.cartProduts.map((item) =>
                item.id === productId ? { ...item, quantity: (item.quantity || 0) + 1 } : item)
        })),
    removeProductCart: (productId) => 
        set ((state) => ({
            cartProduts: state.cartProduts.filter((item) => item.id !== productId)
        })),
    clearCart: () => set({ cartProduts: []})
}))

export default useShoppingCartStore;